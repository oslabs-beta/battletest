/**
 * @name bin/cmds/init
 * @description execute "battletest init" by creating "__battletest__" folder and battletest.config.js
 * @param {null} undefined
 * 
 */

const fs = require('fs');
const path = require('path');

const configFile = `
// Full user guide is available at https://github.com/oslabs-beta/battletest.

module.exports = {
    server_location: null, // Location of the server file.  This file will be kicked up 
    serverURL: null, // URL for the dev server, to which test requests will be sent.
    routesForTesting: [ // List the routes to be tested & details for each route.
        {
            route: null, // Specify the route to be tested. Ex: '/signup'.
            method: null, // Specify the request method. Ex: 'GET'.
            vectors: [ // List ways 
                {
                    section: null, 
                    key: null, // section, key: Available sections in the request are: "body", "headers", "query" and "params". Ex. To specify "req.body.ticker", please specify the section of "body" and key of "ticker".
                    rule: null, // rule: Available rules are: "choose_one", "choose_many", "choose_range" and "choose_each". Please see the full guide for details.
                    payload: [], // Potential values that the payload can take. Ex. ['MSFT', 'GOOG']
                    payload_default: [] // Value that will be tested as a default. Ex. ['MSFT']
                    payload_default_only: false, // If set to true, only values explicitly specified in "payload_default" will be included in request scenarios.
                }
            ]
        },
        {
            route: null,
            method: null,
            vectors: [
                {
                    section: null,
                    key: null,
                    rule: null,  
                    payload: [],
                    payload_default: []
                }
            ]
        }
    ]
}
`

const init = () => {
    // 
    // Save battletest.config.js to root directory.
    const configPath = path.resolve(process.cwd(), 'battletest.config.js')
    fs.writeFile(configPath, configFile, function(err) {
        if (err) throw err
    })
};

module.exports = init;
