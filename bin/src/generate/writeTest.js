/** Class representing a Testfile. */

/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
const fs = require("fs");
const _ = require("lodash");

//const config = require('../../default.config.js');

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
    this.parseVectors = require('./parseVectors.js');
    this.baseScenario, this.variations = this.parseVectors(routeObj.vectors); // this.baseScenario will be the scenario based on which all other secnarios will be based. 
    this.testFileBlock = null; // to be populated by .render()
  }
  /** 
   * Render the text for the TestFile.
  */
  render() {
    // TO DO: iterate through to write itBlocks
    // write ItBlocks
    const itBlocks = [];
    ['t1', 't2'].forEach(reqObj => {
      const supertestBlock = this.writeSupertest(reqObj);
       const itBlock = this.writeItBlock(supertestBlock);
      itBlocks.push(itBlock);
    });
    // write describeBlock
    const describeBlock = this.writeDescribeBlock(itBlocks);
    // write testFileBlock
    const testFileBlock = `
    const request = require('supertest');
    const serverURL = '${this.serverURL}';
      ${describeBlock}
    `;
    return testFileBlock;
  }
  save() {
    // TO DO: save this.testFileBlock to __battletest__
  }
  /** */
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

  writeItBlock(supertestBlock) {
    // template for describeBlock
    const itBlock = `
      it(${"PLACEHOLDER FOR REQUEST DETAILS"}, (done) => {
          ${supertestBlock}
      });`;
    return itBlock;
  }

  writeSupertest(reqScenario) {
    // TO DO: customize supertestBlock based on reqObj details (method, body, params, headers, query)
    // TO DO: check this will add cookies
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
}

// const test = new TestFile(routeObj, "http://localhost:8000");
// test.render();
// console.log(test.testFileBlock);

// fs.writeFileSync(
//   '/Users/bintakinteh/Desktop/Codesmith/Production-Project/battletest/bin/src/generate/testFile.js',
//   testTemplate,
//   (err) => {
//     if (err) throw err;
//   },
// );
