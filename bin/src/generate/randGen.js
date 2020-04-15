/* eslint-disable class-methods-use-this */
/** @name randGen
 * @constructor builds several edge case values of several type values
 */

class randGen {
  constructor() {
    this.nums = [
      0,
      -1,
      Number.MAX_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_VALUE,
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
    ];

    this.strs = [
      '',
    ];
  }

  /** @param {number} n Length of randomly generated string, 10 by default
   * @returns {string} random string of size n
   */
  str(n) {
    const l = n || 10;
    return [...Array(l)].map((i) => (~~(Math.random() * 36)).toString(36)).join('');
  }

  /** @param {boolean} next Option to generate a true random value
   *  or the next value of this.nums, false by default
   *  @returns {number} a random number or the next value of this.nums
   */
  num(next) {
    if (next && this.nums.length) return this.nums.shift();
    return Math.random() * 256;
  }

  /** @returns {boolean} true or false at random
   */
  bool() {
    return Math.random() > 0.5;
  }

  /** @param {string} type Primitive (or reference) value type
   *  @param {number} len Length of randomly generated array, 5 by default
   *  @returns {array} an array of randomly generated elements of specified type
   */
  arr(type, len = 5) {
    const func = this.switcharoo(type);

    return [...Array(len)].map((i) => func(), this);
  }

  /** @param {object} props reference to the object's properties and their type
   *  @returns {object} returns a new object containing randomly generated values for each specified key
   */
  obj(props) {
    const newObj = {};
    Object.keys(props).forEach((key) => {
      const func = this.switcharoo(props[key].type);
      newObj[key] = func();
    }, this);
    return newObj;
  }

  /**
   *
   * @returns
   */
  next() {

  }

  /** @param {string} type Primitive (or reference) value type
   *  @returns {function} method of randGen to generate the specified data type
   */
  switcharoo(type) {
    switch (type) {
      case 'string':
        return this.str;
      case 'interger':
      case 'number':
        return this.num;
      case 'boolean':
        return this.bool;
        //   case 'array':
        //     func = this.arr;
        //     break;
        //   case 'object':
        //     func = this.obj;
        //     break;
        // currently breaks when inputting another array or object type
      default:
        return () => null;
    }
  }
}


module.exports = randGen;
