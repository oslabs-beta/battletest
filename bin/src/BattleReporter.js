const Mocha = require('mocha');
const chalk = require('chalk');
// constant event name variables to use
const {
  EVENT_RUN_BEGIN, // execution begin
  EVENT_RUN_END, // execution end
  EVENT_TEST_FAIL, // test fail
  EVENT_TEST_PASS, // test pass
  EVENT_SUITE_BEGIN, // suite starts
  EVENT_SUITE_END, // suiet ends
  EVENT_TEST_BEGIN, // test begins
  EVENT_TEST_END, // test ends
  EVENT_TEST_PENDING, // test pending
} = Mocha.Runner.constants;
const { Base } = Mocha.reporters;
const { cursor, color } = Base;

/**
 * @name BattleReporter
 * @description Custom mocha reporter function to log info to a json object
 * @param {Mocha.Runner} runner
 *
 */
class BattleReporter {
  constructor(runner) {
    this._indents = 0;
    const { stats } = runner;
    this.tests = [];
    this.pending = [];
    this.failures = [];
    this.passes = [];
    runner
      .once(EVENT_RUN_BEGIN, () => {
        console.log('⚔️ ⚔️ ⚔️  BattleTest Commence! ⚔️ ⚔️ ⚔️');
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
        const fmt = this.indent()
          + chalk.green.inverse('PASS')
          + chalk.green('  %s')
          + chalk.yellow(' (%dms)');
        // Test#fullTitle() returns the suite name(s)
        // prepended to the test title
        console.log(fmt, test.title, test.duration);
      })
      .on(EVENT_TEST_FAIL, (test, err) => {
        this.failures.push(test);
        const fmt = this.indent()
          + chalk.red.inverse('FAIL')
          + chalk.red('  %s')
          + chalk.yellow(' (%dms)');
        // Test#fullTitle() returns the suite name(s)
        // prepended to the test title
        console.log(fmt, test.title, test.duration);
      })
      .once(EVENT_RUN_END, () => {
        console.log('OK!');
        console.log(`Final results: ${stats.passes}/${stats.passes + stats.failures} ok`);
        console.log(this.cleanCycles);
        const obj = {
          stats,
          tests: this.tests.map(this.clean),
          pending: this.pending.map(this.clean),
          failures: this.failures.map(this.clean),
          passes: this.passes.map(this.clean),
        };
        console.log('This should print!');
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
}

module.exports = BattleReporter;
