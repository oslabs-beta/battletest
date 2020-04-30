/**
 * @description create __battletest__ & __battletest__/__result__
 */
const fs = require("fs");
const path = require("path");

module.exports = () => {
  const dirPath = path.resolve(process.cwd(), "__battletest__");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    fs.mkdirSync(path.resolve(process.cwd(), "__battletest__", "__result__"));
  }
};
