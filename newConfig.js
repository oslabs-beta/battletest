module.exports = {
  serverLocation: '../server.js',
  serverURL: 'http://localhost:8000',
  authorization_cookie: null,
  paths: {
    '/pet/:petID': {
      GET: {
        parameters: [{
            name: 'id',
            in: 'params',
            schema: {
              type: 'array',
              items: {
                type: 'integer',
              },
            },
          },
          {
            name: 'lastVisitedDate',
            in: 'cookie',
            schema: {
              type: 'string',
            },
          },
          {
            name: 'token',
            in: 'header',
            schema: {
              type: 'array',
              items: {
                type: 'integer',
              },
            },
          },
        ],
      },
      PUT: {
        parameters: [{
          name: 'petID',
          in: 'path',
          schema: {
            type: 'integer',
          },
        }, ],
        requestBody: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                petType: {
                  type: 'string'
                },
                favoriteFoods: {
                  type: 'array',
                  items: 'string'
                },
              },
            },
          },
        },
      },
    },
  },
};