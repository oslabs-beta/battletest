const generateTestFile = require("./generateTestFile.js");
const config = require("../init/battletest.config.js");

const path = config.paths["/pet/:petID"];
generateTestFile(config.serverURL, path, "PUT", path.PUT);
