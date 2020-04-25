const GenArray = require("./GenArray.js");
const GenString = require("./GenString.js");
const GenBoolean = require("./GenBoolean.js");
const GenNumber = require("./GenNumber.js");
const randGen = {
  'string': GenString,
  'boolean': GenBoolean,
  'number': GenNumber,
  'integer': GenNumber,
}

const buildBody = (propObj, baseObj, genObj, propName) => {
  //if the type is primitive
  if (propObj.type !== "object" && propObj.type !== "array") {
    genObj[propName] = new randGen[propObj.type];
    const { val } = genObj[propName].next();
    baseObj[propName] = val;
    return;
  }
  baseObj[propName] = {};
  genObj[propName] = {};
  if (propObj.type === "array") {
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
      key
    );
  });
};

// const propObj = {
//   type: "object",
//   properties: {
//     name: { type: "string" },
//     petType: {
//       type: "string",
//     },
//     family: {
//       type: "object",
//       properties: {
//         mom: { type: "string" },
//         dad: { type: "string" },
//       },
//     },
//     favoriteFoods: {
//       type: "array",
//       items: "string",
//     },
//   },
// };

// const baseObj = {};
// const genObj = {};
// buildBody(propObj, baseObj, genObj, "body");

module.exports = buildBody;
