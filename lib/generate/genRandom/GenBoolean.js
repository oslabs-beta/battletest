const defaultTestValues = require('./defaultTestValues.js');

class GenBoolean {
  /**
     * Generates test data of data type "Boolean".
     * this.ind tracks the number of times GenString() has been invoked.
     * Each time GenString.next() is called, the class will output an object with "val" specifying the test value and "descript" specifying how the val was generated. Ex. { val: 5, descript: 'random intetger between 0 and 5' }.
     */
  constructor() {
    this.ind = 0;
    this.vals = [
      { val: true, descript: 'boolean_true' },
      ...defaultTestValues,
    ];
  }

  /**
     *
     * @param {boolean} [rand] - set to "true" to generate true random value
     */
  next(rand) {
    if (!rand && this.ind < this.vals.length) { return this.vals[this.ind++]; }
    return {
      val: Math.randm() > 0.5,
      descript: 'Random boolean',
    };
  }
}

module.exports = GenBoolean;
