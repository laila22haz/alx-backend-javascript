const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./1-calcul');

describe('Test suit', () => {
    it('test calculateNumber with integers', () => {
        assert.equal(calculateNumber('SUM', 1, 1), 2);
        assert.equal(calculateNumber('SUBTRACT', 2, 2), 0);
        assert.equal(calculateNumber('DIVIDE', 10, 1), 10);
    });
    it('test calculateNumber with negative', () => {
        assert.equal(calculateNumber('SUBTRACT', -1, -2.3), -1);
        assert.equal(calculateNumber('SUBTRACT', -1.3, -3.7), 2);
    });
    it('test claculateNumber', () => {
        assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0);
        assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0);
        assert.equal(calculateNumber('DIVIDE', 1.5, 0), 'Error');
    });
    it('test claculateNumber', () => {
        assert.equal(calculateNumber(1, 1.5, 0), 'Error');
        assert.equal(calculateNumber('hello', 1.5, 0), 'Error');
    });

});
