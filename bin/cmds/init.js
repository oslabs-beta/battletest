/**
 * @name bin/cmds/init
 * @description execute "battletest init" by creating "__battletest__" folder and battletest.config.js
 * @param {null} undefined
 * 
 */

const fs = require('fs');
const path = require('path');

const configFile = ``

const init = () => {
    // 
    // Save battletest.config.js to root directory.
    const configPath = path.resolve(process.cwd(), 'battletest.config.js')
    fs.writeFile(configPath, configFile, function(err) {
        if (err) throw err
    })
};

module.exports = init;
