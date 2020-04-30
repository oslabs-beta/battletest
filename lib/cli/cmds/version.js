/**
 * @name cmd/version.js
 * @description Prints current version of battletest as specified in package.json
 */
module.exports = () => {
  const { version } = require('../../../package.json');
  console.log(version);
};
