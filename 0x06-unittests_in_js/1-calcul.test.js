const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./1-calcul');

describe('Test suit', () => {
    it('test calculateNumber with integers', () => {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('test calculateNumber with negative', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('test claculateNumber', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        assert.equal(calculateNumber('DIVIDE', 1.5, 0), 'Error');
    });
    it('test claculateNumber', () => {
        assert.equal(calculateNumber(1, 1.5, 0), 'Error');
        assert.equal(calculateNumber('hello', 1.5, 0), 'Error');
    });

});
