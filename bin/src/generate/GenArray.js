const defaultTestValues = require('./defaultTestValues.js');
class GenArray {
    /**
     * @param {string} itemType 
     * @param {integer} arrLength - how long the test array should be. defaults to 5. 
     */
    constructor(itemType, arrLength = 5) {
        this.arrLength = arrLength;
        this.itemType = itemType;

        this.ind = 0;
        this.vals = [
            this.makeRandomArr(itemType),
            ...defaultTestValues,
            { val: new Array(200).fill('a'), descript: 'Array with length 200' },
        ];
        for (let obj of defaultTestValues) {
            console.log(obj);
            this.vals.push({
                val: new Array(this.arrLength).fill(obj.val),
                descript: `Array of ${this.arrLength} ${obj.descript}`
            })
        }
    }
    makeRandomArr() {
        const func = {
            string: () => (Math.random() * 36).toString(36),
            number: () => Math.random() * 10,
            boolean: () => Math.random() > 0.5
        }
        return {
            val: new Array(this.arrLength).fill('').map(a => { return func[this.itemType]() }),
            descript: `Array of ${this.arrLength} ${this.itemType}`
        }
    }
    next() {
        if (this.ind < this.vals.length) { return this.vals[this.ind++]; }
        return this.makeRandomArr();
    }
}

module.exports = GenArray;