/**
 * @name bin/cmds/init
 * @description 
 * This initializes "battletest.config.js" and creates __battletest__ (for storing tests) and __battletest__/__results__ (for storing results once the "battletest start" command runs the tests contained in __battletest__).  
 * 
 * This creates "battletest.config.js" either (A) as an empty config file with skeleton structure, (B) via automatically reading & converting the express-js server file into a battletest.config.js using expressConverter, or (C) via automaticaly reading & converting an OpenAPI Document. 
 * 
 * @param {string} [args] - a single file name, .yml or .json if an OpenAPI document, or .js if an Express document.
 */

const fs = require('fs');
const path = require('path');
const saveConfigFile = require('../src/init/saveConfigFile.js');
const checkFiles = require('../util/checkFiles.js');
const expressParser = require('../src/init/expressParser.js');
const expressConfig = require('../src/init/expressConfig.js');
const openAPIParser = require('../src/init/openAPIParser.js');

const init = (args) => {
  // if no args specified, provide empty config
  if (args.length === 0) {
    const configFile = require('../src/init/emptyConfig.js');
    saveConfigFile(configFile);
    return;
  }
  if (args.length > 1) {
    console.log(
      'battletest: \n Please specify only one source file location to generate battletest.config.js.  \n Currently accepted source files are: \n - openAPI file in .yaml or .json \n - express-js framework server.js file that exports app/express() object',
    );
    return;
  }

  // check if file exists
  const fileLocation = args[0];
  // const notInDirectory = checkFiles([fileLocation], process.cwd());
  // if (notInDirectory.length > 0) {
  //   console.log(`battletest: '${notInDirectory[0]}' was not found.`);
  //   return;
  // }
  // check if the filetype is right
  const fileRgx = /\.(js|json|yaml|yml)$/;
  if (!fileRgx.test(fileLocation)) {
    throw new Error(`battletest init: ${fileLocation} is not a valid filetype`);
  }

<<<<<<< HEAD
  const fileType = fileLocation.split(".")[1];
  
=======
  const fileType = fileLocation.split('.')[1];
>>>>>>> 2c4101b0d2b865facc8ee43ff10acd1437cf45ef
  const filePath = path.resolve(process.cwd(), fileLocation);
  if (fileType === 'js') {
    // check if it is an express file
    const { server, app } = require(filePath);
    const configFile = expressConfig(expressParser(app));

    saveConfigFile(configFile);
    server.close();
    return;
  }

<<<<<<< HEAD
  if (fileType === "json" || fileType === "yaml") {
    // const configFile = openApiParser(fileLocation);
  }

  console.log(`battletest: battletest.config.js has been created in the root directory.`);
=======
  if (fileType === 'json' || fileType === 'yaml' || fileType === 'yml') {
    // feed file into openAPIParser
    openAPIParser(fileLocation)
      .then((config) => {
        const configStr = `module.exports = ${JSON.stringify(config, null, 2).replace(/"(\w+)"\s*:/g, '$1:')}
        `;
        saveConfigFile(configStr);
        console.log('Config successfully created from OpenAPI specification.');
      })
      .catch((err) => { throw err; });
  }

  console.log('battletest');
>>>>>>> 2c4101b0d2b865facc8ee43ff10acd1437cf45ef
};

module.exports = init;
