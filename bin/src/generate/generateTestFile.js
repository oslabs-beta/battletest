const generateSingleTest = require('./generateSingleTest.js');
const generateDescribe = require('./generateDescribe.js');
const saveTestFile = require('./saveTestFile.js');
const buildBody = require('./buildBody.js');

function writeTestFile(path, operation, operationObject) {
    const baseScenario = {}; 
    const generators = {};

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
    
    let testCode = '';
    for (let i = 0; i < generators.length; i += 1) {
        const scenario = {...baseScenario};
        
        
        testCode += generateSingleTest(path, operation, serverURL, scenario);
    }
    
    const testFile = generateDescribe(path, operation, testCode);
    saveTestFile(path, operation, testFile);
}

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
// ['family']['dad'] = 'randgen value';
// scenario['family']['dad'] = 'randgen value';
    

/**
 *      baseScenario = {
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
 */



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