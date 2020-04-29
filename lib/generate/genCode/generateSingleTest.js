/**
 * @name src/generate/generateSingleTest
 * @description The upper level function "generateSingleTest" calls "buildSupertest", which in turn calls other functions contained in this section, that each provide a particular section of a single testing block.
 */
const resolvePath = (path, scenario) => {
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
};

const resolveHeader = (scenario) => {
  if (!scenario.header) {
    return '';
  }
  const headers = {};
  Object.keys(scenario.header).forEach((prop) => {
    headers[prop] = scenario.header.prop;
  });
  return `.set(${JSON.stringify(headers)})`;
};

const resolveCookie = (scenario) => {
  if (!scenario.cookie) {
    return '';
  }
  const cookies = [];
  Object.keys(scenario.cookie).forEach((prop) => {
    cookies.push(`${prop}=${scenario.cookie.prop}`);
  });
  return `.set('Cookie', ${JSON.stringify(cookies)})`;
};

const resolveQuery = (scenario) => {
  if (!scenario.query) {
    return '';
  }
  let code = '';
  Object.keys(scenario.query).forEach((key) => {
    code += `\n.query({ ${key} : ${scenario.query.key} })`;
  });
  return code;
};

const resolveRequestBody = (scenario) => {
  if (!scenario.requestBody) {
    return '.send()';
  }
  const contentType = Object.keys(scenario.requestBody)[0];
  return `\n    .type('${contentType}')\n    .send(${JSON.stringify(scenario.requestBody[contentType].body)})`;
};

const buildSupertest = (path, operation, scenario) => {
  const code = `
  request(serverURL)
    .${operation.toLowerCase()}('${resolvePath(
  path,
  scenario,
)}')${resolveHeader(scenario)}${resolveQuery(scenario)}${resolveCookie(
  scenario,
)}${resolveRequestBody(scenario)}`;
  return code;
};

const generateSingleTest = (path, operation, scenario, testname) => `
    it('${testname}', function(done){
        let endTime;
        const startTime = Date.now();
        ${buildSupertest(path, operation, scenario)}
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})`;

module.exports = generateSingleTest;
