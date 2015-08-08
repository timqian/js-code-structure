#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var getPathsSync = require('../lib/getPathsSync');
var getRequireInfoSync = require('../lib/getRequireInfoSync');
var relativePathToAbsolute = require('../lib/relativePathToAbsolute');
var deleteExt = require('../lib/deleteExt');

var currentDir = process.cwd(); //current working directory
var jsPaths = getPathsSync(currentDir);
var nodes = [];
var edges = [];
var jsDir = '';
var index = 0; // node index

for (var i = 0; i < jsPaths.length; i++) {
  var jsPath = jsPaths[i];
  var fileSize = fs.s
  /***    push to node  ************************************/
  var jsPathArray = path.relative(currentDir, jsPath).split(path.sep);

  // 如果这个js文件目录与上一个不同，为目录建一个node
  if (path.dirname(jsPath) !== jsDir) {
    jsDir = path.dirname(jsPath);
    nodes.push({
      id: jsDir,
      label: path.basename(jsDir),
      x: jsPathArray.length -1,
      y: index + 1,
      color: '#ccc',
      size: 1
    });
    index += 1;
  }
  // js文件node
  nodes.push({
    id: deleteExt(jsPath), // path without extension
    label: path.basename(jsPath),
    x: jsPathArray.length,
    y: index + 1,
    color: '#c0c',
    size: fs.statSync(jsPath).size
  });
  index += 1;

  /***  push to edges  ******************************/
  var reqPathList = getRequireInfoSync(jsPath);
  for (var j = 0; j < reqPathList.length; j++) {
    var absolutePath = deleteExt(relativePathToAbsolute(jsPath, reqPathList[j]));
    if(absolutePath.slice(0,1) === '/'){  //@TODO: 1.暂时不管内置的和npm安装的模块调用，待改善;2.在win系统上有问题！
      edges.push({
        id: 'e' + i +'-' + j,
        source: absolutePath,
        target: deleteExt(jsPath)
      });
    }
  }
}

var relations = {
  nodes: nodes,
  edges: edges
};
var myJsonString = JSON.stringify(relations);
console.log(myJsonString);
fs.writeFile('codeRelations.json', myJsonString, function (err) {
  if (err) throw err;
  console.log('It\'s saved in codeRelations.json!');
});
