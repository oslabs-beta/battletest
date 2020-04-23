module.exports = {
    parameters: (fieldKey, nameKey, descript) => {
        return JSON.stringify({[fieldKey] : {[nameKey]: descript}})
    }, 
    requestBody: (mapArr, descript) => {
        const title = mapArr.reverse().reduce((obj, key, i) => {
            if (i === 0) { 
                obj[key] =  descript;
                return obj;
            }
            return {[key]: obj}
        }, {})
        return JSON.stringify(title);
    }
}

