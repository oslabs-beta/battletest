/**
 * @description Integration tests for generate.js
 */
const path = require('path');
const fs = require('fs');
const chai = require('chai');
const deleteFolderRecursive = require('./deleteFolderRecursive.js');

const { expect } = chai;
const generate = require('../lib/cli/cmds/generate.js');
const invalid1 = require('./resources/configs/invalid1.config.js');
const invalid2 = require('./resources/configs/invalid2.config.js');
const invalid3 = require('./resources/configs/invalid3.config.js');
const valid1 = require('./resources/configs/valid1.config.js');
const valid2 = require('./resources/configs/valid2.config.js');
const valid3 = require('./resources/configs/valid3.config.js');


describe('Integration testing: generate', () => {
  beforeEach('deletes any previously created filesystem', () => {
    deleteFolderRecursive('__battletest__');
  });
  after('cleans up any files that were created during the tests', () => {
    deleteFolderRecursive('__battletest__');
  });
  describe('Base/edge cases', () => {
    it('shouldn\'t do anything for invalid config files', () => {
      generate(invalid1);
      expect(fs.existsSync('__battletest__')).to.equal(false);
      generate(invalid2);
      expect(fs.existsSync('__battletest__')).to.equal(false);
      generate(invalid3);
      expect(fs.existsSync('__battletest__')).to.equal(false);
    });
  });
  describe('General cases', () => {
    it('should create a new __battletest__ directory for a valid config file', () => {
      generate(valid1);
      expect(fs.existsSync('__battletest__')).to.equal(true);
    });
    it('should create properly named files for the corresponding config', () => {
      generate(valid2);
      expect(fs.existsSync('__battletest__/_pet_:petID_GET.js')).to.equal(true);
      expect(fs.existsSync('__battletest__/_pet_:petID_PUT.js')).to.equal(true);
    });
    it('should be capable of generating test files for specific routes only', () => {
      generate(valid3, '/getMessages', '/postMessage');
      expect(fs.existsSync('__battletest__/_getMessages_get.js')).to.equal(true);
      expect(fs.existsSync('__battletest__/_postMessage_post.js')).to.equal(true);
      expect(fs.existsSync('__battletest__/_deleteMessage_delete.js')).to.equal(false);
    });
    it('should do nothing if an invalid route is given', () => {
      generate(valid3, '/fakeRoute');
      expect(fs.existsSync('__battletest__')).to.equal(false);
    });
  });
});
