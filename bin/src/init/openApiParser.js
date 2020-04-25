const SwaggerParser = require('@apidevtools/swagger-parser');


/** @description Parses openAPI JSON or YML file and converts into battletest.config.js
 * @async
 * @param {string} api -file path or URL to the OpenAPI
 * @returns {object} a newly created battletest.config.js object
 */
async function openAPIParser(api) {
  const deref = await SwaggerParser.dereference(api);
  console.log(deref);
}


openAPIParser('openAPI-example.yml');
