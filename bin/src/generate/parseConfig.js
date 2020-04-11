/**
 * @param {Object} config
 * @returns {Array.Object} reqObjs
 */

 // TO DO: 
const config = {
    // Category 1: Primary Project Information
    server_location: '../server.js', // server imported form server folder
    serverURL: 8000, // the port the server is using
    model_location: '../model.js', // import model form server/database folder
  
    routesForTesting: [
      // specify all the parameter we need to generate the test file
      {
        route: '/products', // endpoint that we will be testing
        method: 'GET', // request method
        vectors: [{
            section: 'body', // the part of the request we will our info
            rule: 'choose_one', // how we are generating our request. if we choose one then for the rest of the test we will use one payload
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
          {
            section: 'body',
            rule: 'choose_range',
            key: ['min_price', 'max_price'],
            payload: [
              [0, 10],
              [100, 1000],
            ],
            payload_default: [
              [0, 100],
              [10, 1000],
            ], // p_d_o === false [10, 100], [0, 1000], and the payload default
          },
          {
            section: 'body',
            rule: 'choose_each', // test all the entire payload array
            key: 'file_type', // how the user wants the response object formatted
            payload: ['json', 'csv'],
            payload_default: ['json'],
            payload_default_only: true, // we only test the payload_defauly
          },
        ],
      },
    ]
}

const reqObjBase = {
  body: {
    product_category: 'shoes',
    season: ['summer', 'spring'],
    min_price: 0,
    max_price: 100
  }
}

this.reqObjBase = {/**req obj base */}
this.variations = 
{
  seasons:[['summer'], ['summer', 'spring', 'winter', 'fall'], []],
  file_type: ['json', 'csv']
}
this.indexes = {
  seasons: 0,
  file_type: 0
}

nextRequest(){
  //Returns new request built from objbase and variations
}


// test body.season variations // **TO DO - prob better to loop, rather than creating a ton of reqObj and storing in RAM
const reqObj2 = {
  body: {
    product_category: 'shoes',
    season: ['summer'],
    min_price: 0,
    max_price: 100
  },
}
const reqObj3 = {
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
    min_price: 0,
    max_price: 100
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
}


const createBaseScenario = (vectors) => {
    const baseScenario = {}
    vectors.forEach(vector => {
        // create a new section if not already in baseScenario
        if (!baseScenario.hasOwnProperty(vector['section'])) baseScenario[vector['section']] = {};
        // 
        switch (vector.rule) {
            case 'choose_one': 
            if (vector['payload_default'].length > 0) {
                baseScenario[vector.section][vector.key] = vector.payload[0];
            }
            case 'choose_many':
                baseScenario[vector.section][vector.key] = !vector.payload_default ? vector.payload : vector.payload_default[0];
                break;
            case 'choose_range':
        }
    })
}

