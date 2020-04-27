module.exports = {
<<<<<<< HEAD
  serverLocation: "../server.js",
  serverURL: "http://localhost:8000",
  failStatusCode: 500,
=======
  serverLocation: '../server.js',
  serverURL: 'http://localhost:8000',
>>>>>>> 2c4101b0d2b865facc8ee43ff10acd1437cf45ef
  authorization_cookie: null,
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
                        sisters: { type: 'string' },
                        brothers: { type: 'string' },
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
