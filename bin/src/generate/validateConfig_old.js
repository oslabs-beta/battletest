const fs = require('fs');

/**
 * @name validateConfig
 * @param {Object} config Config file object for generating battletest
 * @returns {void} throws an error when an invalid property has been detected
 * @deprecated
 */

const validateConfig = (config) => {
  const {
    serverLocation, // file that the server resides in
    serverURL, // Port number
    // model_location, // location of database model file
    authorization_cookie, // cookie to be sent with requests
    routesForTesting, // array of objects
  } = config;

  if (!fs.existsSync(serverLocation)) {
    throw new Error(`Invalid server location: ${serverLocation}`);
  }
  if (typeof serverURL !== 'number') {
    throw new Error(`Invalid server location: ${serverURL}`);
  }
  if (authorization_cookie && typeof authorization_cookie !== 'string') {
    throw new Error(`Invalid Authorization Cookie: ${authorization_cookie}`);
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
