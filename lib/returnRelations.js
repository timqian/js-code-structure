/**
 * @file return relations of files based on the rule of sigma.js
 * @param currentPath - absolute path
 * @return json - describing file relations
 */

var fs = require('fs');
var path = require('path');
var getPathsSync = require('./getPathsSync');
var getRequireInfoSync = require('./getRequireInfoSync');
var relativePathToAbsolute = require('./relativePathToAbsolute');
var deleteExt = require('./deleteExt');

module.exports = function (currentDir, addIgnore) {
  var jsPaths = getPathsSync(currentDir, addIgnore);
  var nodes = [];
  var edges = [];
  var jsDir = '';
  var index = 0; // node index
  var dx = 0;

  for (var i = 0; i < jsPaths.length; i++) {
    var jsPath = jsPaths[i];
    /***    push to node  ************************************/
    var jsPathArray = path.relative(currentDir, jsPath).split(path.sep);

    // 如果这个js文件目录与上一个不同，为目录建一个node
    if (path.dirname(jsPath) !== jsDir) {
      index += 1;
      jsDir = path.dirname(jsPath);
      nodes.push({
        id: 'dir' + jsDir,
        label: path.basename(jsDir) + ': ',
        x: jsPathArray.length -1,
        y: index + 1,
        color: '#ccc',
        size:1
      });
      // index += 1;
      dx = 0;
    } else {
      dx += 1;
    }
    // js文件node
    nodes.push({
      id: deleteExt(jsPath), // path without extension
      label: path.basename(jsPath),
      x: jsPathArray.length + dx,
      y: index + 1,
      color: '#c0c',
      size:1
    });
    // index += 1;
    //dx += 1;
    /***  push to edges  ******************************/
    var reqPathList = getRequireInfoSync(jsPath);
    for (var j = 0; j < reqPathList.length; j++) {
      var absolutePath = deleteExt(relativePathToAbsolute(jsPath, reqPathList[j]));
      if(absolutePath.slice(0,1) === '/'){  //@TODO: 1.暂时不管内置的和npm安装的模块调用，待改善;2.在win系统上有问题！
        edges.push({
          id: 'e' + i +'-' + j,
          source: absolutePath,
          target: deleteExt(jsPath),
          size: 1,
          type: 'curvedArrow',
          color: '#ccc',
          hover_color: '#000'
        });
      }
    }
  }

  // 为了使线条细一些，增加一条粗一些的edge
  edges.push({
    id: 'eRef',
    source: 'dir' + currentDir,
    target: 'dir' + currentDir,
    size: 2,
    type: 'curvedArrow',
    color: '#ccc',
    hover_color: '#000'
  });

  // 当有一些意外require规则没找到时，防止sourceId指向不存在的nodeId
  var nodeIds = nodes.map(function (node) {
    return node.id;
  });

  var legalEdges = edges.filter(function (edge) {
    var sourceId = edge.source;
    if(nodeIds.indexOf(sourceId) !== -1) {
      return edge;
    }
  });
// console.log(legalEdges);

  return {
    nodes: nodes,
    edges: legalEdges
  };

};
