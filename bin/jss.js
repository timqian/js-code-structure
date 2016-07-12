#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var open = require('open');
var returnRelations = require('../lib/returnRelations');


var currentDir = process.cwd();

var addIgnore = [];
if (process.argv[2] == '--ignore') {
  for (var i = 3; i < process.argv.length; i++) {
    addIgnore.push(process.argv[i]);
  }
}
var relations = returnRelations(currentDir, addIgnore);
var strRelations = JSON.stringify(relations);
var html1 = fs.readFileSync('./bin/1.html').toString();
var html2 = fs.readFileSync('./bin/2.html').toString();
fs.writeFileSync('./jsCodeStructure.html', html1 + strRelations + html2);
open('jsCodeStructure.html')
