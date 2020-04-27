/**
 * @name bin/cmds/init
 * @description 
 * This initializes "battletest.config.js" and creates __battletest__ (for storing tests) and __battletest__/__results__ (for storing results once the "battletest start" command runs the tests contained in __battletest__).  
 * 
 * This creates "battletest.config.js" either (A) as an empty config file with skeleton structure, (B) via automatically reading & converting the express-js server file into a battletest.config.js using expressConverter, or (C) via automaticaly reading & converting an OpenAPI Document. 
 * 
 * @param {string} [args] - a single file name, .yml or .json if an OpenAPI document, or .js if an Express document.
 */

const fs = require("fs");
const path = require("path");
const saveConfigFile = require("../src/init/saveConfigFile.js");
const checkFiles = require("../util/checkFiles.js");
const expressParser = require("../src/init/expressParser.js");
const expressConfig = require("../src/init/expressConfig.js");
// const openApiParser = require("../src/init/openApiParser.js");

const init = (args) => {
  // if no args specified, provide empty config
  if (args.length === 0) {
    const configFile = require("../src/init/emptyConfig.js");
    saveConfigFile(configFile);
    return;
  }
  if (args.length > 1) {
    console.log(
      `battletest: \n Please specify only one source file location to generate battletest.config.js.  \n Currently accepted source files are: \n - openAPI file in .yaml or .json \n - express-js framework server.js file that exports app/express() object`
    );
    return;
  }

  // check if file exists
  const fileLocation = args[0];
  const notInDirectory = checkFiles([fileLocation], process.cwd());
  if (notInDirectory.length > 0) {
    console.log(`battletest: '${notInDirectory[0]}' was not found.`);
    return;
  }

  const fileType = fileLocation.split(".")[1];
  
  const filePath = path.resolve(process.cwd(), fileLocation);
  if (fileType === "js") {
    // check if it is an express file
    const { server, app } = require(filePath);    
    const configFile = expressConfig(expressParser(app));
    
    saveConfigFile(configFile);
    server.close();
    return;
  }

  if (fileType === "json" || fileType === "yaml") {
    // const configFile = openApiParser(fileLocation);
  }

  console.log(`battletest: battletest.config.js has been created in the root directory.`);
};

module.exports = init;
