// testing3
const {
  buildBodyProp
} = require('./buildBodyProp');
module.exports = {
  getParameters(fullReq) {

    const parameters = [];
    const paramSet = new Set(); 


    for (let ref of fullReq) {    
      const refStr = ref.join(""); 
      if (paramSet.has(refStr)) continue;
      else paramSet.add(refStr);

      switch (ref[0]) {
        case "body":
          buildBodyProp(ref.slice(1), reqBody);
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
      parameters,
    };
  };
};