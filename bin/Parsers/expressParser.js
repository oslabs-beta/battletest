/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/**
 * Battletest init should have a function that is going to invoke the expressParser and that function should have
 * the server file as an argument
 * Ask user for request data type in terminal
 */

// User to fill the path to their server file when they implement Battletest:
// const Server = require('/Users/bintakinteh/Desktop/Codesmith/Production-Project/battletest-sim/server.js');
const Server = require('/Users/duyguyigitsoy/Desktop/Codesmith/week4/unit-11-authentication/server/server.js')

function expressParser(server) {
  const routesArray = server._router.stack.filter(routes => routes.name === 'bound dispatch')
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
    routeInfo[routerObj.route.path] = {
      middlewareAndMethod
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
  const reqInfo = {}
  for(let endpoint in routeInfo) {
    let funcDef = endpoint[middlewareAndMethod].middleware
    const regex = /\{\s*.+\s*\}\s*\=\s*req\.[A-Za-z]+|req\.[A-Za-z.]+/g
    // by using regular expression check what comes after "req." to save it as req's location
    let fullReq = funcDef.match(regex)   //['req.body']
    
    for (let eachLoc of fullReq) {
      let finalLoc = ''
      //'req.body.params'

      for(let i = 0; i < eachLoc.length; i++) {
        let dotCount = 0
        if (eachLoc[i] === '.') {
          dotCount++
          if(dotCount < 2) {
            finalLoc = eachLoc.slice(i + 1, eachLoc.length);
            reqInfo[location] = finalLoc;
          } else {
            // if the req's location is more nested
            'req.body.params'
            finalLoc = eachLoc.slice(i + 1, eachLoc.length) 
          }
        }
      }
    }
    for (let eachParam of endpoint[middlewareAndMethod][params]) {
      reqInfo[params] = eachParam.name
    }
  }
  
}

console.log(expressParser(Server));
const routeI = expressParser(Server)
console.log(routeI['/signup'].middlewareAndMethod.middleware)
console.log(routeI['/signup'].middlewareAndMethod.params)


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






