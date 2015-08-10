/**
 * delete extension of the path
 * @param filePath
 * @return filePath without extension
 */
var path = require('path');
var ACCEPTED_EXTS = require('./STATIC.js').ACCEPTED_EXTS;

module.exports = function (filePath) {
  var potentialExt = path.extname(filePath);
  var isExt = ACCEPTED_EXTS.indexOf(potentialExt) !== -1;
  if (isExt) {
    var dir = path.dirname(filePath);
    var barename = path.basename(filePath, path.extname(filePath));
    return path.join(dir, barename);
  } else {
    return filePath;
  }
};
