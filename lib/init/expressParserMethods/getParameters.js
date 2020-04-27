const {
  buildBodyProp,
} = require('./buildBodyProp');

function getParameters(fullReq) {
  // const method = routeInfo[endpoint].method.toUpperCase();
  const reqBodyProp = {};
  const parameters = [];
  const paramSet = new Set(); // store values as ref[0] + ref[1];

  console.log(fullReq);
  for (const ref of fullReq) {
    if (ref[ref.length - 1] === 'body') {
      ref.unshift(ref.pop());
    }
    console.log(ref);
    if (ref.length > 1) {
      const refStr = ref.join(''); // ???
      if (paramSet.has(refStr)) continue;
      else paramSet.add(refStr);

      // ref = [body, user, username]
      switch (ref[0]) {
        case 'body':
          buildBodyProp(ref.slice(1), reqBodyProp);
          break;
        case 'headers':
          parameters.push({
            name: ref[1],
            in: 'header',
            schema: {
              type: null,
            },
          });
          break;
        case 'cookie':
          parameters.push({
            name: ref[1],
            in: 'cookie',
            schema: {
              type: null,
            },
          });
          break;
        case 'query':
          parameters.push({
            name: ref[1],
            in: 'query',
            schema: {
              type: null,
            },
          });
          break;
        case 'params':
          parameters.push({
            name: ref[1],
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


module.exports = {
  getParameters,
};
