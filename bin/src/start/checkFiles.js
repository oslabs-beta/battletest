/**
 * @name bin/src/start/checkFiles
 * @description Check if .js files are in specified directory.
 * @returns Names of .js files not in directory.
 */

const fs = require('fs');

module.exports = (filenames, directory) => {
    filenames = filenames.map((filename) => (filename.substr(-3) === '.js' ? filename : `${filename}.js`));

    const filesInDirectory = fs.readdirSync(directory); 
    const notInDirectory = filenames.reduce((acc, filename) => {
      if (!filesInDirectory.includes(filename)) {
        acc.push(filename);
        return acc;
      }
      return acc;
    }, []);

    return notInDirectory;
}