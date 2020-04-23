# Battletest

A CLI module for npm that auto-generates endpoint tests.

## Installation

`npm install battletest -g`

Install with the -save-dev flag in place of the -g flag for a local per project basis

## Intializing Battletest in your project

`battletest init`

If you installed the module globally. (For local installs, run using npx battletest init)

## Running Battletest

fill out the generated skeleton config file with the following specifications


Category 1: Needed information for running battletest

    server_location: //file where your project's server is being run
    PORT:   //PORT number for your server
    model_location: //file(s) for connecting to an external database

Category 2: Options for the developer

    report_setting: {   //settings for the report generated from running the tests
        showAllResponses: false, //showing all the responses of all tests
    },
    //(Flesh this out later!)

Category 3: Test cases with endpoints/functions to test
    
    functionsForTesting: [  //array of tests to be ran on specified endpoints
        
            {
                route_group: //stretch idea: group common testing routes together
                route: '/api/data' // endpoint route,
                method: 'GET' // HTTP request type
                vectors: [  //Array of parameter objects to tailor the request object
                    {
                        section: 'body', //property of the request object
                        rule: 'choice', //rule specified by battletest on how to generate the request
                        key: 'data', //property name to attach to the section
                        payload: ['val1','val2'] //value or values to assign to the key
                        payload_default: [['val1']], //default values to always include as a test scenario
                        payload_default_only: true //if set, then only the default value will be tested

                    }
                ]
            }
        
    ]

Possible Sections:
- 'params'
- 'query'
- 'cookies'
- 'headers'
    - 'Content-Type'
    - 'Content-Length'
    - 'Host'
    - 'Accept'
    - 'Accept-Encoding'
    - 'Connection'
- 'body'

Vector rules:
- 'exist': // stretch
- 'choose_one':
- 'choose_many':
- 'choose_range':
- 'choose_each':

"performance warning" tags on how to specify vector rules