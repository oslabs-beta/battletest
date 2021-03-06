/**
 * @name src/generate/generateTestSetup
 * @returns {null} Code for starting & closing test
 */

const fs = require("fs");
const path = require("path");

module.exports = (serverLocation, serverURL) => {
  const serverPath = path.resolve(process.cwd(), serverLocation);

  const code = `
before(async () => {
    const { server, app } = await require('${serverPath}');
    testServer = server;
    serverURL = '${serverURL}';
});
    
after((done) => {
    testServer.close();
    done();
});
    `;
  const fileLocation = path.resolve(
    process.cwd(),
    "__battletest__/testSetup.js"
  );

  fs.writeFileSync(fileLocation, code);
};
