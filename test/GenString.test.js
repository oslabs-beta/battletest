const { expect } = require('chai');
const GenString = require('../lib/generate/genRandom/GenString.js');

describe('GenString', () => {
  let instance;
  before(() => {
    instance = new GenString();
  });
  it('should return this.vals[0] when called initially', () => {
    expect(instance.next()).to.equal(instance.vals[0]);
  });
  it('should return a random value when called more than this.vals.length', () => {
    while (instance.ind < instance.vals.length) {
      instance.next();
    }
    expect(instance.vals.map((a) => a.val)).to.not.contain(instance.next().val);
  });
});
