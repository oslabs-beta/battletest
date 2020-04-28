/**
 * @description Integration tests for generate.js
 */
const path = require('path');
const fs = require('fs');
const generate = require('../lib/cli/cmds/generate.js');

describe('Integration testing: generate', () => {
  beforeEach('deletes any previously created filesystem() => {
    if (fs.existsSync('__battletest__')) fs.unlinkSync('__battletest__');
  });
  const config = require('./resources/battletest.config.js');
  describe('Base/edge cases', () => {
    it('should ');
  });
});
