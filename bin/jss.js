#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var open = require('open');
var returnRelations = require('../lib/returnRelations');

var currentDir = process.cwd();
var addIgnore = [];
if (process.argv[2] == '--ignore') {
  for (var i = 3; i < process.argv.length; i++) {
    // console.log(process.argv[i]);
    addIgnore.push(process.argv[i]);
    console.log(addIgnore);
  }
}
var relations = returnRelations(currentDir, addIgnore);
/****  generate html  *********************************/
var output = [];

var html1 = path.resolve(path.dirname(__filename), 'relations.html');
var html2 = path.resolve(path.dirname(__filename), 'relations.json');
var html3 = path.resolve(path.dirname(__filename), 'relations3.html');

var strRelations = JSON.stringify(relations);
fs.writeFile(html2, strRelations, function (err, data) {
  if (err) throw err;
  fs.readFile(html1, function (err, data) {
    if (err) throw err;
    output.push(data);
    fs.readFile(html2, function (err, data) {
      if (err) throw err;
      output.push(data);
      fs.readFile(html3, function (err, data) {
        if (err) throw err;
        output.push(data);
        var strOutput = Buffer.concat(output);
        fs.writeFile('jsCodeStructure.html', strOutput, function (err, data) {
          if (err) throw err;
          console.log('jsCodeStructure.html wrote');
          console.log(process.argv[2]);
          open('jsCodeStructure.html');
        });
      });
    });
  });
});
//console.log('relations.json wrote');





//
// console.log(myJsonString);
// fs.writeFile('codeRelations.json', myJsonString, function (err) {
//   if (err) throw err;
//   console.log('It\'s saved in codeRelations.json!');
// });
//
// console.log(__filename);
// var htmlPath = path.resolve(path.dirname(__filename), 'relations.html');
// fs.readFile(htmlPath, 'utf-8', function (err, data) {
//   if (err) throw err;
//   fs.writeFile('codeRelations.html', data, function (err, data) {
//     if (err) throw err;
//     console.log('html saved');
//   });
// });
