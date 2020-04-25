const defaultTestValues = require("./defaultTestValues.js");
class GenArray {
  /**
   * @param {Object} itemsObj - if "type" is a primitive,
   * @param {number} arrLength - how long the test array should be. defaults to 5.
   */
  constructor(itemsObj, arrLength = 5) {
    this.arrLength = arrLength;
    this.itemsObj = itemsObj; // object if "items" is not a primitive object
    this.getRandVal = {
      string: () => (Math.random() * 36).toString(36).slice(2),
      number: () => Math.random() * 10,
      integer: () => Math.random() * 10,
      boolean: () => Math.random() > 0.5,
    };
    this.ind = 0;
    this.vals = [
      this.makeRandomArr(this.itemsObj),
      ...defaultTestValues,
      { val: new Array(200).fill("a"), descript: "Array with length 200" },
    ];
    // add to test cases Arrays filled with defaultTestValues
    for (let obj of defaultTestValues) {
      this.vals.push({
        val: new Array(this.arrLength).fill(obj.val),
        descript: `Array of ${this.arrLength} ${obj.descript}`,
      });
    }
  }

  buildBaseObject(propObj, targetObj = {}) {
    // {name: 'sth', school: 'sth'}
    // mimic the specified shape of propObj with specified values filled in
    for (let prop in propObj) {
      if (/^string|number|integer|boolean$/.test(propObj[prop].type)) {
        targetObj[prop] = this.getRandVal[propObj[prop].type]();
        continue;
      }
      if (propObj[prop].type === "object") {
        targetObj[prop] = {};
        this.buildBaseObject(propObj[prop].properties, targetObj[prop]);
        continue;
      }
      if (propObj[prop].type === "array") {
        targetObj[prop] = this.buildArray(propObj[prop].items);
        continue;
      }
    }
    return targetObj;
  }

  buildArray(itemsObj, targetArr = []) {
    if (/^string|number|integer|boolean$/.test(itemsObj.type)) {
      // create an array of primitive values
      targetArr.push(
        this.getRandVal[itemsObj.type](),
        this.getRandVal[itemsObj.type]()
      );
    }
    else if (itemsObj.type === "object") {
      // create an array of a single object
      targetArr.push(this.buildBaseObject(itemsObj));
    }
    else if (itemsObj.type === "array") {
      targetArr.push(this.buildArray(itemsObj.items));
    }
    return targetArr;
  }

  createArrWithArrElems() {
    return [this.buildArray(this.itemsObj.items)];
  }

  createArrWithObjElems() {
    // get the shape of the object
    return [this.buildBaseObject(this.itemsObj.properties)];
  }

  makeRandomArr() {
    if (this.itemsObj.type === "array") {
      return {
        val: this.createArrWithArrElems(this.itemsObj.items),
        descript: `Array of 1 Array`,
      };
    }
    if (this.itemsObj.type === "object") {
      return {
        val: this.createArrWithObjElems(this.itemsObj.properties),
        descript: `Array of 1 Object`,
      };
    }
    return {
      val: new Array(this.arrLength).fill("").map((a) => {
        return this.getRandVal[this.itemsObj.type]();
      }),
      descript: `Array of ${this.arrLength} ${this.itemsObj.type}`,
    };
  }

  next() {
    if (this.ind < this.vals.length) {
      return this.vals[this.ind++];
    }
    return this.makeRandomArr();
  }
}

module.exports = GenArray;
