const generateSingleTest = require("./generateSingleTest.js");
const generateDescribe = require("./generateDescribe.js");
const saveTestFile = require("./saveTestFile.js");
const buildTestTitle = require("./buildTestTitle.js");
const buildBody = require("./buildBody.js");
const RandGen = require("./randGen.js");

function generateTestFile(path, operation, operationObject) {
  const baseScenario = {};
  const generators = {};
  let testCode = "";

  // fill out base scenario & generators for PARAMETERS
  if (operationObject.hasOwnProperty('parameters')) {
    operationObject.parameters.forEach((param) => {
      if (!baseScenario[param.in]) {
        baseScenario[param.in] = {};
        generators[param.in] = {};
      }
      generators[param.in][param.name] = new RandGen(param.schema.type);
      const { val, descript } = generators[param.in][param.name].next();
      baseScenario[param.in][param.name] = val; // initially, normal input
    });
  }

  // fill out base scenario & generators for REQUESTBODY
  if (operationObject.hasOwnProperty('requestBody')) {
    baseScenario["requestBody"] = {};
    generators["requestBody"] = {};

    Object.keys(operationObject.requestBody).forEach((contentType) => {
      baseScenario["requestBody"][contentType] = {};
      generators["requestBody"][contentType] = {};
      if (contentType === "text/plain") {
        // TO DO: same as 7 - 13; make into a module
      } else if (
        contentType === "application/json" ||
        contentType === "application/xml"
      ) {
        buildBody(
          (propObj = operationObject.requestBody[contentType].schema),
          (baseObj = baseScenario["requestBody"][contentType]),
          (genObj = generators["requestBody"][contentType]),
          (propName = "body")
        ); 
      }
    }); 
  }
  //BASE SCENARIO
  testCode += generateSingleTest(path, operation, baseScenario, 'Base Scenario');

  //GENERATING RANDOM PARAMETER FIELDS
  if (operationObject.hasOwnProperty('parameters')) {
    for (let fieldKey in generators) {
      //skip request body for now
      if (fieldKey === "requestBody") continue;
      for (let nameKey in generators[fieldKey]) {
        const scenario = JSON.parse(JSON.stringify(baseScenario));
        for (let i = 0; i < 5; i++) {
          const { val, descript } = generators[fieldKey][nameKey].next();
          scenario[fieldKey][nameKey] = val;
          testCode += generateSingleTest(path, operation, scenario, buildTestTitle.parameters(fieldKey, nameKey, descript));
        }
      }
    }
  }
  console.log('requestBody:', operationObject.hasOwnProperty('requestBody'))
  if (operationObject.hasOwnProperty('requestBody')) {
    const contentType = Object.keys(generators.requestBody)[0];
    skimBody(generators.requestBody[contentType], (mapArr = [contentType]));
  } 
  
  const testFile = generateDescribe(path, operation, testCode);
  saveTestFile(path, operation, testFile);

  function skimBody(genObj, mapArr) {
    if (genObj instanceof RandGen) {
      const scenario = JSON.parse(JSON.stringify(baseScenario));
      const lastKey = mapArr.pop();
      const target =
        mapArr.length === 0
          ? scenario.requestBody
          : mapArr.reduce(
              (obj, key) =>
                obj && obj[key] !== "undefined" ? obj[key] : undefined,
              scenario.requestBody
            ); // scenario['family']['mom']
      for (let i = 0; i < 5; i++) {
        const { val, descript } = genObj.next();
        target[lastKey] = val;
        testCode += generateSingleTest(path, operation, scenario, buildTestTitle.requestBody([...mapArr, lastKey], descript)); 
      }
      return;
    }
    for (let key in genObj) {
      skimBody(genObj[key], [...mapArr, key]);
    }
  };
}

module.exports = generateTestFile;
