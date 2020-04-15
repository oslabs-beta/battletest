/* eslint-disable class-methods-use-this */
/** @name randGen
 * @constructor takes in the type of the primitive value type to generate
 */

class randGen {
  constructor(type, items) {
    this.type = type; //data type
    this.items = items; //if array, data type of the elements of the array
    this.func = this.switcheroo(this.type); //function used to generate values
    this.ind = 0;
  }

  /** @param {boolean} ran Option to generate a true random value with no descript
   * @returns {string} random string of size n
   */
  str(ran) {
    const strs = [
      { val: "string", descript: "Normal string" },
      { val: "*".repeat(256), descript: "Extremely long string" },
      {
        val: "SELECT * FROM information_schema.tables",
        descript: "Postgres SQL injection",
      },
      { val: -20, descript: "Negative number" },
      { val: Number.POSITIVE_INFINITY, descript: "positive infinity" },
    ];

    if (this.ind < strs.length && !ran) return strs[this.ind++];
    else if (!ran)
      return {
        val: [...Array(10)]
          .map((i) => (~~(Math.random() * 36)).toString(36))
          .join(""),
        descript: "random string",
      };
    else
      return [...Array(10)]
        .map((i) => (~~(Math.random() * 36)).toString(36))
        .join("");
  }

  /** @param {boolean} ran Option to generate a true random value
   *  or the next value of this.nums, false by default
   *  @returns {number} a random number or the next value of this.nums
   */
  num(ran) {
    const nums = [
      { val: 5, descript: "Normal number" },
      // { val: 0, descript: "Zero" },
      // { val: -1, descript: "Negative number" },
      { val: Number.MAX_SAFE_INTEGER, descript: "2^53 - 1" },
      { val: Number.MIN_SAFE_INTEGER, descript: "-(2^53 - 1)" },
      { val: Number.MAX_VALUE, descript: "1.79e+308" },
      { val: Number.POSITIVE_INFINITY, descript: "positive infinity" },
      { val: Number.NEGATIVE_INFINITY, descript: "negative infinity" },
    ];
    if (this.ind < nums.length && !ran) return nums[this.ind++];
    else if (!ran)
      return { val: Math.random() * 256, descript: "random number" };
    else return Math.random() * 256;
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
  arr(type) {
    const func2 = context.switcheroo(type);
    //const retArr = [...Array(5)];
    return [...Array(5)].map((i) => func2(true));
    //return retArr;
  }

  /** @param {object} props reference to the object's properties and their type
   *  @returns {object} returns a new object containing randomly generated values for each specified key
   */
  obj(props) {
    const newObj = {};
    Object.keys(props).forEach((key) => {
      const func = this.switcheroo(props[key].type);
      newObj[key] = func();
    }, this);
    return newObj;
  }

  /**
   *
   * @returns a random value of specified type by this.type, initally returns a constant normal value
   */
  next() {
    if (this.type === "array") {
      if (this.items === "number" || this.items === "integer")
        return {
          val: [...Array(5)].map((i) => Math.random() * 256),
          descript: "Random array of numbers",
        };
      else
        return {
          val: [...Array(5)].map((i) =>
            [...Array(10)]
              .map((i) => (~~(Math.random() * 36)).toString(36))
              .join("")
          ),
          descript: "Random array of strings",
        };
    } else return this.func();
  }

  /** @param {string} type Primitive (or reference) value type
   *  @returns {function} method of randGen to generate the specified data type
   */
  switcheroo(type) {
    switch (type) {
      case "string":
        return this.str;
      case "integer":
      case "number":
        return this.num;
      case "boolean":
        return this.bool;
      case "array":
        return this.arr;
        break;
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
