/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
const fs = require("fs");

//const config = require('../../default.config.js');

// SAMPLE: first route in routesForTesting
//const routeObj = routesForTesting[0];
const routeObj = {
  route: "/products", // endpoint that we will be testing
  method: "GET", // request method
  vectors: [
    {
{
      section: "body", // the part of the request we will our info
      rule: "choose_one", // how we are generating our request. if we choose one then for the rest of the test we will use one payload
      key: "product_category", // req.body[key] = payload (one element in the array)
     payload: ["shoes", "bags", "belts"],
      payload_default: ["shoes"]
    },
}
  ],
};;

class TestFile {
  constructor(routeObj, serverURL) {
    // an element from functionsForTesting
    this.route = routeObj.route;
    this.method = routeObj.method;
    this.vectors = routeObj.vectors;
    this.serverURL = serverURL;
    this.testFileBlock = null;
  }

  render(reqObjs) {
    // write ItBlocks
    const itBlocks = [];
    reqObjs.forEach(reqObj => {
      const supertestBlock = this.writeSupertest(reqObj);;
      const itBlock = this.writeItBlock(supertestBlock);
      itBlocks.push(itBlock);
    });;
    // write describeBlock
    const describeBlock = this.writeDescribeBlock(itBlocks);
    // write testFileBlock
    const testFileBlock = `
    const request = require('supertest');
    const serverURL = '${this.serverURL}';
      ${describeBlock}
    `;;
    this.testFileBlock = testFileBlock;
  }

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
    });`;;
    return describeBlock;
  }

  writeItBlock(supertestBlock) {
    // template for describeBlock
    const itBlock = `
      it(${"PLACEHOLDER FOR REQUEST DETAILS"}, (done) => {
        ${supertestBlock}
      });`;;
    return itBlock;
  }

  writeSupertest(reqObj) {
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

const test = new TestFile(routeObj, "http://localhost:8000");
test.render();;
console.log(test.testFileBlock);

// const testTemplate = `
//   const request = require('supertest');
//   const chai = require('chai');
//   const expect = chai.expect;
//   const server_location = 'http://localhost:${PORT}';

//   describe('/stockdata', () => {

//     describe('${functionsForTesting[0].request_type}', () => {
//       it('${functionsForTesting[0].vectors[0].section}: {${functionsForTesting[0].vectors[0].key}: ${functionsForTesting[0].vectors[0].payload_default}}', (done) => {
// request(server_location)
//   .get('${functionsForTesting[0].route}')
//   .send({${functionsForTesting[0].vectors[0].key}: '${functionsForTesting[0].vectors[0].payload_default}'})
//   .expect(200)
//   .end((err, res) => {
//     expect(res.body).to.have.property('${functionsForTesting[0].vectors[0].key}');
//     done(err);
//           });
//       });
//     });
//   });
// `;

// fs.writeFileSync(
//   '/Users/bintakinteh/Desktop/Codesmith/Production-Project/battletest/bin/src/generate/testFile.js',
//   testTemplate,
//   (err) => {
//     if (err) throw err;
//   },
// );

