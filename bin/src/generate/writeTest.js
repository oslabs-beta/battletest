const fs = require("fs");
const path = require("path");
const _ = require("lodash");

/**
 * @name TestFile
 * @description Each path in the server has a corresponding TestFile.  A TestFile has methods for writing code that test randomized requests to such path. 
 * @param {Object} routeObj - an element from "routesForTesting" in battletest.config.js
 * @param {String} serverURL - "serverURL" in battletest.config.js
 */

class TestFile {
  constructor(pathObj, serverURL) {
    this.path = pathObj.path;
    this.method = pathObj.method;
    this.serverURL = serverURL;
    const { baseScenario, variations } = this.parseVectors(pathObj.vectors);
    this.baseScenario = baseScenario;
    this.variations = variations;
    this.testFileBlock = null;
  }

  /** 
   * @name TestFile.prototype.render
   * @description This calls a series of methods to output a single test file. 
   * @returns {String} testFileBlock - testFileBlock is a string that contains all codes that need to be included in a test file. 
   * 
  */
  render() {
    const itBlocks = ['// Base Scenario'];
    itBlocks.push(this.writeItBlock(this.baseScenario));

    Object.keys(this.variations).forEach(section => {
      Object.keys(this.variations[section]).forEach(key => {
        itBlocks.push(`// Testing: ${section}.${key}`);
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

    const describeBlock = this.writeDescribeBlock(itBlocks);
    
    const testFileBlock = `
    const request = require('supertest');
    const serverURL = '${this.serverURL}';
      ${describeBlock}
    `;
    this.testFileBlock = testFileBlock;
    this.saveTestFile();
  }

  /**
   * @name TestFile.prototype.saveTestFile
   * @description Saves the code for testing a single endpoint to __battletest__
   * @private
   */
  saveTestFile() {
    const filepath = path.resolve(process.cwd(), `__battletest__/${this.path}_${this.method}.js`);
    fs.writeFileSync(filepath, this.testFileBlock, (err) => { 
      if (err) throw err 
    });
  }

  /**
   * @name TestFile.prototype.writeDescribeBlock
   * @description Creates a Mocha describe suite for the specific route.  The suite contains the code for testing randomized requests on the endpoint.  
   * @private
   * @param {Array.<String>} itBlocks 
   * @returns {String} describeBlock - Mocha code for a single describe() suite. Specific to a path and method.
   */
  writeDescribeBlock(itBlocks) {
    let itBlocksCombined = ``;
    for (let i = 0; i < itBlocks.length; i += 1) {
      itBlocksCombined += itBlocks[i];
      itBlocksCombined += "\n";
    }
    const describeBlock = `
    describe('${this.route} ${this.method}', () => {
        ${itBlocksCombined}
        
        after(() => {
          const resultPath = path.resolve(process.cwd(),"__battletest__/__result__/${this.path}_${this.method}.json")
          console.log(result);
          fs.writeFile(resultPath, JSON.stringify(result), function(err) {
            if (err) throw err
          })
        });
    });`;
    return describeBlock;
  }

  /**
   * @name TestFile.prototype.writeItBlock
   * @private
   * @param {Object} scenario - Describes features 
   * @returns {String} itBlock - Mocha code for a single it() test case.
   */
  writeItBlock(scenario) {
    const itBlock = `
      it(${JSON.stringify(scenario)}, (done) => {
          ${this.writeSupertest(scenario)}
      });`;
    return itBlock;
  }

  /**
   * @name TestFile.prototype.writeSupertest
   * @private
   * @description Create a customized supertest code, based on a specified request scenario. 
   * @param {Object} scenario - Scenario describing values for various properties of an HTTP request.
   * @returns {String} supertestBlock - Supertest code for a single rquest, customized based on the 
   */
  
  writeSupertest(scenario) {
    switch (scenario.in) {
      case 'path':

      case 'query':
      case 'header':
      case 'cookie':
    }

    const supertestBlock = `
      let endTime;
      const startTime = Date.now();
      request(serverURL)
        .${this.method.toLowerCase()}('${this.route}')
        .send(${JSON.stringify(
          name: randomString(), // random string,
          petType: randomString(), // random string,
          favoriteFoods: randomArray(items = "string") // random array of strings
        )})
        .expect(400)
        .end((err, res) => {
          endTime = Date.now();
          const resultData =  {
            request: {
              body: res.request._data,
              query: res.request._query,
            },
            response: {
              status: res.status,
              body: res.body,
            },
            timer: endTime - startTime
          }
          result[this.test.fullTitle()] = resultData;
          done(err);

          /* Custom assertions can be inserted here */

          done(err);
        });
    `;
    return supertestBlock;
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

