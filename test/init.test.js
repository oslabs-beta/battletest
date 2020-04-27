const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const init = require('../lib/cli/cmds/init');
/**
 * Integration testing for the init command
 */

const configLoc = path.resolve(process.cwd(), 'battletest.config.js');
describe('Integration testing: init', () => {
  beforeEach(() => {
    if (fs.existsSync(configLoc)) fs.unlinkSync(configLoc);
  });
  describe('Base/edge case arguments', () => {
    it('should save an empty config file if an empty array is given', (done) => {
      init([]);
      fs.exists(configLoc, (bool) => {
        expect(bool).to.equal(true);
        done();
      });
    });
    it('shouldn\'t do anything if more than one argument is given', (done) => {
      init(['one', 'two']);
      fs.exists(configLoc, (bool) => {
        expect(bool).to.equal(false);
        done();
      });
    });
    it('should throw an error if an invalid file type is given', () => {
      expect(() => init(['cfile.cpp'])).to.throw(/valid filetype/);
      expect(() => init(['cfile.cpp'])).to.throw(/valid filetype/);
      expect(() => init(['cfile.cpp'])).to.throw(/valid filetype/);
    });

    it('should throw an error if a nonexistant file is given', () => {
      expect(() => init(['fake.js'])).to.throw();
      expect(() => init(['yaml.yaml'])).to.throw();
    });
  });
});
