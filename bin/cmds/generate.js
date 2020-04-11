/**
 * @name bin/cmds/generate
 * @description execute "battletest generate" to create test files for all or specified routes based on battletest.config.js
 * @param {Array.String} [routes] - names of routes for which test files will be generated, specified by the user
 * @returns {null} undefined
 */
const requireUncached = require('../util/requireUncached.js');

const generate = (routes) => {

  // TO DO - if any specified route is not in .config, return error & stop execution
};

module.exports = generate;
