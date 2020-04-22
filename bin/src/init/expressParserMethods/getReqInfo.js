module.exports = {
  getReqInfo(routeInfo) {
    //console.log(routeInfo);
    const paths = {};
    // look at each endpoint in routeInfo
    for (let endpoint in routeInfo) {
      for (let method in routeInfo[endpoint]) {

        let funcDef = routeInfo[endpoint][method]["middlewareAndMethod"].middleware;
        const regex = /\{\s*.+\s*\}\s*\=\s*req\.[A-Za-z]+|req\.[A-Za-z.]+/g;
        // by using regular expression check what comes after "req." to save it as req's location

        /*  NOT COMPLETED
        let fullReq = [];
  
        for( let i = 0; i < funcDef.length; i++) {
          // match each element and check that it is not null, and then push the value in fullReq array
          let matchedString = funcDef[i].match(regex); // if no match is round, null is return
        }
        */

        let fullReq = funcDef
          .map((func) => func.match(regex))
          .filter((a) => a !== null);
        fullReq = fullReq.flat().map((a) => a.split(".").slice(1));

        //break ??

        //const method = routeInfo[endpoint]['middlewareAndMethod'].method.toUpperCase();
        const reqBodyProp = {};
        const parameters = [];
        const paramSet = new Set(); //store values as ref[0] + ref[1];

        for (let ref of fullReq) {
          const refStr = ref.join(""); //???
          if (paramSet.has(refStr)) continue;
          else paramSet.add(refStr);
          // [
          //     ["params", "id"],  -> "paramsid"
          //     ["params", "id"],
          //     ["body", "user", "id"],   req.body.user.id
          //     ["body"]
          //   ]



          switch (ref[0]) {
            case "body":
              reqBodyProp[ref[1]] = {
                type: null
              };
              break;
            case "headers":
              parameters.push({
                name: ref[1],
                in: "header",
                schema: {
                  type: null
                },
              });
              break;
            case "cookie":
              parameters.push({
                name: ref[1],
                in: "cookie",
                schema: {
                  type: null
                },
              });
              break;
            case "query":
              parameters.push({
                name: ref[1],
                in: "query",
                schema: {
                  type: null
                },
              });
              break;
            case "params":
              parameters.push({
                name: ref[1],
                in: "path",
                schema: {
                  type: null
                },
              });
              break;
            default:
              break;
          }
        }
        const operationObject = {};
        if (parameters.length > 0) operationObject['parameters'] = parameters;
        if (Object.keys(reqBodyProp).length > 0) operationObject['requestBody'] = {
          "application/json": {
            schema: {
              type: "object",
              properties: reqBodyProp,
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