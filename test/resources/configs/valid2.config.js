module.exports = {
  // battletest: for a guide on filling out battletest.config.js, please see https://github.com/oslabs-beta/battletest.
  serverLocation: './server.js',
  serverURL: 'http://localhost:3000',
  authorization_cookie: null,
  expectedStatusCode: 400,
  paths: {
    '/pet/:petID': {
      GET: {
        parameters: [
          {
            name: 'petID',
            in: 'path',
            schema: {
              type: 'integer',
            },
          },
          {
            name: 'lastVisitedDate',
            in: 'cookie',
            schema: { type: 'string' },
          },
          {
            name: 'token',
            in: 'header',
            schema: {
              type: 'integer',
            },
          },
        ],
      },
      PUT: {
        parameters: [
          {
            name: 'petID',
            in: 'path',
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          'application/json': {
            schema: {
              type: 'object', // can also be an array
              properties: {
                name: {
                  type: 'string',
                },
                petType: {
                  type: 'string',
                },
                favoriteFoods: {
                  type: 'array',
                  items: { type: 'string' },
                },
                family: {
                  type: 'object',
                  properties: {
                    mom: { type: 'string' },
                    dad: { type: 'string' },
                    siblings: {
                      type: 'object',
                      properties: {
                        sisters: { type: 'array', items: { type: 'string' } },
                        brothers: { type: 'array', items: { type: 'string' } },
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
};
