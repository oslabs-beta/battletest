module.exports = {
  "/": {
    "get": {}
  },
  "/connected": {
    "get": {}
  },
  "/users/:id": {
    "put": {
      "parameters": [{
        "name": "id",
        "in": "path",
        "schema": {
          "type": null
        }
      }],
      "requestBody": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "user": {
                "type": null
              },
              "userInfo": {
                "type": "object",
                "properties": {
                  "username": {
                    "type": "object",
                    "properties": {
                      "userContacts": {
                        "type": "object",
                        "properties": {
                          "userEmail": {
                            "type": null
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
      }
    }
  }
};