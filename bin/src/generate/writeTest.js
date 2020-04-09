const fs = require('fs');

const config = require('../../default.config.js');

const { server_location, PORT, model_location, functionsForTesting } = config;

const testTemplate = `
  const request = require('supertest');
  const chai = require('chai');
  const expect = chai.expect;
  const server_location = 'http://localhost:${PORT}';
  
  describe('/stockdata', () => {

    describe('${functionsForTesting[0].request_type}', () => {
      it('${functionsForTesting[0].vectors[0].section}: {${functionsForTesting[0].vectors[0].key}: ${functionsForTesting[0].vectors[0].payload_default}}', (done) => {
        request(server_location)
          .get('${functionsForTesting[0].route}')
          .send({${functionsForTesting[0].vectors[0].key}: '${functionsForTesting[0].vectors[0].payload_default}'})
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.have.property('${functionsForTesting[0].vectors[0].key}');
            done(err);
          });
      });
    });
  });
`;

fs.writeFileSync(
  '/Users/bintakinteh/Desktop/Codesmith/Production-Project/battletest/bin/src/generate/testFile.js',
  testTemplate,
  (err) => {
    if (err) throw err;
  },
);
