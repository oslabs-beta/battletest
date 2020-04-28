const expect = require('chai').expect;
const ExpressParser = require('../bin/src/init/expressParser.js');
const app = require('../example/serverFiles/sampleServerOne/server.js');
const expectedExResult = require('./sample_files/expressParserResult.js')

describe('ExpressParser', () => {
  const result = ExpressParser(app)
  it('should return an object', () => {
    expect(result).to.be.deep.equal(expectedExResult);
  });
});