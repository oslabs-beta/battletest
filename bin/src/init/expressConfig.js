module.exports = (pathsObject) => `module.exports = {
    // battletest: for a guide on filling out battletest.config.js, please see https://github.com/oslabs-beta/battletest.
    serverLocation: null,
    serverURL: null,
    authorization_cookie: null,
    expectedStatusCode: 400,
    paths: {
        ${pathsObject}
    },
  };
  `