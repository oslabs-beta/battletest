// test case for 1.[user] 2.[user, username] 3.['user', username, profile ]

const { expect } = require('chai');
const { buildBodyProp } = require('../bin/src/init/expressParserMethods/buildBodyProp.js');


describe('buildBodyProp', () => {
  it('should have a property named user', () => {
    const reqBody = {};
    buildBodyProp(['user'], reqBody);
    expect(reqBody).to.have.property('user');
  });


  it('should have a property named type as a value of user  ', () => {
    const reqBody = {};
    buildBodyProp(['user'], reqBody);
    expect(reqBody).to.deep.include({ user: { type: null } });
  });

  // test for an array of two elements
  it('should have a property named type as a value of user ', () => {
    const reqBody = {};
    buildBodyProp(['user'], reqBody);
    buildBodyProp(['user', 'username'], reqBody);
    expect(reqBody).to.have.deep.nested.property('user.properties', { username: { type: null } });
  });


  it('should be a nested object', () => {
    const reqBody = {};
    const ObjOfTwoEl = {
      user: {
        type: 'object',
        properties: {
          username: {
            type: null,
          },
        },
      },
    };
    buildBodyProp(['user', 'username'], reqBody);
    expect(reqBody).to.eql(ObjOfTwoEl);
  });

  // test for an array of more than 2 element ['user', 'username', 'profile' ]
  it('should be a nested object', () => {
    const reqBody = {};
    const ObjOfThreeEl = {
      user: {
        type: 'object',
        properties: {
          username: {
            type: 'object',
            properties: {
              profile: {
                type: null,
              },
            },
          },
        },
      },
    };
    buildBodyProp(['user', 'username', 'profile'], reqBody);
    expect(reqBody).to.eql(ObjOfThreeEl);
  });
});
