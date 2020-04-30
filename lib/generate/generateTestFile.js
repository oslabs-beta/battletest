const generateSingleTest = require('./genCode/generateSingleTest.js');
const generateDescribe = require('./genCode/generateDescribe.js');
const saveTestFile = require('./saveTestFile.js');
const buildTestTitle = require('./genCode/buildTestTitle.js');
const buildBody = require('./buildBody.js');
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
 * @description This outputs a test file for a specified operation on a specified path (ex. GET operation on "/pet").  Each test file contains supertests for many test cases. Each test
 * @param {String} path - URL for the test server
 * @param {String} operation - Method for the endpoint. Ex. "get", "put", "post"
 * @param {Object} operationObject - Read from battletest.config.js.  Describes the expected data type
 */
function generateTestFile(path, operation, operationObject, expectedStatusCode) {
  const baseScenario = {};
  const generators = {};
  let testCode = '';

  // fill out base scenario & generators for PARAMETERS
  if (operationObject.hasOwnProperty('parameters')) {
    operationObject.parameters.forEach((param) => {
      if (!baseScenario[param.in]) {
        baseScenario[param.in] = {};
        generators[param.in] = {};
      }
      generators[param.in][param.name] = new randGen[param.schema.type]();
      const { val, descript } = generators[param.in][param.name].next();
      baseScenario[param.in][param.name] = val; // initially, normal input
    });
  }
  // fill out base scenario & generators for REQUESTBODY
  if (operationObject.hasOwnProperty('requestBody')) {
    baseScenario.requestBody = {};
    generators.requestBody = {};
    Object.keys(operationObject.requestBody).forEach((contentType) => {
      baseScenario.requestBody[contentType] = {};
      generators.requestBody[contentType] = {};
      if (contentType === 'text/plain') {
        if (!operationObject.requestBody[contentType].schema) {
          // TODO: handle text/plain
        }
      } else if (
        contentType === 'application/json'
        || contentType === 'application/xml'
      ) {
        buildBody(
          (propObj = operationObject.requestBody[contentType].schema),
          (baseObj = baseScenario.requestBody[contentType]),
          (genObj = generators.requestBody[contentType]),
          (propName = 'body'),
        );
      }
    });
  }

  // BASE SCENARIO
  testCode += generateSingleTest(path, operation, baseScenario, 'Base Scenario', expectedStatusCode);
  // GENERATING RANDOM PARAMETER FIELDS
  if (operationObject.hasOwnProperty('parameters')) {
    for (const fieldKey in generators) {
      // skip request body for now
      if (fieldKey === 'requestBody') continue;
      for (const nameKey in generators[fieldKey]) {
        const scenario = JSON.parse(JSON.stringify(baseScenario));
        const count = generators[fieldKey][nameKey].vals.length + 4;
        for (let i = 0; i < count; i++) {
          const { val, descript } = generators[fieldKey][nameKey].next();
          scenario[fieldKey][nameKey] = val;
          testCode += generateSingleTest(path, operation, scenario, buildTestTitle.parameters(fieldKey, nameKey, descript), expectedStatusCode);
        }
      }
    }
  }

  function skimBody(genObj, mapArr) {
    if (genObj instanceof GenArray || genObj instanceof GenBoolean || genObj instanceof GenString || genObj instanceof GenNumber) {
      const scenario = JSON.parse(JSON.stringify(baseScenario));
      const lastKey = mapArr.pop();
      const target = mapArr.length === 0
        ? scenario.requestBody
        : mapArr.reduce(
          (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
          scenario.requestBody,
        );
      const count = genObj.vals.length + 4;
      for (let i = 0; i < count; i++) {
        const { val, descript } = genObj.next();
        target[lastKey] = val;
        testCode += generateSingleTest(path, operation, scenario, buildTestTitle.requestBody([...mapArr, lastKey], descript), expectedStatusCode);
      }
      return;
    }

    for (const key in genObj) {
      skimBody(genObj[key], [...mapArr, key]);
    }
  }

  if (operationObject.hasOwnProperty('requestBody')) {
    const contentType = Object.keys(generators.requestBody)[0];
    skimBody(generators.requestBody[contentType], (mapArr = [contentType]));
  }

  const testFile = generateDescribe(path, operation, testCode);
  saveTestFile(path, operation, testFile);
}

module.exports = generateTestFile;
