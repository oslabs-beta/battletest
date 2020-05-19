const { expect } = require('chai');
const GenArray = require('../lib/generate/genRandom/GenArray');

describe('GenArray', () => {
  it('should return an array with object elements', () => {
    const test = new GenArray({
      type: 'object',
      properties: {
        name: { type: 'string' },
        family: {
          type: 'object',
          properties: {
            dad: { type: 'string' },
            mom: { type: 'string' },
          },
        },
      },
    });
  });
  
  it('should return an array with string elements', () => {
    const test = new GenArray({ type: 'string' });
    const result = test.next();
    expect(Array.isArray(result.val)).to.equal(true);
    expect(typeof (result.val[0])).to.equal('string');
  });

  it('should return an array with number elements', () => {
    const test = new GenArray({ type: 'number' });
    const result = test.next();
    expect(Array.isArray(result.val)).to.equal(true);
    expect(typeof (result.val[0])).to.equal('number');
  });
});
