var path = require('path');

/**
 * @file transfrom relative path (if it is)
 * @param {string} filePath - path of the file
 * @param {string[]} requiredPaths - relative path accoriding to the file
 * @return {string[]} path - filePaths accoriding to the entry()
 */

module.exports = function (from, to) {
  var absolute = '';
  if (to[0] === '.') {
    absolute = path.resolve(from, '..', to);
    return absolute;
  } else {
    return to;
  }
};
