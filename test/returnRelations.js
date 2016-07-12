var fs = require('fs');
var returnRelations = require('../lib/returnRelations');
var relationsInAppium = returnRelations('/Users/timqian/Documents/javascript/js-code-structure');

var nodeIds = relationsInAppium.nodes.map(function (node) {
  return node.id;
});

var sourceIds = relationsInAppium.edges.map(function (edge) {
  return edge.source;
});

var targetIds = relationsInAppium.edges.map(function (edge) {
  return edge.target;
});

var myJsonString = JSON.stringify(relationsInAppium);
//console.log(myJsonString);
fs.writeFile('codeRelations.json', myJsonString, function (err) {
  if (err) throw err;
  console.log('json saved in codeRelations.json!');
});

sourceIds.forEach(function (sourceId) {
  try {
    if(nodeIds.indexOf(sourceId) == -1) throw sourceId;
  } catch (e) {
    console.log(e);
  }
});
