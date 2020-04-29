
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .put('/pet/7')
    .type('application/json')
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":0,"petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"7","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":null,"petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":false,"petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":0,"favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"7","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":null,"favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":false,"favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":0,"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":"7","family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":null,"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":false,"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":0,"dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"7","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":null,"dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":false,"dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":0,"siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"7","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":null,"siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":false,"siblings":{"sisters":"l1k5nrysnn","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":0,"brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"7","brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":null,"brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":false,"brothers":"q27otcrt9i"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":0}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":"7"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn"}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":null}}})
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
    .send({"name":"5juatbkj77","petType":"qb3matvswt","favoriteFoods":["gjfjtdsc7","repni0bfw","33zrdpbhzl","lr74qefeog","1hdiq3mxul"],"family":{"mom":"eoazg5q7iy","dad":"tmmb9suz0r","siblings":{"sisters":"l1k5nrysnn","brothers":false}}})
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
    console.log('after block')
    fs.writeFile(resultPath, JSON.stringify(result, null, 2), function(err) {
    if (err) throw err
    });
});
});
    