/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/**
 * Battletest init should have a function that is going to invoke the expressParser and that function should have
 * the server file as an argument
 * Ask user for request data type in terminal
 */

// User to fill the path to their server file when they implement Battletest:
const Server = require('/Users/bintakinteh/Desktop/Codesmith/Production-Project/battletest-sim/server.js');

function expressParser(server) {
  const routesArray = server._events.request._router.stack.filter(routes => routes.name === 'bound dispatch')


  return routesArray;
}

console.log(expressParser(Server));

// console.log(Server)




// Layer = {
//   handle: [Function: bound dispatch],
//   name: 'bound dispatch',
//   params: undefined,
//   path: undefined,
//   keys: [],
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