#!/usr/bin/env node

/**
 * @name cli.js
 * @description execute varous command line arguments
 */

//  process.argv holds the arguments from when we run battletest from the command line
//  e.g. running $battletest init would result in process.argv having ['/node','/battletest', 'init']
const args = process.argv.slice(2);
//  the above line slices the first 2 extra arguments, results in an array of cmds ['init', ...]

const cmd = args[0] || 'help';
// cmd equals first argument in array, othewise will equal 'help'

switch (cmd) {
  case 'help' || '-help' || '--help' || '-h':
    if (args.length > 1) {
      console.error(
        `battletest: "${cmd}" does not take in additional arguments.  Please see "battletest --help" for available commands.`,
      );
    } else {
      require('./cmds/help')();
    }
    break;
  case 'version' || '-version' || '--version' || '-v':
    if (args.length > 1) {
      console.error(
        `battletest: "${cmd}" does not take in additional arguments.  Please see "battletest --help" for available commands.`,
      );
    } else {
      require('./cmds/version')();
    }
    break;
  case 'init':
    const configInput = args.slice(1);
    require('./cmds/init')(configInput);
    break;
  case 'generate':
    const path = require('path');
    const requireUncached = require('../util/requireUncached.js');
    const config = requireUncached(
      path.resolve(process.cwd(), 'battletest.config.js'),
    );
    const paths = args.slice(1);
    require('./cmds/generate')(config, ...paths);
    break;
  case 'start':
    const testFiles = args.slice(1);
    require('./cmds/start')(...testFiles);
    break;
  default:
    console.error(
      `battletest: "${cmd}" is not a valid command. Please see "battletest --help" for available commands.`,
    );
    break;
}
