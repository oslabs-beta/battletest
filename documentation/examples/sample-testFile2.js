const fs = require("fs");
const path = require("path");
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const result = {};

describe("/postMessage_post", function () {
  it("Base Scenario", function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .post("/postMessage")
      .type("application/json")
      .send({ post_message: "o46kimioge", post_password: "rnxs2lt1rb" })
      .expect(400)
      .end((err, res) => {
        endTime = Date.now();
        const resultData = {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime,
        };
        result[this.test.fullTitle()] = resultData;

        /* Custom assertions can be inserted here */

        done(err);
      });
  });
  it('{"application/json":{"body":{"post_message":"0"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .post("/postMessage")
      .type("application/json")
      .send({ post_message: 0, post_password: "rnxs2lt1rb" })
      .expect(400)
      .end((err, res) => {
        endTime = Date.now();
        const resultData = {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime,
        };
        result[this.test.fullTitle()] = resultData;

        /* Custom assertions can be inserted here */

        done(err);
      });
  });
  it('{"application/json":{"body":{"post_message":"String(random number)"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .post("/postMessage")
      .type("application/json")
      .send({ post_message: "8", post_password: "rnxs2lt1rb" })
      .expect(400)
      .end((err, res) => {
        endTime = Date.now();
        const resultData = {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime,
        };
        result[this.test.fullTitle()] = resultData;

        /* Custom assertions can be inserted here */

        done(err);
      });
  });
  it('{"application/json":{"body":{"post_message":"undefined"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .post("/postMessage")
      .type("application/json")
      .send({ post_password: "rnxs2lt1rb" })
      .expect(400)
      .end((err, res) => {
        endTime = Date.now();
        const resultData = {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime,
        };
        result[this.test.fullTitle()] = resultData;

        /* Custom assertions can be inserted here */

        done(err);
      });
  });
  it('{"application/json":{"body":{"post_message":"null"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .post("/postMessage")
      .type("application/json")
      .send({ post_message: null, post_password: "rnxs2lt1rb" })
      .expect(400)
      .end((err, res) => {
        endTime = Date.now();
        const resultData = {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime,
        };
        result[this.test.fullTitle()] = resultData;

        /* Custom assertions can be inserted here */

        done(err);
      });
  });
  it('{"application/json":{"body":{"post_message":"boolean_false"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .post("/postMessage")
      .type("application/json")
      .send({ post_message: false, post_password: "rnxs2lt1rb" })
      .expect(400)
      .end((err, res) => {
        endTime = Date.now();
        const resultData = {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime,
        };
        result[this.test.fullTitle()] = resultData;

        /* Custom assertions can be inserted here */

        done(err);
      });
  });
  it('{"application/json":{"body":{"post_password":"0"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .post("/postMessage")
      .type("application/json")
      .send({ post_message: "o46kimioge", post_password: 0 })
      .expect(400)
      .end((err, res) => {
        endTime = Date.now();
        const resultData = {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime,
        };
        result[this.test.fullTitle()] = resultData;

        /* Custom assertions can be inserted here */

        done(err);
      });
  });
  it('{"application/json":{"body":{"post_password":"String(random number)"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .post("/postMessage")
      .type("application/json")
      .send({ post_message: "o46kimioge", post_password: "8" })
      .expect(400)
      .end((err, res) => {
        endTime = Date.now();
        const resultData = {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime,
        };
        result[this.test.fullTitle()] = resultData;

        /* Custom assertions can be inserted here */

        done(err);
      });
  });
  it('{"application/json":{"body":{"post_password":"undefined"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .post("/postMessage")
      .type("application/json")
      .send({ post_message: "o46kimioge" })
      .expect(400)
      .end((err, res) => {
        endTime = Date.now();
        const resultData = {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime,
        };
        result[this.test.fullTitle()] = resultData;

        /* Custom assertions can be inserted here */

        done(err);
      });
  });
  it('{"application/json":{"body":{"post_password":"null"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .post("/postMessage")
      .type("application/json")
      .send({ post_message: "o46kimioge", post_password: null })
      .expect(400)
      .end((err, res) => {
        endTime = Date.now();
        const resultData = {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime,
        };
        result[this.test.fullTitle()] = resultData;

        /* Custom assertions can be inserted here */

        done(err);
      });
  });
  it('{"application/json":{"body":{"post_password":"boolean_false"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .post("/postMessage")
      .type("application/json")
      .send({ post_message: "o46kimioge", post_password: false })
      .expect(400)
      .end((err, res) => {
        endTime = Date.now();
        const resultData = {
          request: {
            body: res.request._data,
            query: res.request._query,
          },
          response: {
            status: res.status,
            body: res.body,
          },
          timer: endTime - startTime,
        };
        result[this.test.fullTitle()] = resultData;

        /* Custom assertions can be inserted here */

        done(err);
      });
  });
  afterEach(function () {
    result[this.currentTest.fullTitle()]["passed"] =
      this.currentTest.state === "passed";
  });

  after(() => {
    const resultPath = path.resolve(
      process.cwd(),
      "__battletest__/__result__/_postMessage_post.json"
    );
    fs.writeFile(resultPath, JSON.stringify(result, null, 2), function (err) {
      if (err) throw err;
    });
  });
});
