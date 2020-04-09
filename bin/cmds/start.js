/**
 * @name bin/cmds/start
 * @description execute "battletest start" by running tests in __battletest__ upon 
 * @param {Array.String} testFiles - names of testFiles passed by the user
 * @returns {null} undefined
 */

const fs = require('fs');
const path = require('path');
const Mocha = require('mocha');

// initialize options for mocha
const mochaOptions = require('../src/mochaOptions.js')

const mocha = new Mocha(mochaOptions); // create a new instance of mocha

const start = (...testFiles) => {
    const testDirectory = path.resolve(process.cwd(), '__battletest__'); 

    if (testFiles.length > 0) {
        // add .js to each string in testFiles, if not already specified
        testFiles = testFiles.map(filename => filename.substr(-3) === '.js' ? filename : filename + '.js');

        // check that all test files are in testDirectory
        const filesInTestDirectory = fs.readdirSync(testDirectory) // get list of files in test directory
        const notInTestDirectory = testFiles.reduce((acc, testFile) => {
            if (!filesInTestDirectory.includes(testFile)) {
                acc.push(testFile);
                return acc;
            }
            return acc;
        }, []);
        // if any testFile is not in testDirectory, return error and stop execution
        if (notInTestDirectory.length > 0) {
            console.error(`battletest: following files are not found in __battletest__: ${notInTestDirectory}.`);
            return;
        }
        // otherwise, ready to add testFiles to the mocha instance
        // add mochaServer to testFiles, if not already specified
        if (testFiles.indexOf('mochaServer.js') < 0) { testFiles.push('mochaServer.js') }
    } else {
        // if no testFile specified, then add all tests in __battletest__ to testFiles
        testFiles = fs.readdirSync(testDirectory).filter(filename => filename.substr(-3) === '.js'); // add only .js files to testFiles 
    }

    // add tests in __battletest__ to testFiles
    testFiles.forEach(file => {
        mocha.addFile(path.join(testDirectory, file));
    });
    
    // execute tests
    mocha.run((failures) => {
        process.exitCode = failures ? 1 : 0; // if there were failures, exit with 1
    });

    // dump test files that have been executed, to allow for fresh reload
   mocha.unloadFiles();
}

module.exports = start