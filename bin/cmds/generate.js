/**
 * @name bin/cmds/generate
 * @description Generate test files for all or specified paths in battletest.config.js
 * @param {Array.String} [paths] - Names of routes for which test files to be generated.
 * @returns {null} saves test files to __battletest__
 */

const path = require("path");
const requireUncached = require("../util/requireUncached.js");
const generateTestSetup = require("../src/generate/generateTestSetup.js");
const generateTestFile = require("../src/generate/generateTestFile.js");

const config = requireUncached(
  path.resolve(process.cwd(), "battletest.config.js")
);

const generate = (...args) => {
  // if user provided paths, check that paths do exist in config
  if (args.length > 0) {
    const temp = Object.keys(config.paths);
    const notInConfig = args.filter((path) => !temp.includes(path));
    if (notInConfig) {
      console.error(
        `battletest: following paths were not found in battletest.config.js: ${notInConfig}.`
      );
      return;
    }
  }

  for (let p of Object.keys(config.paths)) {
    for (let operation of Object.keys(config.paths[p])) {
      generateTestFile(p, operation, config.paths[p][operation]);
    }
  }

  generateTestSetup(config.serverLocation, config.serverURL);

  console.log('battletest: Test files saved in __battletest__.')
};

module.exports = generate;
