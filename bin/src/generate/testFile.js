describe('/stockdata', () => {
  describe('GET', () => {
    it('body: {body: ticker: GOOG}', (done) => {
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
