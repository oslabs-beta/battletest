module.exports = {
  serverLocation: null,
  serverURL: null,
  authorization_cookie: null,
  expectedStatusCode: 400,
  paths: {
    "/pets": {
      get: {
        parameters: [
          {
            name: "tags",
            in: "query",
            description: "tags to filter by",
            required: false,
            style: "form",
            schema: {
              type: "array",
              items: {
                type: "string"
              }
            }
          },
          {
            name: "limit",
            in: "query",
            description: "maximum number of results to return",
            required: false,
            schema: {
              type: "integer",
              format: "int32"
            }
          }
        ]
      },
      post: {
        requestBody: {
          "application/json": {
            schema: {
              type: "object",
              required: [
                "name"
              ],
              properties: {
                name: {
                  type: "string"
                },
                tag: {
                  type: "string"
                }
              }
            }
          }
        }
      }
    },
    "/pets/{id}": {
      get: {
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of pet to fetch",
            required: true,
            schema: {
              type: "integer",
              format: "int64"
            }
          }
        ]
      },
      delete: {
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of pet to delete",
            required: true,
            schema: {
              type: "integer",
              format: "int64"
            }
          }
        ]
      }
    }
  }
}
        