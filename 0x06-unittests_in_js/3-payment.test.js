const sinon = require('sinon');
const expect = require('chai');
const { it, describe } = require('mocha');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Test suit', () => {
    it('spy the calculateNumber', () => {
        const spy_calcul = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(spy_calcul.calledOnce).to.be.true;
        expect(spy_calcul.calledWith('SUM', 100, 20)).to.be.true;
        spy_calcul.restore();
    });
});