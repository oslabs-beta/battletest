const expect = require('chai').expect;
const app = require('../example/serverFiles/sampleServerOne/server.js');
const RouteData = require('../lib/init/expressParserMethods/routeData.js');



describe('RouteData', () => {

  const routesArray = app._router.stack.filter(
    (routes) => routes.name === 'bound dispatch'
  );


  it('returned value of routeData should be an object', () => {
    const result = RouteData(routesArray);
    expect(result).to.be.an('object');
  });


});