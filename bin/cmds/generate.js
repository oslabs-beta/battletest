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

const generate = (...paths) => {
  // if user provided paths, check that paths do exist
  if (paths.length > 0) {
    const temp = Object.keys(config.paths);
    const notInConfig = paths.filter((path) => !temp.includes(path));
    if (notInConfig) {
      console.error(
        `battletest: following paths were not found in battletest.config.js: ${notInConfig}.`
      );
      return;
    }
  }

  for (path of Object.keys(config.paths)) {
    for (operation of Object.keys(config.paths[path])) {
      generateTestFile(path, operation, config.paths[path][operation]);
    }
  }

  generateTestSetup(config.serverLocation, config.serverURL);
};

module.exports = generate;
