const fs = require('fs');
const path = require('path');

module.exports = (configFile) => {
  const configPath = path.resolve(process.cwd(), 'battletest.config.js');
  fs.writeFile(configPath, configFile, (err) => {
    if (err) throw err;
    else {
      console.log(
        'battletest: Successfully created battletest.config.js.  See https://github.com/oslabs-beta/battletest for a guide.',
      );
    }
  });
};
