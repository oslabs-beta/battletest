const GenArray = require('./genRandom/GenArray.js');
const GenString = require('./genRandom/GenString.js');
const GenBoolean = require('./genRandom/GenBoolean.js');
const GenNumber = require('./genRandom/GenNumber.js');

const randGen = {
  string: GenString,
  boolean: GenBoolean,
  number: GenNumber,
  integer: GenNumber,
};

/**
 * @description Helper function used by the generateTestFile process to generate a requestBody object
 * @param {Object} propObj - Object holding object properties to add random generation to.
 * @param {Object} baseObj - Original test object that variations will be built off of, holds context of recursive calls
 * @param {Object} genObj - Object to be built by calling builtBody, holds the context for recursive calls
 * @param {string} propName - Name of new property to be added within the new context of baseObj and genObj
 */
const buildBody = (propObj, baseObj, genObj, propName) => {
  // if the type is primitive
  if (propObj.type !== 'object' && propObj.type !== 'array') {
    genObj[propName] = new randGen[propObj.type]();
    const { val } = genObj[propName].next();
    baseObj[propName] = val;
    return;
  }
  baseObj[propName] = {};
  genObj[propName] = {};
  if (propObj.type === 'array') {
    genObj[propName] = new GenArray(propObj.items);
    const { val } = genObj[propName].next();
    baseObj[propName] = val;
    return;
  }
  Object.keys(propObj.properties).forEach((key) => {
    buildBody(
      propObj.properties[key],
      baseObj[propName],
      genObj[propName],
      key,
    );
  });
};


module.exports = buildBody;
