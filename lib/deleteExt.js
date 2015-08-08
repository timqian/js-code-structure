/**
 * delete extension of the path
 * @param filePath
 * @return filePath without extension
 */
var path = require('path');

module.exports = function (filePath) {
  var dir = path.dirname(filePath);
  var barename = path.basename(filePath, path.extname(filePath));
  return path.join(dir, barename);
};
