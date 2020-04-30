/**
 * @name bin/cmds/init
 * @description execute "battletest init" by creating "__battletest__" folder and battletest.config.js
 * @param {null} undefined
 *
 */

const path = require('path');
const fs = require('fs');
const saveConfigFile = require('../../init/saveConfigFile.js');
// const checkFiles = require('../util/checkFiles.js');
const expressParser = require('../../init/expressParser.js');
const expressConfig = require('../../init/expressParserMethods/expressConfig.js');
const openAPIParser = require('../../init/openApiParser.js');

const init = (args) => {
  // if no args specified, provide empty config
  if (args.length === 0) {
    const configFile = require('../../init/emptyConfig.js');
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
  // check if the filetype is right
  const fileRgx = /\.(js|json|yaml|yml)$/;
  if (!fileRgx.test(fileLocation)) {
    throw new Error(`battletest init: ${fileLocation} is not a valid filetype`);
  }

  // const fileType = fileLocation.split('.')[1];
  const filePath = path.resolve(process.cwd(), fileLocation);

  if (!fs.existsSync(filePath)) {
    throw new Error(`battletest: no such file: ${filePath}`);
  }
  if (/\.js$/.test(fileLocation)) {
    // check if it is an express file
    const { server, app } = require(filePath);
    const configFile = expressConfig(expressParser(app));

    saveConfigFile(`module.exports = ${JSON.stringify(configFile, null, 2).replace(/"(\w+)"\s*:/g, '$1:')}`);
    server.close();
    return;
  }

  if (/\.(json|yaml|yml)$/.test(fileLocation)) {
    // feed file into openAPIParser
    openAPIParser(fileLocation)
      .then((config) => {
        const configStr = `module.exports = ${JSON.stringify(config, null, 2).replace(/"(\w+)"\s*:/g, '$1:')}
        `;
        saveConfigFile(configStr);
      })
      .catch((err) => { throw err; });
  }
};

module.exports = init;
