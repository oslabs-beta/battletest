const expect = require('chai').expect;
const Server = require('/Users/bintakinteh/Desktop/Practice-Tutorial/react-git-search/server/server.js');
const RouteData = require('../bin/src/init/expressParserMethods/routeData.js');



describe('RouteData', () => {

  const routesArray = Server._router.stack.filter(
    (routes) => routes.name === 'bound dispatch'
  );


  it('returned value of routeData should be an object', () => {
    const result = RouteData(routesArray);
    expect(result).to.be.an('object');
  });


});