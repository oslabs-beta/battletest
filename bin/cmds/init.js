/**
 * @name bin/cmds/init
 * @description execute "battletest init" by creating "__battletest__" folder and battletest.config.js
 * @param {null} undefined
 *
 */

const fs = require("fs");
const path = require("path");
const saveConfigFile = require("../src/init/saveConfigFile.js");
const checkFiles = require("../util/checkFiles.js");
// const expressParser = require("../src/init/expressParser.js");
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
  if (fileType === "js") {
    // check if it is an express file
    const server = require(filelocation);    
    //const configFile = expressParser(fileLocation);
    saveConfigFile(configFile);
    server.close();
    return;
  }

  if (fileType === "json" || fileType === "yaml") {
    // const configFile = expressParser(fileLocation);
  }

  console.log(`battletest`)
};

module.exports = init;
