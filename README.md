# Battletest

A CLI module for npm that auto-generates tests based on user specified parameters.

## Installation

`npm install battletest`

Install with the -g flag for a global installation

## Intializing Battletest in your project

`npx battletest init`

or

`battletest init`

if you installed the module globally

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
                        payload_median_size: 2 //if set or range rule is selected, size of the assigned value
                        payload_default: [['val1']], //default values to include in the payload
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
