
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
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/3')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":0,"petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"3","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":null,"petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":false,"petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":0,"favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"3","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":null,"favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":false,"favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":0,"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":"3","family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":null,"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":false,"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":0,"dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"3","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":null,"dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":false,"dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":0,"siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"3","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":null,"siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":false,"siblings":{"sisters":"j5a7r6rqiy","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":0,"brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"3","brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":null,"brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":false,"brothers":"4gjksqx3i6"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":0}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":"3"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy"}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":null}}})
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
    .put('/pet/5')
    .type('application/json')
    .send({"name":"vawg2n0t6c","petType":"44aqju8ytj","favoriteFoods":["eymote93y8","iw1n3wpt9e","tt1usfgiie","nuxdntymm","ifvzpxxpt"],"family":{"mom":"4lhkcfw6l2","dad":"pqbhljxo34","siblings":{"sisters":"j5a7r6rqiy","brothers":false}}})
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
    