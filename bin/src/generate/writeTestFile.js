
function writeTestFile(path, operation, operationObject) {
    const baseScenario = {}; 
    
    const generators = {};
    // loop through parameters
    operationObject.parameters.forEach(param => {
        if (!baseScenario[param.in]) {
            baseScenario[param.in] = {};
            generators[param.in] = {}
        }
        // generators.path.petID = new RandGen("integer")
        generators[param.in][param.name] = new RandGen(param.schema.type);
        baseScenario[param.in][param.name] = generators[param.in][param.name].next(); // initially, normal input
    })

    // loop through request body
    baseScenario['requestBody'] = {};
    generators['requestBody'] = {};
    
    Object.keys(operationObject.requestBody).forEach(contentType => {
        baseScenario['requestBody'][contentType] = {};
        generators['requestBody'][contentType] = {};
        if (contentType === "text/plain") {
            // TO DO: same as 7 - 13; make into a module
        }
        else if (contentType === "application/json" || contentType === "application/xml") {
            buildBody(
                propObj = operationObject.requestBody[contentType].schema,
                baseObj = baseScenario['requestBody'][contentType],
                propName = 'body'
            ); // has filled out baseScenarios and generators
        }
    });
    /**
     *    
     * {
     * path: => 10
     * requestBody: {
        name: => 10
        petType: => 10
        favoriteFoods: => 10
        family: {
            dad: => 10
            siblings: => 10
            mom: => 10 
            } 
        }
     */
    
    // loop through all keys in the generator
        // get a random value for that key
        // assign that random value to the corresponding key in scenario
    ['family']['dad'] = 'randgen value';
    scenario['family']['dad'] = 'randgen value';
    
    let testCode = '';
    for (let i = 0; i < generators.length; i += 1) {
        const scenario = {...baseScenario};
        
        
        testCode += writeSingleTest(scenario);
    }

    baseScenario = {
        path: {
            petID: generators.petID.integer(),
        },
        body: {
            petType: generators.petID.string(),
            favoriteFoods: generators.favoriteFoods.array('string'),
            family: {
                mom: generators.mom.string(),
                dad: generators.dad.string(),
                siblings: {
                    sisters: generators.sisters.array('string'),
                    brothers: generators.brothers.array('string'),
                },
            }       
        }
    }


    //helper function to build template body
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

    const queue = 
        [parameters];
        [(name), (petType), (favoriteFoods), (family)];
        [(family)] 
        [(family, dad)]
        [(family, mom), (family, sibling), (family, dad, property1), (family, dad, property2)]

    // check if key's value is primitive
    lastKeysType = operationObject.parameters[]
    while (lastKeysType !== 'object' ) {

    }

    if typeof queue.shift() === primitive:
        for (let i = 0; i < 10; i ++) {
            // create baseScenario


            // CASE: family - mom
            scenario.requestBody['family']
            // generate scenarios/write tests for name, petType, favoriteFoods
        }
        
    else:
        queue.extend([(family, n) for n in family.keys())])
    

    stringifyCode();
    
    saveTestFile();
}


// BEST:
// it('body':{name: /normalString/, petType: /normalString/ } ) <== normal scenario

// it('body: {name: /negativeNumber/, petType: /normalString/ }') <== test "name"
// it('body: {name: /SQL/, petType: /normalString/ }')
// it('body: {name: /undefined/, petType: /normalString/ }')
// it('body: {name: /null/, petType: /normalString/ }')
// it('body: {name: /randomvalue/, petType: /normalString/ }')
// it('body: {name: /randomvalue/, petType: /normalString/ }')
// it('body: {name: /randomvalue/, petType: /normalString/ }')
// it('body: {name: /randomvalue/, petType: /normalString/ }')
// it('body: {name: /randomvalue/, petType: /normalString/ }')

// it('body: {name: /normalString/, petType: /negativeNumber/ }') <= test "petType"
// it('body: {name: /normalString/, petType: /SQL/ }')
// it('body: {name: /normalString/, petType: /undefined/ }')

// it('body: {name: /overflowString/, petType: /negativeNumber/ }') <== interaction issues

// BETTER: => 500
// WORSE: it('body: {name: "abiafejoajoiejaofjeaf", petType: -38 }')

const writeSingleTest = (scenario) => {
    // TO DO: if requestBody, need to specify content type 
    return `
    it(${}, (done) => {
        let endTime;
        const startTime = Date.now();
        request(serverURL)
          .${this.method.toLowerCase()}('${this.route}')
          .send(${JSON.stringify(
            name: BodyName.string(true), // [SQL, code_script, number, wingding_characters, string_overflow]
            petType: BodyPetType.string(true), // [SQL, code_script, number, wingding_characters, string_overflow]
            petAge: BodyPetAge.integer(true), // [null, undefined, superlong, 0, number]
            favoriteFoods: BodyFavoriteFoods.array("string") // random array of strings
          )})
          .expect(400)
          .end((err, res) => {
            endTime = Date.now();
            const resultData =  {
              request: {
                body: res.request._data,
                query: res.request._query,
              },
              response: {
                status: res.status,
                body: res.body,
              },
              timer: endTime - startTime
            }
            result[this.test.fullTitle()] = resultData;
            done(err);
    
            /* Custom assertions can be inserted here */
    
            done(err);
          });
    })
    
  `
}
