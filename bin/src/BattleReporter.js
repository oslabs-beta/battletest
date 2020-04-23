const Mocha = require('mocha');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
// constant event name variables to use
const {
  EVENT_RUN_BEGIN, // execution begin
  EVENT_RUN_END, // execution end
  EVENT_TEST_FAIL, // test fail
  EVENT_TEST_PASS, // test pass
  EVENT_SUITE_BEGIN, // suite starts
  EVENT_SUITE_END, // suite ends
  EVENT_TEST_BEGIN, // test begins
  EVENT_TEST_END, // test ends
  EVENT_TEST_PENDING, // test pending
} = Mocha.Runner.constants;

const {
  Base
} = Mocha.reporters;
const {
  cursor,
  color
} = Base;

/**
 * @name BattleReporter
 * @description Custom mocha reporter class to log info to a json object
 * @param {Mocha.Runner} runner
 *
 */
class BattleReporter {
  constructor(runner) {
    this._indents = 0;
    const {
      stats
    } = runner;
    this.tests = [];
    this.pending = [];
    this.failures = [];
    this.passes = [];
    this.reportObj = {};
    runner
      .once(EVENT_RUN_BEGIN, () => {
        console.log(`⚔️ ⚔️ ⚔️  ${chalk.bold('BattleTest Commence!')} ⚔️ ⚔️ ⚔️`);
      })
      .on(EVENT_SUITE_BEGIN, (suite) => {
        this.increaseIndent();
        console.log(chalk.blue('%s%s'), this.indent(), suite.title);
      })
      .on(EVENT_SUITE_END, () => {
        this.decreaseIndent();
      })
      .on(EVENT_TEST_PENDING, (test) => {
        this.pending.push(test);
      })
      .on(EVENT_TEST_END, (test) => {
        this.tests.push(test);
        // Write to JSON
      })
      .on(EVENT_TEST_PASS, (test) => {
        this.passes.push(test);
        const fmt = this.indent() +
          chalk.green.inverse('PASS') +
          chalk.green('  %s') +
          chalk.yellow(' (%dms)');
        // Test#fullTitle() returns the suite name(s)
        // prepended to the test title
        console.log(fmt, test.title, test.duration);
      })
      .on(EVENT_TEST_FAIL, (test, err) => {
        this.failures.push(test);
        const fmt = this.indent() +
          chalk.red.inverse('FAIL') +
          chalk.red('  %s') +
          chalk.yellow(' (%dms)');
        // Test#fullTitle() returns the suite name(s)
        // prepended to the test title
        console.log(fmt, test.title, test.duration);
      })
      .once(EVENT_RUN_END, () => {
        // formatting the output string results
        const fmt = `\n${chalk.bold.inverse('Final results:')}\n${
          chalk.bold.green(stats.passes)
        }${chalk.bold(' / ')
        }${chalk.bold.blue(stats.tests)
        } tests passed!`;
        console.log(fmt);

        this.reportObj = {
          stats,
          tests: this.tests.map(this.clean, this),
          pending: this.pending.map(this.clean, this),
          failures: this.failures.map(this.clean, this),
          passes: this.passes.map(this.clean, this),
        };
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });
        rl.question('Would you like to output your results to an external file? (y/n): ', (ans) => {
          if (ans === 'y') {
            console.log('Writing to output file');
            this.writeReport();
          }
          rl.close();
        });
      });
  }

  indent() {
    return Array(this._indents).join('  ');
  }

  increaseIndent() {
    this._indents++;
  }

  decreaseIndent() {
    this._indents--;
  }

  /**
   * Return a plain-object representation of `test`
   * free of cyclic properties etc.
   *
   * @private
   * @param {Object} test
   * @return {Object}
   */
  clean(test) {
    let err = test.err || {};
    if (err instanceof Error) {
      err = this.errorJSON(err);
    }
    return {
      title: test.title,
      fullTitle: test.fullTitle(),
      duration: test.duration,
      currentRetry: test.currentRetry(),
      err: this.cleanCycles(err),
    };
  }

  /**
   * Replaces any circular references inside `obj` with '[object Object]'
   *
   * @private
   * @param {Object} obj
   * @return {Object}
   */
  cleanCycles(obj) {
    const cache = [];
    return JSON.parse(
      JSON.stringify(obj, (key, value) => {
        if (typeof value === 'object' && value !== null) {
          if (cache.indexOf(value) !== -1) {
            // Instead of going in a circle, we'll print [object Object]
            return `${value}`;
          }
          cache.push(value);
        }
        return value;
      }),
    );
  }

  /**
   * Transform an Error object into a JSON object.
   *
   * @private
   * @param {Error} err
   * @return {Object}
   */
  errorJSON(err) {
    const res = {};
    Object.getOwnPropertyNames(err).forEach((key) => {
      res[key] = err[key];
    }, err);
    return res;
  }

  /**
   * Write the results of the test to an external file
   *
   */
  writeReport() {
    // console.log(process.cwd());
    const dirPath = path.join(process.cwd(), '/report');
    const filePath = path.join(dirPath, 'battletest.log');
    // fs.mkdirSync(dirPath);
    fs.writeFileSync(filePath, JSON.stringify(this.reportObj));
    console.log(`Written results to ${filePath}`);
  }
}


module.exports = BattleReporter;