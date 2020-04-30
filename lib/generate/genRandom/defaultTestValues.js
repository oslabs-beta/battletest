/**
 * @name defaultTestValues
 * @description Array of predefined values to be used with tests, along with a short description of each value
 */
module.exports = [
  { val: 0, descript: '0' },
  { val: String(Math.ceil(Math.random() * 10)), descript: 'String(random number)' },
  { val: undefined, descript: 'undefined' },
  { val: null, descript: 'null' },
  { val: false, descript: 'boolean_false' },
  { val: '', descript: 'string_empty' },
  { val: {}, descript: 'object_empty' },
  { val: [], descript: 'array_empty' },
  { val: Math.random() * 10, descript: 'Random positive floating point' },
  { val: -Math.random() * 10, descript: 'Random negative floating point' },
];
