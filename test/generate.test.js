const generate = require('../bin/cmds/generate.js');
describe('generate.js', () => {
    const config = require('./battletest.config.js')
    generate(config);

});