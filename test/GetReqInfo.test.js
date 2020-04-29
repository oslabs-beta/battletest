const expect = require('chai').expect;
const GetReqInfo = require('../lib/init/expressParserMethods/getReqInfo.js');
const routeInfo = require('./sample_files/routeInfoTest.js');
const expectedReqInfo = require('./sample_files/reqInfoResultTest.js');

describe('GetReqInfo', () => {
  const result = GetReqInfo(routeInfo);

  it('should return an object', () => {
    expect(result).to.be.an('object');
  });

  it('should build correct battletest.config object', () => {
    expect(result).to.be.eql(expectedReqInfo);
  });
});