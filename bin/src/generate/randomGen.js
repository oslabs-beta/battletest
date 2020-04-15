
/**
 * @description Generate random test cases for given type values
 * @param paramObj Parameter object of Battletest config file
 * @returns {*} Random value/object holding the result of randomly generated values
 * @deprecated
 */

// IDEA: Make this into a class that could keep track of past iterated values and have
// methods that invoke the next random value upon request
function randomGen(schemaObj) {
  let ref;
  try {
    ref = schemaObj.type;
  } catch (err) {
    throw new Error('Error in accessing the schema type of the parameter object.');
  }
  if (typeof ref === 'object') return;// if it's an object, shelve it for later

  switch (ref) {
    case 'string':
      return randStr();
    case 'number':
    case 'integer':
      return randNum();
    case 'boolean':
      return Math.random() > 0.5;// true or false at random
    case 'array':// for the case of array, determine the type of the elements of the array
      return [...Array(5)].map((i) => randomGen(schemaObj.items));
    case 'object':
    default:
      throw new Error('Unsupported data type!');
  }
}

/**
 * @description returns a set of random strings to be used in the Battletest runner
 * @returns {Array.<string>}
 */
function randStr() {
//   const retStrs = ['', // empty str
//     [...Array(10)].map((i) => (~~(Math.random() * 36)).toString(36)).join(''), // random str of length 10
//     '*'.repeat(Number.MAX_SAFE_INTEGER), // string of length 2^53 - 1
//   ];
//   return retStrs;
  return [...Array(12)].map((i) => (~~(Math.random() * 36)).toString(36)).join('');// random string of length 12
}

/**
 * @description returns a set of random Numbers, both floating-point and single digits to be used in the Battletest runner
 * @returns {Array.<Number>}
 */
function randNum() {
//   const retNums = [Number.MIN_SAFE_INTEGER, // -(2^53 - 1)
//     Number.MAX_SAFE_INTEGER, // 2^53 - 1
//     Number.MAX_VALUE, // 1.7976931348623157e+308
//     Math.random() * 256, // random number between 0 and 256
//   ];
//   return retNums;
  return Math.random() * 256;
}

module.exports = randomGen;
