const RandGen = require('randGen.js');
const buildBody = require('buildBody')
const generateSingleTest = 

let testCode = "";

const skimBody = (genObj, mapArr) => {
  if (genObj instanceof RandGen) {
    const scenerio = { ...baseScenario };
    const lastKey = mapArr.pop();
    const target = mapArr.reduce(
      (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
      scenerio.requestBody
    ); // scenario['family']['mom']
    for (let i = 0; i < 5; i++) {
      target[lastKey] = genObj.next();
      testCode += generateSingleTest(path, operation, scenario);
    }
    return;
  }
  for (let key in genObj) {
    skimBody(genObj[key], [...mapArr, key]);
  }
};
