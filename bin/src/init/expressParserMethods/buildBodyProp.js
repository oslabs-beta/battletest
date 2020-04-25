module.export = { 

buildBodyProp(arr, reqBody) {

  if (arr.length === 1) {
    let newKey = arr[0];
    reqBody[newKey] = { type: null };
  }
  let curObj = reqBody;
  for (let i = 0; i < arr.length; i++){
    let key = arr[i]

    if (i === arr.length - 1){
        curObj[key] = {type : null};
        break;
    }
    if (!curObj[key]) {
    curObj[key] = { type: 'object' , properties: {} };
    curObj = curObj[key].properties;
    // console.log(curObj)
   } else {
    curObj = curObj[key].properties;
    
   }
  } 
}
}

// console.log(JSON.stringify(buildBodyProp(['user'],reqBody)))
// console.log(buildBodyProp(['admin', 'adminContacts', 'adminEmail','test'],reqBody))
// console.log(JSON.stringify(reqBody))


  



// properties: {
//   name: {
//     type: "string"
//   },
//   petType: {
//     type: "string",
//   },
//   favoriteFoods: {
//     type: "array",
//     items: "string",
//   },
//   user: {
//     type: "object",
//     properties: {
//       username: {
//         type: "object"
//       }

//     family: {
//       type: "object",
//       properties: {
//         mom: { type: "string" },
//         dad: { type: "string" },
//       },
//     },
//     favoriteFoods: {
//       type: "array",
//       items: "string",
//     },
//   },
// };



