const Mocha = require('mocha');

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
} = Mocha.Runner.constants;
const { Base } = Mocha.reporters;
const { cursor, color } = Base;

/**
 * @name BattleReporter
 * @description Custom mocha reporter function to log info to a json object
 * @param {*} runner
 *
 */
function BattleReporter(runner, options) {
  Base.call(this, runner, options);

  const self = this;
  let indents = 0;
  const n = 0;

  runner.on(EVENT_RUN_BEGIN, () => {
    Base.consoleLog('⚔️⚔️⚔️Battletest Commence!⚔️⚔️⚔️');
  });

  runner.on(EVENT_SUITE_BEGIN, () => {
    ++indents;
    Base.consoleLog();
  });
}

module.exports = BattleReporter;
