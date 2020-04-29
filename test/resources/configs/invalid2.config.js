module.exports = {
  // battletest: for a guide on filling out battletest.config.js, please see https://github.com/oslabs-beta/battletest.
  serverLocation: null,
  serverURL: null,
  authorization_cookie: null,
  expectedStatusCode: 400,
  paths: {
    '/stockdata': {
      get: {
        requestBody: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                ticker: {
                  type: null,
                },
              },
            },
          },
        },
      },
      post: {
        requestBody: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                ticker: {
                  type: null,
                },
              },
            },
          },
        },
      },
    },

  },
};
