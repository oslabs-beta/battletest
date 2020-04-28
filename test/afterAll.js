const fs = require('fs');
const deleteFolderRecursive = require('./deleteFolderRecursive.js');

after('global after hook to clean up any lingering files', () => {
  deleteFolderRecursive('__battletest__');
  if (fs.existsSync('battletest.config.js')) fs.unlinkSync('battletest.config.js');
});
