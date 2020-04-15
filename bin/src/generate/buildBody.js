const buildBody = (propObj, baseObj, genObj, propName) => {
    //if the type is primitive
    if(propObj.type !== 'object' && propObj.type !== 'array' ){
        genObj[propName] = new RandGen(propObj.type);
        baseObj[propName] = generators.requestBody[propName].next();
        return;
    }
    baseObj[propName] = {};
    genObj[propName] = {};
    if(propObj.type === 'array'){
        genObj[propName] = new RandGen(propObj.type, propObj.items);
        baseObj[propName] = generators.requestBody[propName].next();
        return;
    }
    Object.keys(propObj.properties).forEach((key) => {
        buildBody(propObj.properties[key], baseObj[propName], genObj[propName], key);
    });
}

module.exports = buildBody;