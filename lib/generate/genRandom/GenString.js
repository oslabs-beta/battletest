const defaultTestValues = require('./defaultTestValues.js');
/** @class
     * @description Generates test data of data type "String".
     * this.ind tracks the number of times GenString() has been invoked.
     * Each time GenString.next() is called, the class will output an object with "val" specifying the test value and "descript" specifying how the val was generated. Ex. { val: 5, descript: 'random intetger between 0 and 5' }.
     */
class GenString {
  constructor() {
    this.ind = 0;
    this.vals = [
      { val: [...Array(10)].map((i) => (~~(Math.random() * 36)).toString(36)).join(''), descript: 'Random string of length 10' },
      ...defaultTestValues,
      { val: 'a'.repeat(400), descript: 'a.repeat(256)' },
      {
        val: 'SELECT * FROM information_schema.tables',
        descript: 'Postgres SQL injection',
      },
    ];
  }

  /**
     *
     * @param {boolean} [rand] - set to "true" to generate true random value
     */
  next(rand) {
    if (!rand && this.ind < this.vals.length) { return this.vals[this.ind++]; }
    return {
      val: [...Array(10)].map((i) => (~~(Math.random() * 36)).toString(36)).join(''),
      descript: 'Random string',
    };
  }
}

module.exports = GenString;
