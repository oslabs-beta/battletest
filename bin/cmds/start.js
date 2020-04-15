/**
 * @name bin/cmds/start
 * @description Run test files (specified or all) in __battletest__
 * @param {Array.<String>} [filenames] - Test files to be executed, as specified by the user.
 * @returns {null} undefined
 */

const fs = require('fs');
const path = require('path');
const Mocha = require('mocha');

const mochaOptions = require('../src/mochaOptions.js');
const checkFiles = require('../src/start/checkFiles.js')

const mocha = new Mocha(mochaOptions);

const start = (...filenames) => {
  const directory = path.resolve(process.cwd(), '__battletest__');

  if (filenames.length > 0) {
    const notInTestDirectory = checkFiles(filenames, directory);
    if (notInTestDirectory) {
      console.error(`battletest: following files were not found in __battletest__: ${notInTestDirectory}.`);
      return; 
    }
    if (filenames.indexOf('testSetup.js') < 0) { filenames.push('testSetup.js'); }   
  } 
  else {
    // queue all .js files in __battletest__ to be executed.
    filenames = fs.readdirSync(directory).filter((filename) => filename.substr(-3) === '.js');
  }
  // TO DO: Ensure testSetup has been created
  // add all files to the mocha instance to be executed.
  filenames.forEach((file) => {
    mocha.addFile(path.join(directory, file));
  });

  mocha.run((failures) => {
    process.exitCode = failures ? 1 : 0;
  });

  mocha.unloadFiles();
};

module.exports = start;
