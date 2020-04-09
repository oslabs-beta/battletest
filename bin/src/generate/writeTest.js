/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
const fs = require('fs');

const config = require('../../default.config.js');

const {
  server_location,
  PORT,
  model_location,
  routesForTesting,
} = config;

// SAMPLE: first route in routesForTesting 
const routeObj = routesForTesting[0];

class TestFile {
  constructor(routeObj) {
    // an element from functionsForTesting
    this.route = routeObj.route;
    this.method = routeObj.method;
    this.vectors = routeObj.vectors;
  }
  execute() {
    const itBlocks = [];
    [ /*all requests that will need to be generated*/ ].forEach((requestDetails) => {
      const supertestBlock = writeSupertest(requestDetails);
      const itBlock = writeItTest(supertestBlock, requestDetails);
      itBlocks.push(itBlock);
    })[ /**all requests */ ].forEach((requestDetails) => {
      itBlocks.push(new itBlock(requeustDetails))
    })

    return this.writeDescribeBlock(itBlocks)
  }
  writeDescribeBlock(itBlocks) {
    const itBlocksString = ``;
    for (let i = 0; i < itBlocks.length; i += 1) {
      itBlocksString += itBlocks[i];
      itBlocksString += '\n';
    }

    const template = `
      describe('${this.route}', () => {
        ${itBlocksString}
      }
    `
    return template
  }
  //  it(' {ticker: GOOG, columns: [‘close’, ‘volume’], start: "2020-03-03", end: "2020-04-03"}', supertestBlock)


  writeItBlock(supertestBlock, requestDetails) {
    const template = `
      it(${'PLACEHOLDER FOR REQUEST DETAILS'}, (done) => {
        ${supertestBlock}
      });
    `
    return template;
  }

  writeSupertest(requestDetails) {
    const template = `
      request(server_location)
        .get('${this.funcObj.route}')
        .send('/*TO DO: GENERATED REQUEST BODY TO GO HERE*/'})
        .expect(200)
        .end((err, res) => {
          /* Custom assertions can be inserted here */
          done(err);
    `;
    return template;
  }
}

const testFileString = new TestFile(routeObj);

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