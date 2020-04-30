const defaultTestValues = require('./defaultTestValues.js');
/** @class
     * @description Generates test data for "Number".
     * this.ind tracks the number of times GenInt() has been invoked.
     * Each time GenInt.next() is called, the class will output an object with "val" specifying the test value and "descript" specifying how the val was generated. Ex. { val: 5, descript: 'random intetger between 0 and 5' }.
     */
class GenNumber {
  constructor() {
    this.ind = 0;
    this.vals = [
      { val: Math.ceil(Math.random() * 10), descript: 'Random integer between 0 and 10' },
      ...defaultTestValues,
      { val: Number.MAX_SAFE_INTEGER, descript: '2^53 - 1' },
      { val: Number.MIN_SAFE_INTEGER, descript: '-(2^53 - 1)' },
      { val: Number.MAX_VALUE, descript: '1.79e+308' },
      { val: Number.POSITIVE_INFINITY, descript: 'Number.POSITIVE_INFINITY' },
      { val: Number.NEGATIVE_INFINITY, descript: 'Number.NEGATIVE_INFINITY' },
    ];
  }

  /**
     * Returns a single test data at each invocation. First, returns each of this.vals in sequence.
     * Then, returns random number between 0 and 256.
     * Each value is
     */
  next(rand) {
    if (!rand && this.ind < this.vals.length) { return this.vals[this.ind++]; }
    return { val: Math.random() * 256, descript: 'random value ( Math.random()*256 )' };
  }
}

module.exports = GenNumber;
