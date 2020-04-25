
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/1')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":0,"petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"1","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":null,"petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":false,"petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":0,"favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"1","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":null,"favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":false,"favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":0,"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":"1","family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":null,"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":false,"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":0,"dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"1","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":null,"dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":false,"dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":0,"siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"1","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":null,"siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":false,"siblings":{"sisters":"n1fvdvrlp3","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":0,"brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"1","brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":null,"brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":false,"brothers":"sfc6msrv65"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":0}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":"1"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":null}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"110r3o1r32","petType":"7fvyq9cvg8","favoriteFoods":["628mx3stz9","wmnx0hn9yi","28q1b64kyf","rtuhtb2x2v","zbsbfo9x1x"],"family":{"mom":"susp28uy67","dad":"unry3wwi6n","siblings":{"sisters":"n1fvdvrlp3","brothers":false}}})
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
    