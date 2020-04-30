/**
 * @name routeData
 * @description
 * @param {array} routerLayers
 * @returns {object} returns an object which as an route as a key and the value of each key is the method, request
 * information and middleware associated with that route
 */

function routeData(routerLayers) {
  const routeInfo = {};
  for (let i = 0; i < routerLayers.length; i++) {
    const middleware = [];

    // keys is an array of objects, where each object contains the request parameters
    const params = routerLayers[i].keys;
    const method = Object.keys(routerLayers[i].route.methods)[0];
    for (stackObj of routerLayers[i].route.stack) {
      // all middleware function are stored in the handle array in the each router.stack object
      middleware.push(String(stackObj.handle));
    }
    if (!routeInfo.hasOwnProperty(routerLayers[i].route.path)) {
      routeInfo[routerLayers[i].route.path] = {};
    }
    routeInfo[routerLayers[i].route.path] = {
      method,
      params,
      middleware,
    };
  }
  // use this routeInfo object to populate the config file
  return routeInfo;
}

module.exports = routeData;
