const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul');

describe('Test suit', () => {
    it('test calculateNumber with integers', () => {
        assert.equal(calculateNumber(1, 1), 2);
        assert.equal(calculateNumber(2, 2), 4);
        assert.equal(calculateNumber(10, 1), 11);
    });
    it('test calculateNumber with negative', () => {
        assert.equal(calculateNumber(-1, -2.3), -3);
        assert.equal(calculateNumber(-1.3, -3.7), -5);
    });
    it('test claculateNumber', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5);
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });

})
