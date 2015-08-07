var fs = require('fs'),
    path = require('path'),
    fileList = [];
var ignoredPaths = ['node_modules', '.git'];

// Get paths of all the js files expect `ignoredPaths`
var getPathsSync = function (path){
  var dirList = fs.readdirSync(path);
  //console.log(path.resolve(dirList));
  dirList.forEach(function(item){
    if (fs.statSync(path + '/' + item).isDirectory()) {
      if (ignoredPaths.indexOf(item) == -1) { // 不遍历 `ignoredPaths`
        getPathsSync(path + '/' + item);
      }
    } else if (item.slice(-3) === '.js') {
      fileList.push(path + '/' + item);
    }
  });
  return fileList;
};

module.exports = getPathsSync;
