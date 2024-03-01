const { it, describe } = require('mocha');
const chai = require('chai');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('Test the promise', () => {
    it('Promise test case', () => {
        const result = getPaymentTokenFromAPI();
        expect(result).to.be.instanceOf(Promise);
    });
    it('if it is true', () => {
        getPaymentTokenFromAPI(true)
        .then((result) => {
            expect(result.data).to.be.equal('Successful response from the API');
            done();
        });
    });
    it('if it is false', () => {
        getPaymentTokenFromAPI(false)
        .then((result) => {
            expect(result).to.equal('');
        });
    });
});

