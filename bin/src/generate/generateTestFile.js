const generateSingleTest = require("./generateSingleTest.js");
const generateDescribe = require("./generateDescribe.js");
const saveTestFile = require("./saveTestFile.js");
const buildBody = require("./buildBody.js");
const RandGen = require("./randGen.js");

function generateTestFile(serverURL, path, operation, operationObject) {
  const skimBody = (genObj, mapArr) => {
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
        console.log(scenario.requestBody["application/json"].body);
        // testCode += generateSingleTest(path, operation, scenario);
      }
      return;
    }
    for (let key in genObj) {
      skimBody(genObj[key], [...mapArr, key]);
    }
  };
  const baseScenario = {};
  const generators = {};
  let testCode = "";

  operationObject.parameters.forEach((param) => {
    if (!baseScenario[param.in]) {
      baseScenario[param.in] = {};
      generators[param.in] = {};
    }
    // generators.path.petID = new RandGen("integer")
    generators[param.in][param.name] = new RandGen(param.schema.type);
    const { val, descript } = generators[param.in][param.name].next();
    baseScenario[param.in][param.name] = val; // initially, normal input
  });

  // loop through request body
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
      ); // has filled out baseScenarios and generators
    }
  });

  // first, invoke the right generator
  // then, slot into appropriate key in baseScenario

  //GENERATING RANDOM PARAMETER FIELDS
  for (let fieldKey in generators) {
    //skip request body for now
    if (fieldKey === "requestBody") continue;
    for (let nameKey in generators[fieldKey]) {
      const scenario = JSON.parse(JSON.stringify(baseScenario));
      for (let i = 0; i < 5; i++) {
        const { val, descript } = generators[fieldKey][nameKey].next();
        scenario[fieldKey][nameKey] = val;
        //testCode += generateSingleTest(path, operation, scenario);
        //console.log(scenario);
      }
    }
  }
  //requestBody random iteration
  //for each content type
  //iterate through each nested field until hitting a primitive value
  //generate test cases (5) for each primitive field, copy them into the basescenario, and pass
  //it into generateSingleTest

  //probably only one content type for the requestBody needed
  //intial mapArr should be the contentType
  const contentType = "application/json";
  skimBody(generators.requestBody[contentType], (mapArr = [contentType]));

  //   const testFile = generateDescribe(path, operation, testCode);
  //   saveTestFile(path, operation, testFile);
}

module.exports = generateTestFile;
