/* eslint-disable no-undef */
const chai = require('chai');
const validateConfig = require('../lib/generate/validateConfig.js');
const config = require('./testConfig.js');

const { expect } = chai;
// console.log(validateConfig(config));
describe('validateConfig.js', () => {
  describe('top-level validation', () => {
    it('show an error if parameters holds an invalid type', () => {
      expect(validateConfig(config).length > 0).to.equal(true);
    });
  });
});
