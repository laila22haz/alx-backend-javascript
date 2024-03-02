const { expect } = require('chai');
const request = require('request');

describe('Express app', () => {
    it('test index page', (done) => {
        request.get('http://localhost:7865/', (err, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
    it('test the id if it is number', (done) => {
        request.get('http://localhost:7865/cart/123', (err, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 123');
            done();
        });
    });
    it('test id if it is not number', (done) => {
        request.get('http://localhost:7865/cart/hello', (err, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
})
