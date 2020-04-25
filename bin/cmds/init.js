/**
 * @name bin/cmds/init
 * @description execute "battletest init" by creating "__battletest__" folder and battletest.config.js
 * @param {null} undefined
 *
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

  const fileType = fileLocation.split('.')[1];
  const filePath = path.resolve(process.cwd(), fileLocation);
  if (fileType === 'js') {
    // check if it is an express file
    const { server, app } = require(filePath);
    const configFile = expressConfig(expressParser(app));

    saveConfigFile(configFile);
    server.close();
    return;
  }

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
};

module.exports = init;
