const { expect } = require('chai');
const request = require('request');

describe('Express app', () => {
    it('test index page', (done) => {
        request.get('http://localhost:7865/', (err, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        })
    })
})
