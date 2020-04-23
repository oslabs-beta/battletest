const expect = require('chai').expect;
const GenArray = require('../bin/src/generate/GenArray.js');

describe('GenArray', () => {
    it('should return an array with string elements', () => {
        const test = new GenArray('string');
        const result = test.next();
        expect(Array.isArray(result.val)).to.equal(true);
        expect(typeof(result.val[0])).to.equal('string');
    });

    it('should return an array with number elements', () => {
        const test = new GenArray('number');
        const result = test.next();
        expect(Array.isArray(result.val)).to.equal(true);
        expect(typeof(result.val[0])).to.equal('number');
    });

    it('should return an array of nulls', () => {
        // If the order of values in defaultTestValues changes, 
        const test = new GenArray('string');
        let i = 0;
        while (i < 15) {
            test.next();
            i += 1;
        }
        const result = test.next();
        expect(Array.isArray(result.val)).to.equal(true);
        expect(result.val[0]).to.equal(null); 
    });
})


