/**
 * @name getParameters
 * @description Builds the paths property in the battletest.config file. The introspected express server file
 * details (i.e headers, cookies, params, body, etc) are passed in as an array of arrays, with each sub-array
 * containing request details specific to each route.active
 * @param {array} fullReq
 * @returns {object}
 */
const buildBodyProp = require('./buildBodyProp');

function getParameters(fullReq) {
  const reqBodyProp = {};
  const parameters = [];
  const paramSet = new Set();

  // properties that are deconstructed from req.body appear at the beginning of the array
  // and body is at the end. Therefore the body is removed from the end of the array and
  // added to the beginning
  for (let i = 0; i < fullReq.length; i++) {
    if (fullReq[i][fullReq[i].length - 1] === 'body') {
      fullReq[i].unshift(fullReq[i].pop());
    }

    // checking if the subarray is greater than on takes care of cases where req.body is
    // written in the server file but no properties are being accessed
    if (fullReq[i].length > 1) {
      // using Set ti track the contents of each subarray to avoid duplicate
      const refStr = fullReq[i].join('');
      if (paramSet.has(refStr)) continue;
      else paramSet.add(refStr);

      switch (fullReq[i][0]) {
        case 'body':
          // body is sliced of the subarray and passed to buildBodyProb which
          // returns and object with the request body details
          buildBodyProp(fullReq[i].slice(1), reqBodyProp);
          break;
        case 'headers':
          parameters.push({
            name: fullReq[i][1],
            in: 'header',
            schema: {
              type: null,
            },
          });
          break;
        case 'cookie':
          parameters.push({
            name: fullReq[i][1],
            in: 'cookie',
            schema: {
              type: null,
            },
          });
          break;
        case 'query':
          parameters.push({
            name: fullReq[i][1],
            in: 'query',
            schema: {
              type: null,
            },
          });
          break;
        case 'params':
          parameters.push({
            name: fullReq[i][1],
            in: 'path',
            schema: {
              type: null,
            },
          });
          break;
        default:
          break;
      }
    }
  }
  return {
    parameters,
    reqBodyProp,
  };
}


module.exports = getParameters;
