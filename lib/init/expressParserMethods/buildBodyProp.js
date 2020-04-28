module.exports = {

  buildBodyProp(arr, reqBody) {

    if (arr.length === 1) {
      let newKey = arr[0];
      reqBody[newKey] = { type: null };
    }
    let curObj = reqBody;
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i]

      if (i === arr.length - 1) {
        curObj[key] = { type: null };
        break;
      }
      if (!curObj[key]) {
        curObj[key] = { type: 'object', properties: {} };
        curObj = curObj[key].properties;
        // console.log(curObj)
      } else {
        curObj[key].properties = {};
        curObj = curObj[key].properties;
      }
    }
  }
}
