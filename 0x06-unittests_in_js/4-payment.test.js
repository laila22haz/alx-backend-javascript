const sinon = require('sinon');
const { expect } = require('chai');
const { it, describe } = require('mocha');
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('Test suit', () => {
    const check = sinon.spy(console, 'log');
    it('spy the calculateNumber', () => {
        const stub_calcul = sinon.stub(Utils, 'calculateNumber');
        stub_calcul.withArgs('SUM', 100, 20).returns(120)
        sendPaymentRequestToApi(100, 20);
        expect(check.calledOnce).to.be.true;
        expect(console.log('The total is: 120')).to.be.all;
        check.restore();
        stub_calcul.restore();
    });
});
