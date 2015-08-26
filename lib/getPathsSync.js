/**
 * Get js/json file paths in the dir(expect files inside ignored dirs)；广度优先
 * @param {string} dir - initial dir
 * @param {array} addIgnore - add ignored dirs
 * @return fielList - paths without extension
 */

var fs = require('fs');
var path = require('path');
var IGNORED_DIRS = require('./STATIC').IGNORED_DIRS;
var ACCEPTED_EXTS = require('./STATIC').ACCEPTED_EXTS; //不限制后缀
var fileList = [];

var getPathsSync = function (dir, addIgnore){
  var ignored_dirs;
  if (Array.prototype.isPrototypeOf(addIgnore)) {
    ignored_dirs = addIgnore.concat(IGNORED_DIRS);
  } else {
    ignored_dirs = IGNORED_DIRS;
  }

  var dirList = fs.readdirSync(dir);
  // console.log(dir.resolve(dirList));
  dirList.forEach(function (item) {
    var currentPath = path.join(dir, item);
    var isFile = fs.statSync(currentPath).isFile();
    var extname = path.extname(item);
    //push extension满足要求的file
    if (isFile && ACCEPTED_EXTS.indexOf(extname) !== -1) {
      fileList.push(currentPath);
    }
  });
  dirList.forEach(function(item){
    var currentPath = path.join(dir, item);
    var isDirectory = fs.statSync(currentPath).isDirectory();
    //非ignored dirs: 递归
    if (isDirectory && ignored_dirs.indexOf(item) === -1) {
      getPathsSync(currentPath);
    }
  });
  return fileList;
};

module.exports = getPathsSync;
