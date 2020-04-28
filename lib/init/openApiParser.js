const SwaggerParser = require('@apidevtools/swagger-parser');
const _ = require('lodash');

/** @description Parses openAPI JSON or YML file and converts into battletest.config.js
 * @async
 * @param {string} api -file path or URL to the OpenAPI, accepts both JSON and YML
 * @returns {Promise} a newly created promise object, resolves into the newly created battletest.config
 */
async function openAPIParser(api) {
  // dereference and parse OpenAPI's schema
  const deref = await SwaggerParser.dereference(api);
  const batConfig = {
    serverLocation: null,
    serverURL: null,
    authorization_cookie: null,
    expectedStatusCode: 400,
    paths: {},
  };
  if (!deref.paths) return batConfig;
  Object.keys(deref.paths).forEach((route) => {
    batConfig.paths[route] = extractRoute(deref.paths[route]);
  });
  return batConfig;
}

/** @description extracts method objects from openAPI route objects
 * @param {object} routeObj - object contains method objects e.g. {get: {}, post: {}}
 * @returns {object} a new routeObj with relevant data extracted from the original
 */
const extractRoute = (routeObj) => {
  const newObj = {};
  Object.keys(routeObj).forEach((method) => {
    newObj[method] = {};
    // if the original object has a parameters property, clone it into the config object
    if (routeObj[method].parameters) {
      newObj[method].parameters = _.cloneDeep(routeObj[method].parameters);
    }
    // same for the requestBody, but invoke extractBody to extract the right content types
    if (routeObj[method].requestBody) {
      newObj[method].requestBody = extractBody(routeObj[method].requestBody.content);
    }
  });
  return newObj;
};

/** @description extracts the proper contentTypes from the entire openAPI object
 * @param {object} contentObj
 * @returns new requestBody content object
 */
const extractBody = (contentObj) => {
  const newBody = {};
  // only accepts application/json(xml) or text/plain
  const contentRgx = /(application\/(json|xml))|(text\/plain)/;
  Object.keys(contentObj).forEach((contentType) => {
    if (contentRgx.test(contentType)) {
      newBody[contentType] = _.cloneDeep(contentObj[contentType]);
    }
  });
  return newBody;
};


module.exports = openAPIParser;
