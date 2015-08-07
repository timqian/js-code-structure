#!/usr/bin/env node
var _ = require('lodash');
var fs = require('fs');
var getPathsSync = require('../lib/getPathsSync');
var getRequireInfoSync = require('../lib/getRequireInfoSync');
var relativePathToAbsolute = require('../lib/relativePathToAbsolute');

var currentPath = process.cwd(); //the current working directory
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
               size: 0
              };
  return obj;
});

console.log(relations);
