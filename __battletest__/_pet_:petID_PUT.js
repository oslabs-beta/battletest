
const fs = require('fs');
const path = require('path');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const result = {}

describe('/pet/:petID_PUT', function() {

    it('Base Scenario', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"path":{"petID":"2^53 - 1"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/9007199254740991')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"path":{"petID":"-(2^53 - 1)"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/-9007199254740991')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"path":{"petID":"1.79e+308"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/1.7976931348623157e+308')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"path":{"petID":"positive infinity"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/Infinity')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"path":{"petID":"negative infinity"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/-Infinity')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"name":"Extremely long string"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"****************************************************************************************************************************************************************************************************************************************************************","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"name":"Postgres SQL injection"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"SELECT * FROM information_schema.tables","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"name":"Negative number"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":-20,"petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"name":"positive infinity"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":null,"petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"name":"random string"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vgc9zm72rt","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"petType":"Extremely long string"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"****************************************************************************************************************************************************************************************************************************************************************","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"petType":"Postgres SQL injection"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"SELECT * FROM information_schema.tables","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"petType":"Negative number"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":-20,"favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"petType":"positive infinity"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":null,"favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"petType":"random string"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"mi6f66fo8q","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"favoriteFoods":"0"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":0,"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"favoriteFoods":"String(random number)"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":"6","family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"favoriteFoods":"undefined"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"favoriteFoods":"null"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":null,"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"favoriteFoods":"boolean_false"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":false,"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"mom":"Extremely long string"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"****************************************************************************************************************************************************************************************************************************************************************","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"mom":"Postgres SQL injection"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"SELECT * FROM information_schema.tables","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"mom":"Negative number"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":-20,"dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"mom":"positive infinity"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":null,"dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"mom":"random string"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"7ma9v0pmmq","dad":"string","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"dad":"Extremely long string"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"****************************************************************************************************************************************************************************************************************************************************************","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"dad":"Postgres SQL injection"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"SELECT * FROM information_schema.tables","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"dad":"Negative number"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":-20,"siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"dad":"positive infinity"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":null,"siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"dad":"random string"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"n8eb390dhj","siblings":{"sisters":"string","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"Extremely long string"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"****************************************************************************************************************************************************************************************************************************************************************","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"Postgres SQL injection"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"SELECT * FROM information_schema.tables","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"Negative number"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":-20,"brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"positive infinity"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":null,"brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"random string"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"9hiizydayp","brothers":"string"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"Extremely long string"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"****************************************************************************************************************************************************************************************************************************************************************"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"Postgres SQL injection"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"SELECT * FROM information_schema.tables"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"Negative number"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":-20}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"positive infinity"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":null}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"random string"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["nh121n4g4j","kwq2uhnhml","6gski41huf","tf4x1yq1c","hvg2gvmn4f"],"family":{"mom":"string","dad":"string","siblings":{"sisters":"string","brothers":"vxxof9kv71"}}})
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
afterEach(function() {
    result[this.currentTest.fullTitle()]['passed'] = this.currentTest.state === 'passed';
});

after(() => {
    const resultPath = path.resolve(process.cwd(),"__battletest__/__result__/_pet_:petID_PUT.json")
    fs.writeFile(resultPath, JSON.stringify(result, null, 2), function(err) {
    if (err) throw err
    });
});
});
    