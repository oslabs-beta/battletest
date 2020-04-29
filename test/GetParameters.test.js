const expect = require('chai').expect;
const GetParameters = require('../lib/init/expressParserMethods/getParameters.js');


describe('GetParameters', () => {
  const arr = [
    [
      ['params', 'id'],
      ['params', 'id'],
      ['user', 'body'],
      ['body', 'userInfo', 'username', 'userContacts', 'userEmail'],
      ['body']
    ]
  ];


  it('should have properties named parameters and reqBodyProp', () => {
    const result = GetParameters(arr);
    expect(result).to.have.keys(['parameters', 'reqBodyProp']);
  });

  it('parameters should be an array', () => {
    const result = GetParameters(arr);
    const {
      parameters
    } = result;
    expect(parameters).to.be.an('array');

  });

  it('reqBodyProp should be an object', () => {
    const result = GetParameters(arr);

    expect(result.reqBodyProp).to.be.an('object');
  });

});