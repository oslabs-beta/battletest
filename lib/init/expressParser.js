/**
 * @name expressParser
 * @description introspects imported server file to extract route and request details to build battletest.config
 * @param {app}
 * @returns {object}
 */

const routeData = require('./expressParserMethods/routeData');
const getReqInfo = require('./expressParserMethods/getReqInfo');

function expressParser(app) {
  // app._router.stack is an array of object, objects the key/value pair of name: 'bound dispatch'
  // each have details specific to each route in the server file
  const routesArray = app._router.stack.filter(
    (routes) => routes.name === 'bound dispatch',
  );

  // routeData return an object that has each route as a key which has an object as
  // a value. The properties of those objects are method, parameter and middleware specific to that route
  const routeInfo = routeData(routesArray);

  // getReqInfo builds the request information required in teh battletest.config file
  return getReqInfo(routeInfo);
}


module.exports = (app) => expressParser(app);
