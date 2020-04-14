/**
 * @name src/generate/generateTestSetup
 * @returns {null} Code for starting & closing test
 */

const fs = require('fs');
const path = require('path');

module.exports = (serverLocation) => {
    const code = `
before(async () => {
    testServer = await require('${serverLocation}');
    });
    
after((done) => {
    testServer.close();
    done();
    });
    `;
    const fileLocation = path.resolve(process.cwd(), '__battletest__/testSetup.js');

    fs.writeFileSync(fileLocation, code);
}