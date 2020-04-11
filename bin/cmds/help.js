/**
 * @name help
 * @description Prints a help menu for the battletest node module
 *
 */

const chalk = require('chalk');
const battle = require('../../package.json');

const github = battle.repository.url;
const { homepage } = battle;

const help = () => {
  const helpTxt = `Usage: battletest <command>

Commands:
generate                Generate test files in /test folder
help                    Display help and information  [default]
init <path>             Initalizes battletest.config.js at <path> or root folder by default
start                   Run tests via Mocha
version                 Display current version of Battletest
`;
  console.log(helpTxt);
  console.log('Battletest Resources');
  console.log(`Github:  ${chalk.blue(github)}`);
  console.log(`Docs:    ${chalk.red(homepage)}`);
};


module.exports = help;
