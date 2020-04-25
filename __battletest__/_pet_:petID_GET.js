
const fs = require('fs');
const path = require('path');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const result = {}

describe('/pet/:petID_GET', function() {

    it('Base Scenario', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .get('/pet/5').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .get('/pet/9007199254740991').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .get('/pet/-9007199254740991').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .get('/pet/1.7976931348623157e+308').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .get('/pet/Infinity').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .get('/pet/-Infinity').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime
        }
      result[this.test.fullTitle()] = resultData;

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"cookie":{"lastVisitedDate":"Extremely long string"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .get('/pet/5').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime
        }
      result[this.test.fullTitle()] = resultData;

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"cookie":{"lastVisitedDate":"Postgres SQL injection"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .get('/pet/5').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime
        }
      result[this.test.fullTitle()] = resultData;

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"cookie":{"lastVisitedDate":"Negative number"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .get('/pet/5').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime
        }
      result[this.test.fullTitle()] = resultData;

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"cookie":{"lastVisitedDate":"positive infinity"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .get('/pet/5').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime
        }
      result[this.test.fullTitle()] = resultData;

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"cookie":{"lastVisitedDate":"random string"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .get('/pet/5').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    const resultPath = path.resolve(process.cwd(),"__battletest__/__result__/_pet_:petID_GET.json")
    fs.writeFile(resultPath, JSON.stringify(result, null, 2), function(err) {
    if (err) throw err
    });
});
});
    