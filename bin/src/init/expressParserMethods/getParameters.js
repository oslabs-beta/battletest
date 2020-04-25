// testing2
const {
  buildBodyProp
} = require('./buildBodyProp');
module.exports = {
  getParameters(fullReq) {
    //const method = routeInfo[endpoint].method.toUpperCase();
    const reqBody = {
      user: {
        type: "object",
        properties: {
          username: { type: null },
          userid: { type: null }
        }
      }
    };
    const parameters = [];
    const paramSet = new Set(); //store values as ref[0] + ref[1];

    // fullReq = [body, user, username]
    //           [body, user, userid]
    //           [headers, username]

    for (let ref of fullReq) {    // ref = [body, user, username]
      const refStr = ref.join(""); // "bodyuserusername"
      if (paramSet.has(refStr)) continue; 
      else paramSet.add(refStr);

      // ref = [body, user, username]
      switch (ref[0]) {
        case "body":
          reqBodyProp = buildBodyProp(ref.slice(1), reqBody);
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
    return {
      reqBodyProp,
      parameters
    }
  }
}