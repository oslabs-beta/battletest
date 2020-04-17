/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/**
 * Battletest init should have a function that is going to invoke the expressParser and that function should have
 * the server file as an argument
 * Ask user for request data type in terminal
 */

// User to fill the path to their server file when they implement Battletest:
// const Server = require('/Users/bintakinteh/Desktop/Codesmith/Production-Project/battletest-sim/server.js');

function expressParser(server) {
  const routesArray = server._router.stack.filter(
    (routes) => routes.name === "bound dispatch"
  );
  // by invoking routeData we create the routeInfo object that will have all the information the config file needs to generate tests
  const routeInfo = routeData(routesArray);

  return routeInfo;
}

function routeData(routerLayers) {
  const routeInfo = {};
  // iterate through the stack of routes in the server
  // access each layer that contains the detailed information for each existing endpoint
  for (routerObj of routerLayers) {
    const middlewareAndMethod = {};
    // to the middlewareAndMethod object add a new key for "middleware" which has an empty array as its value
    middlewareAndMethod.middleware = [];
    // to the middlewareAndMethod object add a new key for "parameters" which has the value of whatever exists under the key property in each layer
    // keys is an array of objects and each object has the name property which is the name of the path parameter
    // middlewareAndMethod = {
    //    middleware: [],
    //    params: []
    // }
    middlewareAndMethod.params = routerObj.keys;

    // iterate through each layer's nested route.stack to access each middleware function and its details:
    // the stackObj contains the middleware function associated with each route and the request method
    for (stackObj of routerObj.route.stack) {
      // adding a new key to the middlewareAndMethod object for each method
      // set its value to the method that is set in the stackObj which has all information on each middleware function
      middlewareAndMethod.method = stackObj.method;
      // into middlewareAndMethod object's middleware key: we push the stringified version of each middleware function's function definition
      middlewareAndMethod.middleware.push(String(stackObj.handle));
    }
    // into the routeInfo object we add a key of the path of each middleware function (ex='/endpoint')
    // set its value equal to the middlewareAndMethod object we created above^
    if (!routeInfo.hasOwnProperty(routerObj.route.path)) {
      routeInfo[routerObj.route.path] = {};
    }
    routeInfo[routerObj.route.path][stackObj.method] = {
      middlewareAndMethod,
    };
  }
  // use this routeInfo object to populate the config file
  return routeInfo;
  // routeInfo = {
  //   '/stockdata': {
  //     middleware: [],
  //     params:[],
  //     method: 'get',
  //   }
  // }
}

// access each routeInfo =>
// whatever the req is attached to (body, params etc.),  "req.body" BODY
// and the parameters (if they exist)
function getReqInfo(routeInfo) {
  //console.log(routeInfo);
  const paths = {};
  for (let endpoint in routeInfo) {
    for (let method in routeInfo[endpoint]) {
      let funcDef = routeInfo[endpoint][method]["middlewareAndMethod"].middleware;
      const regex = /\{\s*.+\s*\}\s*\=\s*req\.[A-Za-z]+|req\.[A-Za-z.]+/g;
      // by using regular expression check what comes after "req." to save it as req's location
      let fullReq = funcDef
        .map((func) => func.match(regex))
        .filter((a) => a !== null); //**
      fullReq = fullReq.flat().map((a) => a.split(".").slice(1));

      //const method = routeInfo[endpoint]['middlewareAndMethod'].method.toUpperCase();
      const reqBodyProp = {};
      const parameters = [];
      const paramSet = new Set(); //store values as ref[0] + ref[1];

      for (let ref of fullReq) {
        const refStr = ref.join("");
        if (paramSet.has(refStr)) continue;
        else paramSet.add(refStr);

        switch (ref[0]) {
          case "body":
            reqBodyProp[ref[1]] = { type: null };
            break;
          case "headers":
            parameters.push({
              name: ref[1],
              in: "header",
              schema: { type: null },
            });
            break;
          case "cookie":
            parameters.push({
              name: ref[1],
              in: "cookie",
              schema: { type: null },
            });
            break;
          case "query":
            parameters.push({
              name: ref[1],
              in: "query",
              schema: { type: null },
            });
            break;
          case "params":
            parameters.push({
              name: ref[1],
              in: "path",
              schema: { type: null },
            });
            break;
          default:
            break;
        }
      }
      const operationObject = {};
      if (parameters.length > 0) operationObject['parameters'] = parameters;
      if (Object.keys(reqBodyProp).length > 0) operationObject['requestBody'] = {
        "application/json": {
          schema: {
            type: "object",
            properties: reqBodyProp,
          },
        },
      };

      if (!paths[endpoint]) paths[endpoint] = {};
      paths[endpoint][method] = operationObject;
    }
  }
  return paths;
}


module.exports = (server) => {
  const routeInfo = expressParser(server);
  return JSON.stringify(getReqInfo(routeInfo), null, 2)
}

// const routeI = expressParser(Server);
// console.log(JSON.stringify(routeI, null, 2))
//console.log(JSON.stringify(getReqInfo(routeI), null, 2))

// console.log(Server)

// Layer = {
//   handle: [Function: bound dispatch],
//   name: 'bound dispatch',
//   params: undefined,
//   path: undefined,
//   keys: [{
//      name: id,
//
// }],
//   regexp: /^\/users\/?$/i {
//     fast_star: false,
//     fast_slash: false
//   },
//   route: Route {
//     path: '/users',
//     stack: [
//       Layer {
//         handle: [middleware],
//         name: '<anonymous>',
//         params: undefined,
//         path: undefined,
//         keys: [],
//         regexp: /^\/?$/i {
//           fast_star: false,
//           fast_slash: false
//         },
//         method: 'post'
//       }
//     ],
//     methods: [Object]
//   }

// }
