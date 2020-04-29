
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .put('/pet/8')
    .type('application/json')
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":0,"petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"8","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":null,"petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":false,"petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":0,"favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"8","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":null,"favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":false,"favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":0,"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":"8","family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":null,"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":false,"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":0,"dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"8","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":null,"dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":false,"dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":0,"siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"8","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":null,"siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":false,"siblings":{"sisters":"kzxvg5v1qo","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":0,"brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"8","brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":null,"brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":false,"brothers":"v4p13jis7o"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":0}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":"8"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo"}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":null}}})
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
    .send({"name":"zbsqtdd98m","petType":"71nrra204r","favoriteFoods":["5ab7bgsb6w","mlw2pjm78","1zmkfowg99","sbxj41iqjq","g4pvidlcvc"],"family":{"mom":"400e3apssv","dad":"n3v19dewbj","siblings":{"sisters":"kzxvg5v1qo","brothers":false}}})
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
    