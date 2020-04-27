/**
 * Battletest init should have a function that is going to invoke the expressParser and that function should have
 * the server file as an argument
 * Ask user for request data type in terminal
 */
// User to fill the path to their server file when they implement Battletest:
//const Server = require('/Users/bintakinteh/Desktop/Practice-Tutorial/react-git-search/server/server.js');


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
  // by invoking routeData we create the routeInfo object that will have all the information the config file needs to generate tests
  const routeInfo = routeData(routesArray);

  return JSON.stringify(getReqInfo(routeInfo), null, 2);
}



module.exports = (server) => {
  return expressParser(server);
}


// const routeI = expressParser(Server);
// console.log(routeI)
// console.log(JSON.stringify(routeI, null, 2))
// console.log(JSON.stringify(getReqInfo(routeI), null, 2))