/**
 * @name bin/cmds/generate
 * @description Generate test files for all or specified paths in battletest.config.js
 * @param {Array.String} [paths] - Names of routes for which test files to be generated.
 * @returns {null} saves test files to __battletest__
 */

const generateFolders = require('../../generate/genCode/generateFolders.js');
const generateTestSetup = require('../../generate/genCode/generateTestSetup.js');
const generateTestFile = require('../../generate/generateTestFile.js');
const validateConfig = require('../../generate/validateConfig.js');

const generate = (config, ...args) => {
  // check if the config file has been properly formatted
  const validationErrors = validateConfig(config);
  if (validationErrors.length > 0) {
    validationErrors.forEach((error) => console.log(error));
    return;
  }

  let targetPaths = Object.keys(config.paths);

  // if user provided paths, check that paths do exist in config
  if (args.length > 0) {
    const notInConfig = args.filter((path) => !targetPaths.includes(path));
    if (notInConfig.length > 0) {
      console.error(
        `battletest: following paths were not found in battletest.config.js: ${notInConfig}.`,
      );
      return;
    }
    targetPaths = args;
  }

  generateFolders(); // add __battletest__ and __result__ folders if they don't currently exist

  for (const p of targetPaths) {
    for (const operation of Object.keys(config.paths[p])) {
      generateTestFile(p, operation, config.paths[p][operation]);
    }
  }

  generateTestSetup(config.serverLocation, config.serverURL);

  console.log('battletest: Test files saved in __battletest__.');
};

module.exports = generate;
