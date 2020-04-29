module.exports = {
  routeData(routerLayers) {
    const routeInfo = {};
    // iterate through the stack of routes in the server
    // access each layer that contains the detailed information for each existing endpoint
    for (routerObj of routerLayers) {
      const middleware = [];
      const params = routerObj.keys;
      const method = Object.keys(routerObj.route.methods)[0];
      for (stackObj of routerObj.route.stack) {
        middleware.push(String(stackObj.handle));
      }
      if (!routeInfo.hasOwnProperty(routerObj.route.path)) {
        routeInfo[routerObj.route.path] = {};
      }
      routeInfo[routerObj.route.path] = {
        method,
        params,
        middleware,
      };
    },
    // use this routeInfo object to populate the config file
    return routeInfo;
  },
};
