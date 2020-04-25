const {
  getParameters
} = require('./getParameters');
module.exports = {

  getReqInfo(routeInfo) {
    //console.log(routeInfo);
    const paths = {};
    // look at each endpoint in routeInfo
    for (let endpoint in routeInfo) {
      for (let method in routeInfo[endpoint]) {

        let funcDef = routeInfo[endpoint][method].middleware;
        const regex = /\{\s*.+\s*\}\s*\=\s*req\.[A-Za-z]+|req\.[A-Za-z.]+/g;
        // by using regular expression check what comes after "req." to save it as req's location

        /*  NOT COMPLETED
        let fullReq = [];
  
        for( let i = 0; i < funcDef.length; i++) {
          // match each element and check that it is not null, and then push the value in fullReq array
          let matchedString = funcDef[i].match(regex); // if no match is round, null is return
        }
        */
        // todo: expand to make it readable
        let fullReq = funcDef
          .map((func) => func.match(regex))
          .filter((a) => a !== null);
        fullReq = fullReq.flat().map((a) => a.split(".").slice(1));

        //break ??

        const {
          reqBodyProp,
          parameters
        } = getParameters(fullReq)


        const operationObject = {};
        if (parameters.length > 0) operationObject['parameters'] = parameters;
        if (Object.keys(reqBodyProp).length > 0) operationObject['requestBody'] = {
          "application/json": {
            schema: {
              type: "object",
              properties : reqBodyProp,
            },
          },
        };

        if (!paths[endpoint]) paths[endpoint] = {};
        paths[endpoint][method] = operationObject;
      }
    }
    return paths;
  }

}