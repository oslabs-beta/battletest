/**
 * Battletest init should have a function that is going to invoke the expressParser and that function should have
 * the server file as an argument
 * Ask user for request data type in terminal
 */
// User to fill the path to their server file when they implement Battletest:
<<<<<<< HEAD
//const Server = require('/Users/bintakinteh/Desktop/Practice-Tutorial/react-git-search/server/server.js');
=======
// const Server = require('/Users/bintakinteh/Desktop/Practice-Tutorial/react-git-search/server/server.js');
>>>>>>> 2c4101b0d2b865facc8ee43ff10acd1437cf45ef


const {
  routeData,
} = require('./expressParserMethods/routeData');

const {
  getReqInfo,
} = require('./expressParserMethods/getReqInfo');

function expressParser(server) {
  const routesArray = server._router.stack.filter(
    (routes) => routes.name === 'bound dispatch',
  );
  const routeInfo = routeData(routesArray);

  return getReqInfo(routeInfo);
}




<<<<<<< HEAD
// const routeI = expressParser(Server);
// console.log(routeI)
// console.log(JSON.stringify(routeI, null, 2))
// console.log(JSON.stringify(getReqInfo(routeI), null, 2))
=======
const routeI = expressParser(Server);
console.log(JSON.stringify(routeI, null, 2))








// module.exports = (server) => {
//   return expressParser(server);
// };

>>>>>>> 2c4101b0d2b865facc8ee43ff10acd1437cf45ef
