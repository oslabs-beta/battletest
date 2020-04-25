# Battletest

A CLI module for npm that auto-generates endpoint tests.

# Installation

`$ npm install -g battletest`

Install with the `-save-dev` flag in place of the `-g` flag for a local per project installation

# Quick Start
Battletest can optionally parse either an Express server file or OpenAPI specification to create a predesigned config. If no file is given then a default configuration file will be used.

`$ battletest init my-file`

creates a new `battletest.config.js` in your project's root directory.

`$ battletest generate`

will parse the newly created `battletest.config.js` and generate test files under `test/__battletest__` in your project's directory

`$ battletest start`

runs the generated tests via mocha and outputs the results in the terminal. Additional logs can be found under `test/__battletest__/__result__`




