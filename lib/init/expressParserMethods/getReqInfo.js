/**
 * @name getParameters
 * @description Extracts the request parameters, query, headers and body properties from the middleware functions
 *              and builds the battletest.config paths property
 * @param {object} routeInfo this is an object that an endpoint as a property, whose value is an object with the properties method, params and middleware
 * @returns{object} 
 */

const getParameters = require('./getParameters.js');

function getReqInfo(routeInfo) {

  const paths = {};

  for (const endpoint in routeInfo) {

    // the funcDef contains arrays of middleware functions(strings). getReqDetails looks 
    // properties deconstructed from req.body or otherwise. removeCurlyBraces looks at reach
    // array returned from matching getReqDetails and return words only.
    const funcDef = routeInfo[endpoint].middleware;
    const getReqDetails = /\{\s*.+\s*\}\s*\=\s*req\.[\w.]+|req\.[\w.]+/g;
    const removeCurlyBraces = /\w*\w\w*/g;

    const fullReq = [];
    funcDef.forEach((string) => {
      if (string !== undefined) {
        matchedString = string.match(getReqDetails);
      }

      if (matchedString !== null) {
        matchedString.forEach((newString) => fullReq.push(newString.match(removeCurlyBraces)));
      }
    });

    for (let i = 0; i < fullReq.length; i++) {
      for (let j = 0; j < fullReq[i].length; j++) {
        if (fullReq[i][j] === 'req') {
          fullReq[i].splice(j, 1);
        }
      }
    }


    const req = getParameters(fullReq);
    const {
      parameters,
      reqBodyProp,
    } = req;


    // build out the paths property of the battletest.config file. each route key of the
    // paths object has an object as a value whose keys are the methods applied to that route;
    const operationObject = {};
    if (parameters.length > 0) operationObject.parameters = parameters;
    if (Object.keys(reqBodyProp).length > 0) {
      operationObject.requestBody = {
        'application/json': {
          schema: {
            type: 'object',
            properties: reqBodyProp,
          },
        },
      };
    }

    if (!paths[endpoint]) paths[endpoint] = {};
    paths[endpoint][routeInfo[endpoint].method] = operationObject;
  }
  return paths;
}


module.exports = getReqInfo;