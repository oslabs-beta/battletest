/** @description Integration testing for the start command
 *
 */

const path = require('path');
const fs = require('fs');
const chai = require('chai');
const start = require('../lib/cli/cmds/start.js');
const generate = require('../lib/cli/cmds/generate.js');
const valid1 = require('./resources/configs/valid1.config.js');
const valid2 = require('./resources/configs/valid2.config.js');
const valid3 = require('./resources/configs/valid3.config.js');
const deleteFolderRecursive = require('./deleteFolderRecursive.js');

const { expect } = chai;

describe('Integration tests for start', () => {
  before('cleanup lingering files from prior testing', () => {
    deleteFolderRecursive('__battletest__');
  });
  after('cleanup lingering files from prior testing', () => {
    deleteFolderRecursive('__battletest__');
  });
  describe('Base/edge cases', () => {
    it('should throw an error if there is no __battletest__ directory', () => {
      expect(() => start()).to.throw();
    });
  });

  xdescribe('General cases', () => {
    before('create a new __battletest__ with test files to run', () => {
      generate(valid3);
    });
    it('should run test files in __battletest__', () => {
      expect(() => start()).to.not.throw();
      process.stdin.push('n \n');
    });
    xit('should output correct json files out in __battletest__/__result__', () => {
      expect(fs.existsSync('__battletest__/__result__/_getMessages_get.json')).to.equal(true);
      expect(fs.existsSync('__battletest__/__result__/_postMessage_post.json')).to.equal(true);
      expect(fs.existsSync('__battletest__/__result__/_deleteMessage_delete.json')).to.equal(true);
    });
  });
});
