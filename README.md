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
  - [Initialize `battletest.config.js`](#create-battletest.config.js)
    - [Using an OpenAPI v3.03 Document](#Using-an-OpenAPI-v3.03-Document)
    - [Using an Express-js server file](#Using-an-Express-js-server-file)
  - [Generating test files](#generate-test-files)
  - [Running test suites](#run-test-suites)
  - [Viewing test results](#view-test-results)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

# Installation

```
$ npm install -g battletest
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
* __serverLocation__: This relative path will be used for setup & teardown of the server during the test execution.
* __successCode__: This is the status code the server should return if the server 
* __paths__: This is an object that contains each Path available on the server as the key. 
    * Each Path in turn has one or more __Operation__ (or method) available to it. 

For sample `battletest.config.js`, please see [here](documentation/examples).

### Using an Express-js server file

Express-js server file must export "app" and "server" separately in order for Battletest's parsing logic to introspect the server code.

```
module.exports = { app: app, server: server };
```
Resulting `battletest.config.js` will show the full shape of the 

[**add sample here]

### Using an OpenAPI v3.03 Document

Battletest uses SwaggerParser to validate & parse OpenAPI v3.03 documents.  Battletest does not currently support OpenAPI v2.0 documents.

## Generate Test Files

`$ battletest generate`

<<<<<<< HEAD
will comb the newly created `battletest.config.js` and generate test files under `test/__battletest__`
=======
will parse the newly created `battletest.config.js` and generate test files under `test/__battletest__` in your project's directory
>>>>>>> 2c4101b0d2b865facc8ee43ff10acd1437cf45ef

`$ battletest start`

runs the generated tests via mocha and outputs the results in the terminal. Additional logs can be found under `test/__battletest__/__result__`



`battletest.config.js` specifies the endpoint paths (e.g., '/pet/'), the operations (e.g., 'GET', 'PUT') .

```
module.exports = {
    serverLocation: "./server.js",

}
```

## Run Test Files

```
$ battletest start

$ battletest start <test-file-name>
```

This will instruct [Mocha](https://github.com/mochajs/mocha) to run all tests contained in `__battletest__` folder.  To run a specific test file only, please specify the name of the test file.

Once the test runs, the terminal will 

A __.json file__ containing the result of each testing suite will be saved to `__battletest__/__result__` once a test file has run .json file will show 


## View Test Results

# Contributing
We welcome all contributions & pull requests!  Please see [contributions.md](documentation/contributions.md) for details.

# License


# Authors

Binta Kinteh [@BintaKinteh](https://github.com/BintaKinteh) | Duygu Yigitsoy [@dyigitsoy](https://github.com/dyigitsoy) | Kevin Luo [@LuoKevin](https://github.com/LuoKevin) | Soobin Kim [@soobinkim1](https://github.com/soobinkim1) | Yula Ko [@yulako](https://github.com/yulako)

