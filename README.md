# Battletest.js

<!-- [![Build Status](https://travis-ci.com/oslabs-beta/battletest.svg?branch=dev)](https://travis-ci.com/oslabs-beta/battletest)
[![NPM Downloads](https://img.shields.io/npm/dm/battletest.svg?style=flat)](https://npmcharts.com/compare/battletest?minimal=true)
[![NPM Version](http://img.shields.io/npm/v/battletest.svg?style=flat)](https://www.npmjs.org/package/battletest)
[![Install Size](https://packagephobia.now.sh/badge?p=battletest)](https://packagephobia.now.sh/result?p=battletest) -->

Command-line tool for auto-generating Node.js endpoint test suites.  Faster test writing, happier developers :sunglasses:. 

[gif here - (1) type battletest init, (2) type battletest generate, (3) type battletest start, (4) show html report generated]

Battletest will read a configuration file (`battletest.config.js`) containing the shape of the expected HTTP request for each endpoint/method, and output for each endpoint/method a testing suite that leverages [Mocha](https://github.com/mochajs/mocha), [Chai](https://github.com/chaijs/chai) & [Supertest](https://github.com/visionmedia/supertest) to test how the server handles requests containing unexpected data types.

Battletest can also parse a [express-js](https://github.com/expressjs/express) server file or a [OpenAPI v3.03](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md) document to prepopulate most (express-js server file) or all (OpenAPI document) of `battletest.config.js`.

- [Installation](#Installation)
- [Getting Started](#getting-started)
  - [Initialize `battletest.config.js`](#initialize-battletest.config.js)
    - [Using an OpenAPI Document](#Using-an-OpenAPI-Document)
    - [Using an Express-js server file](#Using-Express-js-server-file)
  - [Generating test files](#generate-test-files)
  - [Running tests](#run-test-suites)
  - [Viewing test results](#view-test-results)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)


# Installation

```
$ npm install -g battletest

$ npm install --save-dev battletest
```

Install with the `--save-dev` flag in place of the `-g` flag for a local project-specific  installation.

# Getting Started
## Initialize `battletest.config.js`

```
$ battletest init

$ battletest init <server.js>
$ battletest init <petstore.yaml>
$ battletest init <petstore.json>
```

This creates a new `battletest.config.js` in your project's root directory.  

Battletest can optionally parse either an Express-js server.js file or OpenAPI specification to create a prepopulated `battletest.config.js`. If a file path is not specified, a skeleton configuration file will be created.

`battletest.config.js` generally follows [OpenAPI v3.03](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md) to define endpoints, methods and expected data type.
* __serverLocation__: Relative path to the server.js file.  This path will be used for setup & teardown of the server during the test execution, as provided in `testSetup.js`.  
* __expectedStatusCode__: This is the status code the server should return if the server has correctly processed the client's malformed request, i.e. 400.  
* __paths__: This is an object that contains each Path available on the server as the key. 
    * Each Path in turn has one or more __Operation__ (or method) available to it. 

```js
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
```


For more sample `battletest.config.js`, please see [here](documentation/examples).

[↥Back to top](#Battletest.js)

### Using Express-js server file 

Express-js server file must export "app" and "server" separately in order for Battletest's parsing logic to introspect the server code.

```js
module.exports = { app, server };
```
Resulting `battletest.config.js` will show the full shape of the request, with expected data types noted as "null". __User needs to specify the expected data type for each request field__, along with __serverLocation__ and __serverURL__. Please see sample output [here](documentation/examples/expressParser-battletest.config.js).

```js  
// sample Path object from battletest.config.js outputed from expressParser

module.exports = {
  serverLocation: null, // <-- user to specify
  serverURL: null, // <-- user to specify
  authorization_cookie: null, // <-- user to specify
  expectedStatusCode: 400,
  paths: {
    "/postMessage": {
      post: {
        requestBody: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                post_message: {
                  type: null // <-- user to specify
                },
                post_password: {
                  type: null // <-- user to specify
                }
              }
            }
          }
        }
      }
    },
}
```
[↥Back to top](#Battletest.js)

### Using an OpenAPI Document 
Battletest uses SwaggerParser to validate & parse OpenAPI v3.03 documents. As OpenAPI documents specify the expected data type for each request field, resulting `battletest.config.js` will have been completedly populated other than __serverLocation__ and __serverURL__ for the dev server. Please see sample output [here](documentation/examples/openAPIparser-battletest.config.js). Battletest does not currently support OpenAPI v2.0 documents.

```js
// sample battletest.config.js output from an OpenAPI v.3.03 Document

module.exports = {
  serverLocation: null, // <-- user to specify
  serverURL: null, // <-- user to specify
  authorization_cookie: null, // <-- user to specify
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
    }
  }
```
[↥Back to top](#Battletest.js)

## Generate Test Files
```
$ battletest generate

$ battletest generate <endpoint-name>
```

This will parse the newly created `battletest.config.js` and generate test files under `__battletest__` in your project's directory.  To only generate tests for a particular endpoint, please press 

## Running Tests
```
$ battletest start

$ battletest start <test-file-name>
```

Please ensure that your server file exports the server using `module.exports = { server }`.  This ensures that ` testSetup.js` can launch and delete 

This will instruct [Mocha](https://github.com/mochajs/mocha) to run all tests contained in `__battletest__` folder.  To run a specific test file only, please specify the name of the test file.

Once the test runs, the terminal will 

A __.json file__ containing the result of each testing suite will be saved to `__battletest__/__result__` once a test file has run .json file will show 


## View Test Results
To Be Updated

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

[↥Back to top](#Battletest.js)

# Credits

Binta Kinteh [@BintaKinteh](https://github.com/BintaKinteh) | Duygu Yigitsoy [@dyigitsoy](https://github.com/dyigitsoy) | Kevin Luo [@LuoKevin](https://github.com/LuoKevin) | Soobin Kim [@soobinkim1](https://github.com/soobinkim1) | Yula Ko [@yulako](https://github.com/yulako)

[↥Back to top](#Battletest.js)
# License
