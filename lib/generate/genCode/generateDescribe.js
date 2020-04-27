
/**
 * @name bin/src/generate/generateDescribe
 * @description Generates a describe block for a given route and method. Also generates testcode
 */

module.exports = (path, operation, testcode) => {
  const code = `
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
    const resultPath = path.resolve(process.cwd(),"__battletest__/__result__/${path.replace(/\//g, '_')}_${operation}.json")
    fs.writeFile(resultPath, JSON.stringify(result, null, 2), function(err) {
    if (err) throw err
    });
});
});
    `;
  return code;
};
