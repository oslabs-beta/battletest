/**
 * @name src/generate/generateSingleTest
 * @description The upper level function "generateSingleTest" calls "buildSupertest", which in turn calls other functions contained in this section, that each provide a particular section of a single testing block.
 * @param {String} path - URL for the test server
 * @param {String} operation - Method for the endpoint. Ex. "get", "put", "post"
 * @param {Object} scenario - Contains information about the test data being used. Each scenario is a variation of the base scenario, with one field exchanged with an unexpected data type.
 * @param {String} testname - Created by "buildTestFile"
 */

function generateSingleTest(path, operation, scenario, testname, expectedStatusCode) {
  return `
    it('${testname}', function(done){
        let endTime;
        const startTime = Date.now();
        ${buildSupertest(path, operation, scenario)}
    .expect(${expectedStatusCode})
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
      /* Custom assertions can be inserted here */
      done(err);
  });
  })`;
}

function resolvePath(path, scenario) {
  if (!scenario.path) {
    return path;
  }
  // ex. "/pet/:petID" should incorporate the actual test value, e.g., "/pet/3"
  Object.keys(scenario.path).forEach((prop) => {
    const regex = new RegExp(`(:${prop})`);
    path = path.replace(regex, scenario.path[prop]);

    const regex2 = new RegExp(`{\\s*${prop}\\s*}`);
    path = path.replace(regex2, scenario.path[prop]);
  });
  return path;
}

function resolveHeader(scenario) {
  if (!scenario.header) {
    return '';
  }
  const headers = {};
  Object.keys(scenario.header).forEach((prop) => {
    headers[prop] = scenario.header.prop;
  });
  return `.set('${JSON.stringify(headers)}')`;
}

function resolveCookie(scenario) {
  if (!scenario.cookie) {
    return '';
  }
  const cookies = [];
  Object.keys(scenario.cookie).forEach((prop) => {
    cookies.push(`${prop}=${scenario.cookie.prop}`);
  });
  return `.set('Cookie', '${JSON.stringify(cookies)}')`;
}

function resolveQuery(scenario) {
  if (!scenario.query) {
    return '';
  }
  let code = '';
  Object.keys(scenario.query).forEach((key) => {
    code += `\n.query({ ${key} : '${scenario.query[key]}' })`;
  });
  return code;
}

function resolveRequestBody(scenario) {
  if (!scenario.requestBody) {
    return '.send()';
  }
  const contentType = Object.keys(scenario.requestBody)[0];
  return `\n    .type('${contentType}')\n    .send('${JSON.stringify(scenario.requestBody[contentType].body)}')`;
}

function buildSupertest(path, operation, scenario) {
  const code = `
  request(serverURL)
    .${operation.toLowerCase()}('${resolvePath(path, scenario)}')${resolveHeader(scenario)}${resolveQuery(scenario)}${resolveCookie(scenario)}${resolveRequestBody(scenario)}`;
  return code;
}

module.exports = generateSingleTest;
