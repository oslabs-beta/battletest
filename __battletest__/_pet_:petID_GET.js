
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
    .get('/pet/7').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .get('/pet/0').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .get('/pet/3').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .get('/pet/undefined').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .get('/pet/null').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .get('/pet/false').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime
        }
      result[this.test.fullTitle()] = resultData;

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"cookie":{"lastVisitedDate":"0"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .get('/pet/7').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime
        }
      result[this.test.fullTitle()] = resultData;

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"cookie":{"lastVisitedDate":"String(random number)"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .get('/pet/7').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime
        }
      result[this.test.fullTitle()] = resultData;

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"cookie":{"lastVisitedDate":"undefined"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .get('/pet/7').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime
        }
      result[this.test.fullTitle()] = resultData;

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"cookie":{"lastVisitedDate":"null"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .get('/pet/7').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime
        }
      result[this.test.fullTitle()] = resultData;

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"cookie":{"lastVisitedDate":"boolean_false"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .get('/pet/7').set('Cookie', ["lastVisitedDate=undefined"]).send()
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    