var fs = require('fs');
var _ = require('lodash');
var patt = new RegExp('require(.*)', 'g');
var result;
var results = [];

// return required files as an Array
var getRequireInfoSync =  function (filePath) {
  data = fs.readFileSync(filePath, 'utf-8');
  while ((result = patt.exec(data)) !== null) {
    results.push(result[0].slice(9,-3)); //or use result[1]?
     console.log(result[0]);
  }
  return results;
};

module.exports = getRequireInfoSync;
