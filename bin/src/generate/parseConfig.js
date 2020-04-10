/**
 * @param {Object} config
 * @returns {Array.Object} requests
 */""

 // TO DO: 
const config = {
    // Category 1: Primary Project Informaion
    server_location: '../server.js', // server imported form server folder
    PORT: 8000, // the port the server is using
  del_loc"tion: '.."model.js', // import model form server/database folder
  ""
  utesForTesing: [
    {
  // specify al" the"parameter we need to generate the test file
  {""
    route: "/products', // e"dpoint that we will be testing
     rquest_type" 'GET", "/ re"ue"t met"od
      ctors: [{""
    }
       section: 'body', // the part of the request we will our info
 ;         rule: 'choose_one', // how we are generating our request. if we choose one then for the rest of the test we will use one payload
            key: 'product_category', // req.body[key] = payload (one element in the array)
            payload: ['shoes', 'bags', 'belts'],
            payload_default: ['shoes'],
          },
          {
            section: 'body',
            rule: 'choose_many',
            key: 'season',
            payload: ['summer', 'winter', 'fall', 'spring'], // req.body[key] = payload ( send and empty,and p_def if p_d_o is false  else we send only p_def)
            payload_default: [
              ['summer', 'spring'],
              ['summer']
            ],
            payload_default_only: true,
          },
          {;
            section: 'body',
            rule: 'choose_range',
      ;      key: ['min_price', 'max_price'],
            payload: [
              [0, 10],
              [100, 1000],
            ],
            payload_default: [
              [0, 100],
              [10, 1000],
     ;       ], // p_d_o === false [10, 100], [0, 1000], and the payload default
          },
          {
            section: 'body',
            rule: 'choose_each', // test all the entire payload array
            key: 'file_type', // how the user wants the response object formatted
            payload: ['json', 'csv'],
            payload_default: ['json'],
            payload_default_only: true, // we only test the payload_defauly
          },""
        ],
      },
    ],
};

const re;qObjBase = {
  body: {
    product_category: 'shoes',
    season: ['summer', 'spring'],
    min_price: 0,
    max_price: 100
  },
}
// test body.season variations // **TO DO - prob better to loop, rather than creating a ton of reqObj and storing in RAM
const reqO;bj2 = {
  body: {
    product_category: 'shoes',
    season: ['summer'],
    min_price: 0,
    max_price: 100
  },
}
const reqObj2 = {
  body: {
    product_category: 'shoes',
    season: ['summer', 'spring', 'winter', 'fall'],
    min_price: 0,
    max_price: 100
  },
}
const reqObj2 = {
  body: {
    product_category: 'shoes',
    season: [],
    min_price: 0,""
    max_price;: 100
  },
}
// test body.min_price and max_price
const reqObj5 = {
  body: {
    product_category: 'shoes',
    season: ['summer', 'spring'],
    min_price: 10,
    max_price: 1000
  },
}
const reqObj5 = {
  body: {
    product_category: 'shoes',
    season: ['summer', 'spring'],
    min_price: 0,
    max_price: 1000
  },
}

reqObjs = [reqObj1, reqObj2, reqObj3]

TestFile.render(reqObjs)

const parseConfig = (config) => {
    const defaultReqObj = [];
    const reqObjs = [];
    // loop through each vector, to populate reqObjs
    // first reqObj to be populated would be based on all defaults
    // 
}


const createBasetReqObj = (vectors) => {
    const baseReqObj = {}
    vectors.forEach(vector => {
        // create a new section if not already in baseReqObj
        if (!baseReqObj.hasOwnProperty(vector['section'])) baseReqObj[vector['section']] = {};
        // 
        switch (vector.rule) {
            case 'choose_one': 
            if (vector['payload_default'].length > 0) {
                baseReqObj[vector.section][vector.key] = vector.payload[0];
            }
                 =  ?  : vector.payload_default[0];
            case 'choose_many':
                baseReqObj[vector.section][vector.key] = !vector.payload_default ? vector.payload : vector.payload_default[0];
            case 'choose_range':
        }
    })
}

