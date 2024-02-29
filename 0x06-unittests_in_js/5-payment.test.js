const sinon = require('sinon');
const { expect } = require('chai');
const { it, describe } = require('mocha');
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('Test suit', () => {
    let spyBoy;
    beforeEach(() => {
        spyBoy = sinon.spy(console, 'log');
    });
    afterEach(() => {
        sinon.restore();
    });
    it('first check', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spyBoy.calledWith('The total is: 120')).to.be.true;
        expect(spyBoy.calledOnce).to.be.true;
    });
    it('second check', () => {
        sendPaymentRequestToApi(10, 10);
        expect(spyBoy.calledWith('The total is: 20')).to.be.true;
        expect(spyBoy.calledOnce).to.be.true;
    });
});
