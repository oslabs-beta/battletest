const {
  getParameters
} = require('./getParameters');

function getReqInfo(routeInfo) {
  //console.log(routeInfo);
  const paths = {};
  // look at each endpoint in routeInfo
  for (let endpoint in routeInfo) {
    // console.log(endpoint.method);


    let funcDef = routeInfo[endpoint].middleware;
    // console.log(funcDef)
    const regex = /\{\s*.+\s*\}\s*\=\s*req\.[A-Za-z]+|req\.[A-Za-z.]+/g;
    // by using regular expression check what comes after "req." to save it as req's location
    const regEx = /\w*[a-zA-Z]\w*/g;

    let fullReq = [];
    funcDef.forEach(string => { // fullReq.push(string.match(regex))
      if (string !== undefined) {
        matchedString = string.match(regex);
      }

      if (matchedString !== null) {
        matchedString.forEach(newString => fullReq.push(newString.match(regEx)));
      }
    });

    for (let i = 0; i < fullReq.length; i++) {
      for (let j = 0; j < fullReq[i].length; j++) {
        if (fullReq[i][j] === 'req') {
          fullReq[i].splice(j, 1);
        }
      }
    }
    console.log('fullReq in reqInfo', fullReq)

    const req = getParameters(fullReq);
    const {
      parameters,
      reqBodyProp
    } = req;


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
    paths[endpoint].method = operationObject;
  }
  return paths;
}


module.exports = {
  getReqInfo
};