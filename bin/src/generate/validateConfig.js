const fs = require('fs');

/**
 * @name validateConfig
 * @param {Object} config Config file object for generating battletest
 * @returns {void} throws an error when an invalid property has been detected
 */

const validateConfig = (config) => {
  const {
    server_location, // file that the server resides in
    serverURL, // Port number
    model_location, // location of database model file
    routesForTesting, // array of objects
  } = config;

  if (!fs.existsSync(server_location)) {
    throw new Error(`Invalid server location: ${server_location}`);
  }
  if (typeof serverURL !== 'number') {
    throw new Error(`Invalid server location: ${serverURL}`);
  }
  if (!fs.existsSync(model_location)) {
    throw new Error(`Invalid DB Model location: ${model_location}`);
  }
  if (!Array.isArray(routesForTesting)) {
    throw new Error('Invalid routesForTesting!');
  }
  routesForTesting.forEach(validateRoute);
  return true;
};

const validateRoute = (routeObj) => {
  const {
    route,
    method,
    vectors,
  } = routeObj;
  // check if valid route
  const routeRegex = /^(\/\w*)+$/;
  if (typeof route !== 'string' || !routeRegex.test(route)) {
    throw new Error(`Invalidly formatted route: ${route}`);
  }

  const methodRegex = /^GET|POST|PUT|PATCH|DELETE$/;
  if (typeof method !== 'string' || !methodRegex.test(method.toUpperCase)) {
    throw new Error(`Invalid request method: ${method}`);
  }

  vectors.forEach(validateVector);
};

const validateVector = (vector) => {
  const {
    section,
    rule,
    key,
    payload,
  } = vector;
};

module.exports = validateConfig;
