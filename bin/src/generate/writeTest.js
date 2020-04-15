/* eslint-disable class-methods-use-this */
/** Class representing a Testfile. */

/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
const fs = require("fs");
const _ = require("lodash");

// FOR TESTING: routeObj
const routeObj = {
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
  ]
}

class TestFile {
  /**
   * Create a TestFile
   * @param {Object} routeObj - an element from "routesForTesting" in battletest.config.js
   * @param {String} serverURL - "serverURL" in battletest.config.js
   */
  constructor(routeObj, serverURL) {
    this.route = routeObj.route;
    this.method = routeObj.method;
    this.serverURL = serverURL;
    const {
      baseScenario,
      variations
    } = this.parseVectors(routeObj.vectors);
    this.baseScenario = baseScenario;
    this.variations = variations;
    this.testFileBlock = null; // to be populated by .render()
  }
  /** 
   * Render the text for the TestFile.
   * @returns {String} testFileBlock
   */
  render() {
    // TO DO: fix indentations for outputs
    const itBlocks = [];
    // generate baseScenario's itBlock
    itBlocks.push('// Base Scenario')
    itBlocks.push(this.writeItBlock(this.baseScenario));
    // loop through each key in this.variation
    Object.keys(this.variations).forEach(section => {
      Object.keys(this.variations[section]).forEach(key => {
        itBlocks.push(`// Scenarios for testing: ${section}.${key}`);
        for (let i = 0; i < this.variations[section][key].length; i += 1) {
          const newScenario = {
            ...this.baseScenario,
            [section]: {
              ...this.baseScenario[section],
              [key]: this.variations[section][key][i]
            }
          }
          itBlocks.push(this.writeItBlock(newScenario));
        }
      })
    });
    // loop throuch each element in this.variations
    // write ItBlocks

    // const itBlocks = [];
    // ['t1', 't2'].forEach(reqObj => {
    //   const supertestBlock = this.writeSupertest(reqObj);
    //    const itBlock = this.writeItBlock(supertestBlock);
    //   itBlocks.push(itBlock);
    // });
    // write describeBlock
    const describeBlock = this.writeDescribeBlock(itBlocks);
    // write testFileBlock
    const testFileBlock = `
    const request = require('supertest');
    const serverURL = '${this.serverURL}';
      ${describeBlock}
    `;
    this.testFileBlock = testFileBlock;
    return testFileBlock;
  }

  saveToTestFolder() {
    // TO DO: save this.testFileBlock to __battletest__
    // fs.writeFileSync(
    //   '/Users/bintakinteh/Desktop/Codesmith/Production-Project/battletest/bin/src/generate/testFile.js',
    //   testTemplate,
    //   (err) => {
    //     if (err) throw err;
    //   },
    // );
  }
  /**
   * Uses itBlocks (each representing a unique supertest) to create a describeBlock representing a single "describe" test suite.
   * @param {Array.<String>} itBlocks 
   * @returns {String} describeBlock
   */
  writeDescribeBlock(itBlocks) {
    // make a single template literal with all itBlocks
    let itBlocksCombined = ``;
    for (let i = 0; i < itBlocks.length; i += 1) {
      itBlocksCombined += itBlocks[i];
      itBlocksCombined += "\n";
    }
    // template for describeBlock
    const describeBlock = `
    describe('${this.route} ${this.method}', () => {
        ${itBlocksCombined}
    });`;
    return describeBlock;
  }

  writeItBlock(scenario) {
    // TO DO: 
    // template for describeBlock
    const itBlock = `
      it(${JSON.stringify(scenario)}, (done) => {
          ${this.writeSupertest(scenario)}
      });`;
    return itBlock;
  }

  writeSupertest(scenario) {
    // TO DO: customize supertestBlock based on reqObj details (method, body, params, headers, query)
    // TO DO: check this will persist cookies as necessary
    const supertestBlock = `
      request(serverURL)
        .${this.method.toLowerCase()}('${this.route}')
        .send('/*TO DO: GENERATED REQUEST BODY TO GO HERE*/'})
        .expect(200)
        .end((err, res) => {
          /* Custom assertions can be inserted here */
          done(err);
        });
    `;
    return supertestBlock;
  }

