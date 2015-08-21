/**
 * @file transfrom relative path (if it is)
 * @param {string} filePath - path of the file
 * @param {string[]} requiredPaths - relative path accoriding to the file
 * @return {string[]} path - filePaths accoriding to the entry()
 */

var path = require('path');
module.exports = function (from, to) {
  var absolute = '';
  if (to[0] === '.') {
    absolute = path.resolve(from, '..', to);
    return absolute;
  } else {
    return to;
  }
};
