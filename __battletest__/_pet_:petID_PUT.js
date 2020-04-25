
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
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"path":{"petID":"0"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/0')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"path":{"petID":"String(random number)"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/9')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"path":{"petID":"undefined"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/undefined')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"path":{"petID":"null"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/null')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"path":{"petID":"boolean_false"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/false')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"name":"0"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":0,"petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"name":"String(random number)"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"9","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"name":"undefined"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"name":"null"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":null,"petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"name":"boolean_false"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":false,"petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"petType":"0"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":0,"favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"petType":"String(random number)"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"9","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"petType":"undefined"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"petType":"null"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":null,"favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"petType":"boolean_false"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":false,"favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":0,"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":"9","family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":null,"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":false,"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"mom":"0"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":0,"dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"mom":"String(random number)"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"9","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"mom":"undefined"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"mom":"null"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":null,"dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"mom":"boolean_false"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":false,"dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"dad":"0"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":0,"siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"dad":"String(random number)"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"9","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"dad":"undefined"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"dad":"null"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":null,"siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"dad":"boolean_false"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":false,"siblings":{"sisters":"jphwogju3j","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"0"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":0,"brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"String(random number)"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"9","brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"undefined"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"null"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":null,"brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"boolean_false"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":false,"brothers":"rqn2lbu224"}}})
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
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"0"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":0}}})
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
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"String(random number)"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":"9"}}})
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
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"undefined"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j"}}})
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
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"null"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":null}}})
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
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"boolean_false"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/6')
    .type('application/json')
    .send({"name":"8edga53gl7","petType":"skpraf0qru","favoriteFoods":["jslfcqa48e","fgndt77wd","rf5w5wrtc","phb2rr2ep7","jmws3td6u"],"family":{"mom":"feda9eml5l","dad":"rfcwu27078","siblings":{"sisters":"jphwogju3j","brothers":false}}})
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
    