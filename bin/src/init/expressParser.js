/**
 * Battletest init should have a function that is going to invoke the expressParser and that function should have
 * the server file as an argument
 * Ask user for request data type in terminal
 */


const {
  routeData
} = require('./expressParserMethods/routeData');

const {
  getReqInfo
} = require('./expressParserMethods/getReqInfo');
// User to fill the path to their server file when they implement Battletest:
const Server = require('/Users/bintakinteh/Desktop/Practice-Tutorial/react-git-search/server/server.js');

function expressParser(server) {
  const routesArray = server._router.stack.filter(
    (routes) => routes.name === "bound dispatch"
  );
  // by invoking routeData we create the routeInfo object that will have all the information the config file needs to generate tests
  const routeInfo = routeData(routesArray);

  return routeInfo;
}


// access each routeInfo =>
// whatever the req is attached to (body, params etc.),  "req.body" BODY
// and the parameters (if they exist)
// function getReqInfo(routeInfo) {
//   //console.log(routeInfo);
//   const paths = {};
//   // look at each endpoint in routeInfo
//   for (let endpoint in routeInfo) {
//     for (let method in routeInfo[endpoint]) {

//       let funcDef = routeInfo[endpoint][method]["middlewareAndMethod"].middleware;
//       const regex = /\{\s*.+\s*\}\s*\=\s*req\.[A-Za-z]+|req\.[A-Za-z.]+/g;
//       // by using regular expression check what comes after "req." to save it as req's location

//       /*  NOT COMPLETED
//       let fullReq = [];

//       for( let i = 0; i < funcDef.length; i++) {
//         // match each element and check that it is not null, and then push the value in fullReq array
//         let matchedString = funcDef[i].match(regex); // if no match is round, null is return
//       }
//       */

//       let fullReq = funcDef
//         .map((func) => func.match(regex))
//         .filter((a) => a !== null);
//       fullReq = fullReq.flat().map((a) => a.split(".").slice(1));

//       //break ??

//       //const method = routeInfo[endpoint]['middlewareAndMethod'].method.toUpperCase();
//       const reqBodyProp = {};
//       const parameters = [];
//       const paramSet = new Set(); //store values as ref[0] + ref[1];

//       for (let ref of fullReq) {
//         const refStr = ref.join(""); //???
//         if (paramSet.has(refStr)) continue;
//         else paramSet.add(refStr);
//         // [
//         //     ["params", "id"],  -> "paramsid"
//         //     ["params", "id"],
//         //     ["body", "user", "id"],   req.body.user.id
//         //     ["body"]
//         //   ]



//         switch (ref[0]) {
//           case "body":
//             reqBodyProp[ref[1]] = {
//               type: null
//             };
//             break;
//           case "headers":
//             parameters.push({
//               name: ref[1],
//               in: "header",
//               schema: {
//                 type: null
//               },
//             });
//             break;
//           case "cookie":
//             parameters.push({
//               name: ref[1],
//               in: "cookie",
//               schema: {
//                 type: null
//               },
//             });
//             break;
//           case "query":
//             parameters.push({
//               name: ref[1],
//               in: "query",
//               schema: {
//                 type: null
//               },
//             });
//             break;
//           case "params":
//             parameters.push({
//               name: ref[1],
//               in: "path",
//               schema: {
//                 type: null
//               },
//             });
//             break;
//           default:
//             break;
//         }
//       }
//       const operationObject = {};
//       if (parameters.length > 0) operationObject['parameters'] = parameters;
//       if (Object.keys(reqBodyProp).length > 0) operationObject['requestBody'] = {
//         "application/json": {
//           schema: {
//             type: "object",
//             properties: reqBodyProp,
//           },
//         },
//       };

//       if (!paths[endpoint]) paths[endpoint] = {};
//       paths[endpoint][method] = operationObject;
//     }
//   }
//   return paths;
// }


module.exports = (server) => {
  const routeInfo = expressParser(server);
  return JSON.stringify(getReqInfo(routeInfo), null, 2)
}


const routeI = expressParser(Server);
// console.log(routeI)
console.log(JSON.stringify(routeI, null, 2))
console.log(JSON.stringify(getReqInfo(routeI), null, 2))


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