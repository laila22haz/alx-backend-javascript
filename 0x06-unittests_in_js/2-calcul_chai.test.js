var expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('Test suit', () => {
    it('test calculateNumber with integers', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
    });
    it('test calculateNumber with negative', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
    });
    it('test claculateNumber', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
        expect(calculateNumber('DIVIDE', 1.5, 0)).to.be.equal('Error');
    });
    it('test claculateNumber', () => {
        expect(calculateNumber(1, 1.5, 0)).to.be.equal('Error');
        expect(calculateNumber('hello', 1.5, 0)).to.be.equal('Error');
    });

});
