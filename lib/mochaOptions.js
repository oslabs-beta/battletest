const BattleReporter = require('./BattleReporter.js');

module.exports = {
  fullTrace: false, // disallow showing full trace of where failure originated
  reporter: BattleReporter, // display test run as a simple list
  //  ADD ADDITIONAL CUSTOM REPORTER TO OUTPUT RESULTS INTO A JSON FILE
  diff: false,
};
