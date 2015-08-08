var fs = require('fs');
var path = require('path');
var IGNORED_DIRS = require('./STATIC').IGNORED_DIRS;
var ACCEPTED_EXTS = require('./STATIC').ACCEPTED_EXTS;
var fileList = [];


/**
 * Get js/json file paths in the dir(expect files inside ignored dirs)
 * @param dir - initial dir
 * @return fielList - paths without extension
 */
var getPathsSync = function (dir){
  var dirList = fs.readdirSync(dir);
  //console.log(dir.resolve(dirList));
  dirList.forEach(function(item){
    var currentPath = path.join(dir, item);
    var isDirectory = fs.statSync(currentPath).isDirectory();
    var extname = path.extname(item);
    if (isDirectory) {
      if (IGNORED_DIRS.indexOf(item) === -1) { // 如果不属于 `IGNORED_DIRS`，那么递归！
        getPathsSync(currentPath);
      }
    } else if (ACCEPTED_EXTS.indexOf(extname) !== -1) { //如果extension 满足条件，那么推到list中
      //var pathWithoutExt = path.join(dir, path.basename(item, extname));
      //console.log(pathWithoutExt);
      fileList.push(currentPath);
    }
  });
  return fileList;
};

module.exports = getPathsSync;
