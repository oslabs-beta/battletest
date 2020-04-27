function buildBodyProp(arr, reqBody) {
  if (arr.length === 1) {
    const newKey = arr[0];
    reqBody[newKey] = {
      type: null,
    };
  }
  let curObj = reqBody;
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];

    if (i === arr.length - 1) {
      curObj[key] = {
        type: null,
      };
      break;
    }
    if (!curObj[key]) {
      curObj[key] = {
        type: 'object',
        properties: {},
      };
      curObj = curObj[key].properties;
      // console.log(curObj)
    } else {
      curObj = curObj[key].properties;
    }
  }
}
module.exports = {
  buildBodyProp,
};
