/**
 * Battletest init should have a function that is going to invoke the expressParser and that function should have
 * the server file as an argument
 * Ask user for request data type in terminal
 */
// User to fill the path to their server file when they implement Battletest:
const Server = require('/Users/bintakinteh/Desktop/Practice-Tutorial/react-git-search/server/server.js');


const {
  routeData
} = require('./expressParserMethods/routeData');

const {
  getReqInfo
} = require('./expressParserMethods/getReqInfo');

function expressParser(server) {
  const routesArray = server._router.stack.filter(
    (routes) => routes.name === "bound dispatch"
  );
  const routeInfo = routeData(routesArray);

  return getReqInfo(routeInfo);
}



const routeI = expressParser(Server);
console.log(JSON.stringify(routeI, null, 2))








// module.exports = (server) => {
//   return expressParser(server);
// };