#!/usr/bin/env node
// console.log('hello world');
// process.exit();


const args = process.argv.slice(2);

let cmd = args._[0] || 'help';
if (args.version || args.v) { cmd = 'version'; }
if (args.help || args.h) { cmd = 'help'; }

switch (cmd) {
  case 'help':
    require('./cmds/help')();
    break;
  case 'version':
    require('./cmds/version')();
    break;
  case 'init':
    require('./cmds/init')();
    break;
  case 'generate':
    require('./cmds/generate')();
    break;
  default:
    console.error(`"${cmd}" is not a valid command`);
    break;
}
