#!/usr/bin/env node
var fs = require('fs');
var getPathsSync = require('../lib/getPathsSync');
var getRequireInfoSync = require('../lib/getRequireInfoSync');
var relativePathToAbsolute = require('../lib/relativePathToAbsolute');

var currentPath = process.cwd(); //current working directory
var paths = getPathsSync(currentPath);
var relations = [];
//console.log(paths);

var relations = paths.map(function (path) {
  var reqPaths = getRequireInfoSync(path)
  .map(function (reqPath) {
    return relativePathToAbsolute(path, reqPath);
  });
  //console.log(reqPaths);
  var obj = {};
  obj[path] = {reqPaths: reqPaths,
              // @Todo add size
               size: 'todo'
              };
  return obj;
});


var myJsonString = JSON.stringify(relations);
console.log(myJsonString);
fs.writeFile('codeRelations.json', myJsonString, function (err) {
  if (err) throw err;
  console.log('It\'s saved in codeRelations.json!');
});
