const pathUtil = require('path');
const fs = require('fs');

module.exports = (path, operation, testFile) => {
  const filepath = pathUtil.resolve(process.cwd(), `__battletest__/${path.replace(/\//g, '_')}_${operation}.js`);
  fs.writeFileSync(filepath, testFile, (err) => {
    if (err) throw err;
  });
};
