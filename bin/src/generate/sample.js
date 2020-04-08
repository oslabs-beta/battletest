const request = require('supertest');

const server = 'http://localhost:8000';

describe('/stockdata', () => {
  describe('GET', () => {
    // testing for columns
    it('{ticker: GOOG, columns: [], start: "2020-03-03", end: "2020-04-03"}', () => request(server)
      .get('/stockdata')
      .query({ file_type: 'csv' })
      .send({ ticker: 'GOOG', columns: [] })
      .expect(200));

    it('{ticker: GOOG, columns: [‘close’], start: "2020-03-03", end: "2020-04-03"}', () => request(server)
      .get('/stockdata')
      .query({ file_type: 'csv' })
      .send({ ticker: 'GOOG', columns: ['close'] })
      .expect(200));

    // median # columns
    it(' {ticker: GOOG, columns: [‘close’, ‘volume’], start: "2020-03-03", end: "2020-04-03"}', () => request(server)
      .get('/stockdata')
      .query({ file_type: 'csv' })
      .send({ ticker: 'GOOG', columns: ['close', 'volume'] })
      .expect(200));

    it("{ticker: GOOG, columns: ['close', 'open', 'max', 'min', 'volume'], start: '2020-03-03', end: '2020-04-03'}", () => request(server)
      .get('/stockdata')
      .query({ file_type: 'csv' })
      .send({ ticker: 'GOOG', columns: ['close', 'open', 'max', 'min', 'volume'], file_type: 'csv' })
      .expect(200));

    // testing for file_type
    // 'json'
    it("{ticker: GOOG, columns: ['close', 'open', 'max', 'min', 'volume']}, start: '2020-03-03', end: '2020-04-03'", () => request(server)
      .get('/stockdata')
      .query({ file_type: 'json' })
      .send({ ticker: 'GOOG', columns: ['close', 'open', 'max', 'min', 'volume'] })
      .expect(200));

    // testing for range (['start', 'end'])
    // max date range
    it("{ticker: GOOG, columns: ['close', 'open', 'max', 'min', 'volume']}, start: '1970-01-01', end: '2020-04-03'", () => request(server)
      .get('/stockdata')
      .query({ file_type: 'csv' })
      .send({ ticker: 'GOOG', columns: ['close', 'open', 'max', 'min', 'volume'] })
      .expect(200));
    // min date range
    it("{ticker: GOOG, columns: ['close', 'open', 'max', 'min', 'volume']}, start: '2020-04-03', end: '2020-04-03'", () => request(server)
      .get('/stockdata')
      .query({ file_type: 'csv' })
      .send({ ticker: 'GOOG', columns: ['close', 'open', 'max', 'min', 'volume'] })
      .expect(200));
  });
});
