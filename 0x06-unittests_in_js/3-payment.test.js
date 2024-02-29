const sinon = require('sinon');
const expect = require('chai');
const { it, describe } = require('mocha');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Test suit', () => {
    it('spy the calculateNumber', () => {
        var spy_calcul = sinon.spy(Utils, 'calculateNumber');
        var totalAmount = 100;
        var totalShipping = 20;
        sendPaymentRequestToApi(totalAmount, totalShipping);
        expect(spy_calcul.calledOnce).to.be.true;
        expect(spy_calcul.calledWith('SUM', 1, 3)).to.be.true;
        spy_calcul.restore();
    });
});