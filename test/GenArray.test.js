const expect = require('chai').expect;
const GenArray = require('../bin/src/generate/GenArray.js');

xdescribe('GenArray', () => {
    xit('should return an array with strings', () => {

    })
    it('should return an array with object elements', () => {
        const test = new GenArray({
            type: 'object',
            properties: {
                name: {type: 'string'},
                family: {
                    type: 'object',
                    properties: {
                        dad: { type: 'string' },
                        mom: { type: 'string' }
                    }
                }
            }
        });
        console.log(JSON.stringify(test.next()));
    });
    it('should return an array with string elements', () => {
        const test = new GenArray({ type: 'string'});
        const result = test.next();
        expect(Array.isArray(result.val)).to.equal(true);
        expect(typeof(result.val[0])).to.equal('string');
    });

    xit('should return an array with number elements', () => {
        const test = new GenArray({ type: 'number'});
        const result = test.next();
        expect(Array.isArray(result.val)).to.equal(true);
        expect(typeof(result.val[0])).to.equal('number');
    });

    xit('should return an array of nulls', () => {
        // If the order of values in defaultTestValues changes, 
        const test = new GenArray({type: 'string'});
        let i = 0;
        while (i < 15) {
            console.log(test.next());
            i += 1;
        }
        const result = test.next();
        expect(Array.isArray(result.val)).to.equal(true);
        expect(result.val[0]).to.equal(null); 
    });
})


