var fs = require('fs');
var path = require('path');
var IGNORED_DIRS = require('./STATIC').IGNORED_DIRS;
var ACCEPTED_EXTS = require('./STATIC').ACCEPTED_EXTS; //不限制后缀
var fileList = [];


/**
 * Get js/json file paths in the dir(expect files inside ignored dirs)；广度优先
 * @param dir - initial dir
 * @return fielList - paths without extension
 */
var getPathsSync = function (dir){
  var dirList = fs.readdirSync(dir);
  //console.log(dir.resolve(dirList));
  dirList.forEach(function (item) {
    var currentPath = path.join(dir, item);
    var isFile = fs.statSync(currentPath).isFile();
    var extname = path.extname(item);
    if (isFile && ACCEPTED_EXTS.indexOf(extname) !== -1) { //extension 满足要求的file
      fileList.push(currentPath);
    }
  });
  dirList.forEach(function(item){
    var currentPath = path.join(dir, item);
    var isDirectory = fs.statSync(currentPath).isDirectory();
    if (isDirectory && IGNORED_DIRS.indexOf(item) === -1) { //非ignored dirs
      getPathsSync(currentPath);
    }
  });
  return fileList;
};

module.exports = getPathsSync;
