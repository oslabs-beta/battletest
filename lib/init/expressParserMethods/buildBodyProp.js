/**
 * @name buildBodyProp
 * @description Build the a request body object with the req.body variables introspected
 * from the middleware function. The schema type is currently null, the user is requires
 * to fill it in the generated battletest.config file
 * @param {array} arr
 * @param {object} reqBody
 * @returns no returns
 *
 */
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
    } else {
      curObj[key].properties = {};
      curObj = curObj[key].properties;
    }
  }
}
module.exports = buildBodyProp;
