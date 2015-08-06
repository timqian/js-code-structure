//var getRequireInfo = require('./getRequireInfo');
var fs = require('fs');
var dependencies =[];
// getRequireInfo('./learnFs/test.js');

//console.log(dependencies);

var patt = new RegExp('require(.*)', 'g');
fs.readFile('./learnFs/test.js', 'utf-8', function (err, data) {
  while ((result = patt.exec(data)) !== null) {
    dependencies.push(result[0].slice(9,-3)); //or use result[1]?
     //console.log(result[0]);
  }
  console.log(dependencies);
});
