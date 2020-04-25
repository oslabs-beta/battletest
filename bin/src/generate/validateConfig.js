/** @name validateConfig
 *  @description validates a config file's object structure
 *  uses the validate.js library to validate objects
 *  @param config BattleTest config object
 *  @returns {array} returns a list of errors encountered when validating the config, otherwise returns undefined
 */

function validateConfig(config) {
  // base object to accumulate the errors
  const errors = [];
  // describe constraints for base level
  if (!config.serverLocation) errors.push(`Invalid server location: ${config.serverLocation}`);
  if (!config.serverURL) errors.push(`Invalid server URL: ${config.serverURL}`);
  if (typeof config.paths !== 'object') {
    errors.push('Invalid paths object');
    return;
  }

  // Next test each path to see if it in the proper format
  Object.keys(config.paths).forEach((path) => {
    // regex validation for paths e.g. /path/to/endpoint
    const routeRgx = /^(\/:?\w+)*\/?$/;
    if (!routeRgx.test(path)) errors.push(`Invalid route: ${path}`);
    // iterate through the path methods by invoking validateRoute
    validateRoute(config.paths[path], path, errors);
    // if there are errors, return the array, otherwise return undefined
  });
  return errors;
}

// helper functions
// takes in a route sub object
// e.g: {GET : {}, POST: {}}

/**
 * @param {object} route - sub object of config with methods as properties e.g.: {GET : {}, POST: {}}
 * @param {string} context - Route that the context is in
 * @param {array}  errors - Array of errors present in the config file
 */
const validateRoute = (route, context, errors) => {
  if (typeof route !== 'object') {
    errors.push(`Invalid route object format at ${context}`);
    return;
  }
  Object.keys(route).forEach((method) => {
    // validate that the method is a valid HTTP request method
    const methodRgx = /^(GET|POST|PATCH|PUT|HEAD|DELETE|OPTIONS)$/;
    if (!methodRgx.test(method)) errors.push(`Invalid HTTP request '${method}' at route: ${context}`);
    // validate the parameters and requestBody objects
    if (route[method].parameters && !Array.isArray(route[method].parameters)) {
      errors.push(`Invalid parameters array format at: ${method} ${context}`);
    } else if (route[method].parameters) {
      route[method].parameters.forEach((param) => validateParam(param, `${method}  ${context}  parameters`, errors));
    }
    // validate the request body if there is one
    if (route[method].requestBody && typeof route[method].requestBody !== 'object') {
      errors.push(`Invalid requestBody format at: ${method} ${context}`);
    } else if (route[method].requestBody) {
      validateBody(route[method].requestBody, `${method}  ${context}  requestBody`, errors);
    }
  });
};

/**
 * @param {object} param - object element of the parameters array e.g.: {name, in, schema}
 * @param {string} context - Route that the context is in
 * @param {array}  errors - Array of errors present in the config file
 */
const validateParam = (param, context, errors) => {
  // checking if param is an object
  if (typeof param !== 'object') {
    errors.push(`Parameter is not in object form at: ${context}`);
    return;
  }
  if (!param.name) {
    errors.push(`Invalid parameter name at: ${context}`);
  }
  // regex testing for in body
  const inRgx = /^path|query|header|cookie$/;
  if (!inRgx.test(param.in)) {
    errors.push(`Invalid parameter type '${param.in}' at: ${context} name:${param.name}`);
  }
  if (typeof param.schema !== 'object') {
    errors.push(`Invalid schema format, must be an object with type property at: ${context} name:${param.name}`);
    return;
  }
  const typeRgx = /^integer|number|string|boolean$/;
  if (!typeRgx.test(param.schema.type)) {
    errors.push(`Invalid parameter type '${param.schema.type}' at: ${context} name:${param.name}`);
  }
};

/**
 * @param {object} body - requestBody object of the method object e.g.: {Content-Type:{schema}}
 * @param {string} context - Route that the context is in
 * @param {array}  errors - Array of errors present in the config file
 */
const validateBody = (body, context, errors) => {
  // Primarily focus on application/json
  // call a recursive function to handle nested objects
  if (typeof body !== 'object') {
    errors.push(`Invalid requestBody object format at ${context}`);
    return;
  }
  Object.keys(body).forEach((contentType) => {
    // check if it is a valid HTML Content-type for each of the keys
    // simple regex check, check if is in format */*
    // if content type is of xml or json, then we need schema
    const contentRgx = /(application\/(json|xml))|(text\/plain)/;
    if(!contentRgx.test(contentType)){
      errors.push(`Invalid contentType ${contentType} at: ${context}`);
    }
    // schema can possibly be optional, so only check it if it exists
    if (body[contentType].schema) validateSchema(body[contentType].schema, `${context}  ${contentType}`, errors);
  });
};

/** @description recursive function to check if schema is in proper format
 * @param {object} schema - sub object of requestBody to validate
 * @param {string} context - Route that the context is in
 * @param {array}  errors - Array of errors present in the config file
 */
const validateSchema = (schema, context, errors) => {
  const typeRgx = /^integer|number|string|boolean|object|array$/;
  if (!typeRgx.test(schema.type)) {
    errors.push(`Invalid type '${schema.type}' at: ${context}`);
  }
  if (schema.type === 'array') {
    if (!schema.items || typeof schema.items !== 'object') {
      errors.push(`Invalid array items property at: ${context}`);
    } else {
      validateSchema(schema.items, context, errors);
    }
  } else if (schema.type === 'object') {
    if (schema.properties && typeof schema.properties !== 'object') {
      errors.push(`Invalid schema object properties format at: ${context}`);
      return;
    }
    if (!schema.properties) return;
    // iterate through each of the properties, recursively calling
    // validateSchema for each sub object
    Object.keys(schema.properties).forEach((prop) => {
      validateSchema(schema.properties[prop], `${context}  ${prop}`, errors);
    });
  }
};


module.exports = validateConfig;
