const fs = require("fs");
const path = require("path");
const _ = require("lodash");

/**
 * @name TestFile
 * @description Each path in the server has a corresponding TestFile.  A TestFile has methods for writing code that test randomized requests to such path. 
 * @param {String} path - ex. "/pet/:petID"
 * @param {String} operation - 
 * @param {Object} operationObject - Contains information on the shape of the request for a single path.
 */

const testOperationObject = {
    parameters: [
      {
        name: "petID",
        in: "path",
        schema: {
          type: "array",
          items: {
            type: "integer",
          },
        },
      },
      {
        name: "lastVisitedDate",
        in: "cookie",
        schema: { type: "string" },
      },
      {
        name: "token",
        in: "header",
        schema: {
          type: "array",
          items: {
            type: "integer",
          },
        },
      },
    ],
}

class TestFile {
    constructor(path, pathObject) {
        this.path = path;
        this.operation = operation;
        this.operationObject = operationObject;
    }
    render() {
        
    }


}
