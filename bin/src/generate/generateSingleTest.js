/**
 * @name src/generate/generateSingleTest
 *
 */
const resolvePath = (path, scenario) => {
  if (!scenario.path) {
    return path;
  }
  // ex. "/pet/:petID" should incorporate the actual test value, e.g., "/pet/3"
  Object.keys(scenario.path).forEach((prop) => {
    const regex = new RegExp(`(:(${prop}))`);
    path.replace(regex, scenario.path.prop);
  });
  return path;
};

const resolveHeader = (scenario) => {
  if (!scenario.header) {
    return ``;
  }
  const headers = {};
  Object.keys(scenario.header).forEach((prop) => {
    headers[prop] = scenario.header.prop;
  });
  return `.set(${JSON.stringify(headers)})`;
};

const resolveCookie = (scenario) => {
  if (!scenario.cookie) {
    return ``;
  }
  const cookies = [];
  Object.keys(scenario.cookie).forEach((prop) => {
    cookies.push(`${prop}=${scenario.cookie.prop}`);
  });
  return `.set('Cookie', ${JSON.stringify(cookies)})`;
};

const resolveQuery = (scenario) => {
  if (!scenario.query) {
    return ``;
  }
  const code = "";
  Object.keys(scenario.prop).forEach((key) => {
    code = code + `\n.query({ ${key} : ${scenario.prop.key} })`;
  });
  return code;
};

const resolveRequestBody = (scenario) => {
  if (!scenario.requestBody) {
    return `.send()`;
  }
  const contentType = Object.keys(scenario.requestBody)[0];
  return `\n.type('${contentType}')\n.send(${scenario.requestBody[contentType]["body"]})`;
};

const buildSupertest = (path, operation, scenario) => {
  let code = `
  request(serverURL)
    .${operation.toLowerCase()}(${resolvePath(path, scenario)})${resolveHeader(
    scenario
  )}${resolveQuery(scenario)}${resolveCookie(scenario)}${resolveRequestBody(
    scenario
  )}
  `;
  return code;
};

const generateSingleTest = (path, operation, scenario) => {
  // TO DO: if requestBody, need to specify content type
  // specify

  return `
    it(${scenario.randomization}, (done) => {
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
            done(err);
    
            /* Custom assertions can be inserted here */
    
            done(err);
          });
    })
  `;
};

const body = {
  name: "knzh9qeofx",
  petType: "j997urebie",
  favoriteFoods: [
    "andteftlio",
    "x55e0gsx5w",
    "zu9pd8g3lx",
    "31j87j3gt4",
    "pa06y5fisg",
  ],
};
const scenario = {
  path: { petID: 5, ownerID: 5 },
  requestBody: { "application/json": { body: body } },
};

//console.log(generateSingleTest("/pet/:petID", "PUT", scenario));

module.exports = generateSingleTest;
