/**
 * @name src/generate/generateSingleTest
 * 
 */
const resolvePath = () => {
  if (!scenario.path) { return path; }
  // ex. "/pet/:petID" should incorporate the actual test value, e.g., "/pet/3"
  Object.keys(scenario.path).forEach(prop => {
    const regex = new RegExp(`(:(${prop}))`);
    path.replace(regex, scenario.path.prop);
  });
  return path;
}

const resolveHeader = () => {
  if (!scenario.header) { return ``; }
  const headers = {};
  Object.keys(scenario.header).forEach(prop => {
    headers[prop] = scenario.header.prop;
  });
  return `
    \n .set(${JSON.stringify(headers)})
  `
}

const resolveCookie = () => {
  if (!scenario.cookie) { return ``; }
  const cookies = [];
  Object.keys(scenario.cookie).forEach(prop => {
    cookies.push(`${prop}=${scenario.cookie.prop}`);
  })
  return `
    \n .set('Cookie', ${cookies})
  `
}

const resolveQuery = () => {
  if (!scenario.query) {
    return ``
  }
  const code = '';
  Object.keys(scenario.prop).forEach(key => {
    code = code + `\n .query({ ${key} : ${scenario.prop.key } })`;
  });
  return code;
}

const resolveRequestBody = () => {
  if (!scenario.requestBody) {
    return `
      \n .send()
    `
  }
  return `
    .type(${Object.keys(scenario.requestBody)})
    \n .send(${scenario.requestBody})
  `
}

const buildSupertest = (scenario, path) => {
  let code = `
  request(serverURL)
    .${operation.toLowerCase()}(${resolvePath()})
    ${resolveHeader()}
    ${resolveQuery()}
    ${resolveCookie()}
    ${resolveRequestBody()}
  `;
  return code;
}

module.exports = (path, operation, serverURL, scenario) => {
    // TO DO: if requestBody, need to specify content type 
    // specify 

    return `
    it(${scenario.randomization}, (done) => {
        let endTime;
        const startTime = Date.now();
        ${buildSupertest(scenario, path)}
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