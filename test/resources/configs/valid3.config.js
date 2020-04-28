module.exports = {
  serverLocation: 'sampleServer.js',
  serverURL: 'http://localhost:3434',
  authorization_cookie: null,
  expectedStatusCode: 400,
  paths: {
    '/getMessages': {
      get: {},
    },
    '/postMessage': {
      post: {
        requestBody: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                post_message: {
                  type: 'string',
                },
                post_password: {
                  type: 'string',
                },
                name: {
                  type: 'object',
                  properties: {
                    food: {
                      type: 'object',
                      properties: {
                        icecream: {
                          type: 'string',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/deleteMessage': {
      delete: {
        requestBody: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                post_id: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  },
};
