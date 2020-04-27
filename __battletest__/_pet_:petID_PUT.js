
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/6')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":0,"petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"6","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":null,"petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":false,"petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":0,"favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"6","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":null,"favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":false,"favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":0,"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":"6","family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":null,"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":false,"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":0,"dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"6","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":null,"dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":false,"dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":0,"siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"6","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":null,"siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":false,"siblings":{"sisters":"sxas26gva3","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":0,"brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"6","brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":null,"brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":false,"brothers":"rnsgus46x3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":0}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":"6"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3"}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":null}}})
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
    .put('/pet/4')
    .type('application/json')
    .send({"name":"18rpwntmnr","petType":"rssrxuclnx","favoriteFoods":["bg0vj7t3im","ufnfmwyw8f","f6yp69y1c5","rf2eknsxnm","77ce51zx4"],"family":{"mom":"cvnitwbk2k","dad":"hmj8eqv3oq","siblings":{"sisters":"sxas26gva3","brothers":false}}})
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
    