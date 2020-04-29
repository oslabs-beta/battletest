module.exports = {
  /**
     * @name parameters
     * @description deconstructs and stringifys an object with information involving the test
     */
  parameters: (fieldKey, nameKey, descript) => JSON.stringify({ [fieldKey]: { [nameKey]: descript } }),
  /**
   * @name requestBody
   * @description builds the full path leading to the requestBody
   */
  requestBody: (mapArr, descript) => {
    const title = mapArr.reverse().reduce((obj, key, i) => {
      if (i === 0) {
        obj[key] = descript;
        return obj;
      }
      return { [key]: obj };
    }, {});
    return JSON.stringify(title);
  },
};
