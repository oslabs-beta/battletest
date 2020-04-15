
/**
 * @name bin/src/generate/generateDescribe
 */

module.exports = (path, operation, testcode) => {

    const code =  `
const fs = require('fs');
const path = require('path');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const result = {}

describe('${path}_${operation}', function() {
    
    ${testcode}

    afterEach(function() {
        result[this.currentTest.fullTitle()]['passed'] = this.currentTest.state === 'passed';
    });

    after(() => {
        const resultPath = path.resolve(process.cwd(),"__battletest__/__result__/${path}_${operation}.json")
        fs.writeFile(resultPath, JSON.stringify(result), function(err) {
        if (err) throw err
        });
    });
});
    `
     return code;
}