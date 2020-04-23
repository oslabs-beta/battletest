/* eslint-disable no-undef */
const chai = require('chai');
const validateConfig = require('../bin/src/generate/validateConfig.js');
const config = require('../testConfig.js');

const { expect } = chai;
// console.log(validateConfig(config));
describe('validateConfig.js', () => {
  describe('top-level validation', () => {
    xit('should throw an error if there is an invalid server location', () => {
      expect(() => {
        validateConfig(config);
      }).to.throw();
    });
  });
});
