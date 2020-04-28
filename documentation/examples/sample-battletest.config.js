module.exports = {
  serverLocation: "server.js",
  serverURL: "http://localhost:8000",
  authorization_cookie: null,
  expectedStatusCode: 400,
  paths: {
    "/pet/:petID": {
      GET: {
        parameters: [
          {
            name: "petID",
            in: "path",
            schema: {
              type: "integer",
            },
          },
          {
            name: "lastVisitedDate",
            in: "cookie",
            schema: { type: "string" },
          }
        ],
      },
      PUT: {
        parameters: [
          {
            name: "petID",
            in: "path",
            schema: { type: "integer" },
          },
        ],
        requestBody: {
          "application/json": {
            schema: {
              type: "object", 
              properties: {
                name: {
                  type: "string",
                },
                petType: {
                  type: "string",
                },
                favoriteFoods: {
                  type: "array",
                  items: { type: 
                    "string" 
                  },
                },
                family: {
                  type: "object",
                  properties: {
                    mom: { type: "string" },
                    dad: { type: "string" },
                    siblings: {
                      type: "object",
                      properties: {
                        sisters: { type: "array", items: { 
                          type: "string" 
                        }},
                        brothers: { type: "array", items: { 
                          type: "string" 
                        }},
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
