const fs = require("fs");
const path = require("path");
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const result = {};

describe("/deleteMessage_delete", function () {
  it("Base Scenario", function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .delete("/deleteMessage")
      .type("application/json")
      .send({ post_id: 4 })
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
  it('{"application/json":{"body":{"post_id":"0"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .delete("/deleteMessage")
      .type("application/json")
      .send({ post_id: 0 })
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
  it('{"application/json":{"body":{"post_id":"String(random number)"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .delete("/deleteMessage")
      .type("application/json")
      .send({ post_id: "8" })
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
  it('{"application/json":{"body":{"post_id":"undefined"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .delete("/deleteMessage")
      .type("application/json")
      .send({})
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
  it('{"application/json":{"body":{"post_id":"null"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .delete("/deleteMessage")
      .type("application/json")
      .send({ post_id: null })
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
  it('{"application/json":{"body":{"post_id":"boolean_false"}}}', function (done) {
    let endTime;
    const startTime = Date.now();

    request(serverURL)
      .delete("/deleteMessage")
      .type("application/json")
      .send({ post_id: false })
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
      "__battletest__/__result__/_deleteMessage_delete.json"
    );
    fs.writeFile(resultPath, JSON.stringify(result, null, 2), function (err) {
      if (err) throw err;
    });
  });
});
