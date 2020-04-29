const fs = require('fs');
const deleteFolderRecursive = require('./deleteFolderRecursive.js');

after('global after hook to clean up any lingering files', () => {
  deleteFolderRecursive('__battletest__');
  if (fs.existsSync('battletest.config.js')) fs.unlinkSync('battletest.config.js');
});

// const generate = require('../lib/cli/cmds/generate.js');
// const valid3 = require('./resources/configs/valid3.config.js');
// const start = require('../lib/cli/cmds/start.js');

// after('testing generate', () => {
//   generate(valid3);
//   start();
// });
