/* eslint-disable no-undef */
const chai = require('chai');
const validateConfig = require('../bin/src/generate/validateConfig_old.js');
const config = require('../newConfig.js');

const { expect } = chai;

describe('validateConfig.js', () => {
  describe('top-level validation', () => {
    it('should throw an error if there is an invalid server location', () => {
      expect(() => {
        validateConfig(config);
      }).to.throw();
    });
  });
});
