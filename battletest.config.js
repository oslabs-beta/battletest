module.exports = {
  serverLocation: null,
  serverURL: null,
  authorization_cookie: null,
  expectedStatusCode: 400,
  paths: {
    "/getMessages": {
      get: {}
    },
    "/postMessage": {
      post: {
        requestBody: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                post_message: {
                  type: null
                },
                post_password: {
                  type: null
                },
                name: {
                  type: "object",
                  properties: {
                    food: {
                      type: "object",
                      properties: {
                        icecream: {
                          type: null
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/deleteMessage": {
      delete: {
        requestBody: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                post_id: {
                  type: null
                }
              }
            }
          }
        }
      }
    }
  }
}