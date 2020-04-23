module.exports = {
  routeData(routerLayers) {
    const routeInfo = {};
    // iterate through the stack of routes in the server
    // access each layer that contains the detailed information for each existing endpoint
    for (routerObj of routerLayers) {

      // to the middlewareAndMethod object add a new key for "middleware" which has an empty array as its value
      const middleware = [];
      // to the middlewareAndMethod object add a new key for "parameters" which has the value of whatever exists under 
      // the key property in each layer
      // keys is an array of objects and each object has the name property which is the name of the path parameter
      // middlewareAndMethod = {
      //    middleware: [],
      //    params: []
      // }
      const params = routerObj.keys;

      // iterate through each layer's nested route.stack to access each middleware function and its details:
      // the stackObj contains the middleware function associated with each route and the request method
      for (stackObj of routerObj.route.stack) {
        // adding a new key to the middlewareAndMethod object for each method
        // set its value to the method that is set in the stackObj which has all information on each middleware function
        const method = stackObj.method;
        // into middlewareAndMethod object's middleware key: we push the stringified version of each middleware function's function definition
        middleware.push(String(stackObj.handle));
      }
      // into the routeInfo object we add a key of the path of each middleware function (ex='/endpoint')
      // set its value equal to the middlewareAndMethod object we created above^
      if (!routeInfo.hasOwnProperty(routerObj.route.path)) {
        routeInfo[routerObj.route.path] = {};
        // routeIfo {
        //   /products: {}
        // }
      }
      routeInfo[routerObj.route.path][stackObj.method] = {
        params,
        middleware
      };

    }
    // use this routeInfo object to populate the config file
    return routeInfo;
  }
};