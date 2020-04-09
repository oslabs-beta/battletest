const fs = require('fs');
const path = require('path');

/** @name writeLog
 *  @description module that handles response body (or bodies) to write a
 *  comprehensive log file of ran tests. Logs useful information from response bodies
 *  @param  {Array} tests Array of tests? extracted from running mocha programatically
 *  @param  {Array} responses Array of response objects to extract data from
 *  @returns {undefined}
 *  @todo Each route endpoint will get test file, add a json file to write http response objects
 */

const writeLog = (tests, responses) => {
  const rootDir = '../../../';
  const logPath = path.join(__dirname, rootDir, 'battletest.log');
  console.log(logPath);
  fs.writeFileSync(logPath, 'BATTLETEST LOG FILE');

  //  For each response, log the:
  //  URL, Body, Cookies?, Headers, Test Results?, Status, Time, Size
  fs.appendFileSync(logPath);
};


module.exports = { writeLog };
