const fs = require('fs');
const path = require('path');
const SwaggerParser = require("@apidevtools/swagger-parser");

const configLocation = path.resolve(__dirname, 'battletest.json');

SwaggerParser.validate(fs.readFileSync(configLocation), (err, config) => {
    console.log(err)
    console.log(config)
});


