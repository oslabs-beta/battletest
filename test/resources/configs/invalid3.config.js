module.exports = {
  // battletest: for a guide on filling out battletest.config.js, please see https://github.com/oslabs-beta/battletest.
  serverLocation: null,
  serverURL: null,
  authorization_cookie: null,
  expectedStatusCode: 400,
  paths: {
    //   "/pet/:petID": {
    //     GET: {
    //       parameters: [
    //         {
    //           name: "petID",
    //           in: "path",
    //           schema: {
    //             type: "integer",
    //           },
    //         },
    //         {
    //           name: "lastVisitedDate",
    //           in: "cookie",
    //           schema: { type: "string" },
    //         },
    //         {
    //           name: "token",
    //           in: "header",
    //           schema: {
    //             type: "array",
    //             items: {
    //               type: "integer",
    //             },
    //           },
    //         },
    //       ],
    //     },
    //     PUT: {
    //       parameters: [
    //         {
    //           name: "petID",
    //           in: "path",
    //           schema: { type: "integer" },
    //         },
    //       ],
    //       requestBody: {
    //         "application/json": {
    //           schema: {
    //             type: "object", // can also be an array
    //             properties: {
    //               name: {
    //                 type: "string",
    //               },
    //               petType: {
    //                 type: "string",
    //               },
    //               favoriteFoods: {
    //                 type: "array",
    //                 items: "string",
    //               },
    //               family: {
    //                 type: "object",
    //                 properties: {
    //                   mom: { type: "string" },
    //                   dad: { type: "string" },
    //                   siblings: {
    //                     type: "object",
    //                     properties: {
    //                       sisters: { type: "array", items: "string" },
    //                       brothers: { type: "array", items: "string" },
    //                     },
    //                   },
    //                 },
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
  },
};
