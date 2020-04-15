/**
 * @name bin/cmds/generate
 * @description Generate test files for all or specified paths in battletest.config.js
 * @param {Array.String} [paths] - Names of routes for which test files to be generated.
 * @returns {null} saves test files to __battletest__
 */

const path = require('path');
const requireUncached = require('../util/requireUncached.js');
const generateTestSetup = require('../src/generate/generateTestSetup.js');

//const TestFile = require('../src/generate/TestFile.js');


const generate = (...paths) => {
  const config = requireUncached(path.resolve(process.cwd(),'battletest.config.js'));

  // if user provided paths, check that paths do exist
  if (paths.length > 0) {
    // TO DO
  }
  else {
  }

  let newTestFile;
  for (path of Object.keys(config.paths)) {
    for (operation of Object.keys(config.paths[path])) {
      generateTestFile(path, operation, config.paths[path][operation]);
    }
  }

  generateTestSetup(config.serverLocation, config.serverURL);

};

module.exports = generate;
