
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":0,"petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"1","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":null,"petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":false,"petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":0,"favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"1","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":null,"favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":false,"favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":0,"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":"1","family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":null,"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":false,"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":0,"dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"1","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":null,"dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":false,"dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":0,"siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"1","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":null,"siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":false,"siblings":{"sisters":"hff7dijqta","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":0,"brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"1","brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":null,"brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":false,"brothers":"9soga4uuiu"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":0}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":"1"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta"}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":null}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    .put('/pet/2')
    .type('application/json')
    .send({"name":"xx0fq38m4g","petType":"fxyxokjgfr","favoriteFoods":["iqi6n2z61k","637uwee1fj","3bxpjflb4f","va05rjb9ll","1njyvo5bjt"],"family":{"mom":"deaakpo9dq","dad":"kvjjmor6pr","siblings":{"sisters":"hff7dijqta","brothers":false}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
        const resultData =  {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
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
    