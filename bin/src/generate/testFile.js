const request = require('supertest');
const chai = require('chai');

const { expect } = chai;
const server_location = 'http://localhost:8000';

describe('/stockdata', () => {
  describe('GET', () => {
    it('body: {ticker: GOOG}', (done) => {
      request(server_location)
        .get('/stockdata')
        .send({ ticker: 'GOOG' })
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.have.property('ticker');
          done(err);
        });
    });
  });
});