  parseVectors(vectors) {
    const baseScenario = {};
    const variations = {};
    
    vectors.forEach(vector => {
      // if section is not in baseScenario, create a new key and assign an empty object as its value in both baseScenario and variations
      if (!baseScenario.hasOwnProperty(vector.section)) {
        baseScenario[vector.section] = {};
        variations[vector.section] = {}
      }

      // handle choose_range
      if (vector.rule === 'choose_range') {
        // if user has defined payload_default
        if (vector.payload_default.length > 0) {
          // populte baseScenario
          // if user passed payload_default, use the first-listed payload_default for the base scenario
          // assign to the first key payload_default[0][0]
          baseScenario[vector.section][vector.key[0]] = vector.payload_default[0][0];
          // assign to the second key payload_default[0][1]
          baseScenario[vector.section][vector.key[1]] = vector.payload_default[0][1];

          // populate variations with: 
          // (i) vector['payload_default'].slice(1) (since the first element has been used in base), (ii) minimum possible, (iii) maximum possible
          const potentialVariations = [
            ...vector.payload_default.slice(1)
          ];
          // if payload_default_only is false or undefined, add minRange and maxRange if not already included
          if (!vector.payload_default_only || vector.payload_default_only === false) {
            const minRange = [vector.payload[0][1], vector.payload[1][0]];
            const maxRange = [vector.payload[0][0], vector.payload[1][1]];
            const temp = vector.payload_default.map(a => a.toString());
            if (!temp.includes(minRange.toString())) {
              potentialVariations.push(minRange);
            }
            if (!temp.includes(maxRange.toString())) {
              potentialVariations.push(maxRange);
            }
          }
          // key for ranges start with "r:" to mark that it is a range
          variations[vector.section][`r:${vector.key[0]}:${vector.key[1]}`] = potentialVariations;
        }
        // if user has not defined payload_default
        else {
          baseScenario[vector.section][vector.key[0]] = vector.payload[0][0];
          baseScenario[vector.section][vector.key[1]] = vector.payload[1][1];
          // add minRange to payload_variations
          const minRange = [vector.payload[0][1], vector.payload[1][0]];
          variations[vector.section][`r:${vector.key[0]}${vector.key[1]}`] = [minRange]
        }
      }

      // handle choose_one, choose_many, choose_range, choose_each
      else {
        if (vector['payload_default'].length > 0) {
          // populte baseScenario
          // if user passed payload_default, use the first-listed payload_default for the base scenario
          baseScenario[vector.section][vector.key] = vector.payload_default[0];
        }
        // if user has not passed payload_default, use the first-listed payload for the base scenario
        else {
          baseScenario[vector.section][vector.key] = vector.payload[0];
        }
        // populate variations
        switch (vector.rule) {
          case 'choose_one':
            // For 'choose_one', only one of the payload is chosen, which would be the default value. No further variations are added.
            break;
          case 'choose_each':
            // For 'choose_each', each of the payload needs to be tested, except for one that is already included in baseScenario
            variations[vector.section][vector.key] = vector.payload.filter(p => p !== baseScenario[vector.section][vector.key] ? true : false);
            break;
          case 'choose_many':
            // For 'choose_many', test 
            const potentialVariations = [
              [_.sample(vector.payload, 1)], // pick
              [_.sample(vector.payload, Math.ceil(vector.payload.length / 2))],
              [...vector.payload]
            ].filter(p => {
              return !_.isEqual(
                _.sortBy(p),
                _.sortBy(baseScenario[vector.section][vector.key])
              )
            })
            variations[vector.section][vector.key] = potentialVariations;
            break;
        }
      }
    })
    return {
      baseScenario,
      variations
    };
  }
}
/**
 * TEST
 */
const test = new TestFile(routeObj, "http://localhost:8000");
console.log(test.render());
//console.log(test.parseVectors(routeObj.vectors))
/**
 * RESULT
 *     const request = require('supertest'); 
    const serverURL = 'http://localhost:8000'; 
       
    describe('/products GET', () => { 
         
      it(PLACEHOLDER FOR REQUEST DETAILS, (done) => { 
           
      request(serverURL) 
        .get('/products') 
        .send('TO DO: GENERATED REQUEST BODY TO GO HERE'}) 
        .expect(200) 
        .end((err, res) => { 
          'Custom assertions can be inserted here'
          done(err); 
        }); 
     
      }); 
 
      it(PLACEHOLDER FOR REQUEST DETAILS, (done) => { 
           
      request(serverURL) 
        .get('/products') 
        .send('TO DO: GENERATED REQUEST BODY TO GO HERE'}) 
        .expect(200) 
        .end((err, res) => { 
          'Custom assertions can be inserted here'
          done(err); 
        }); 
     
      }); 
 
    }); 
 */