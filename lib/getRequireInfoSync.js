/**
 * get required files of the input filePath
 * @param filePath
 * @return {array} results
 */

var fs = require('fs');
// 当使用new RegExp("pattern")方法的时候不要忘记将\它自己进行转义，因为\在字符串里面也是一个转义字符。
var patt = /require\(['|"](.*?)['|"]\)/g;
var es6Patt = /import\s.*?['|"](.*?)['|"]/g;

// return required files as an Array
var getRequireInfoSync =  function (filePath) {
  var result,
      results = [],
      data = fs.readFileSync(filePath, 'utf-8');
  while ((result = patt.exec(data)) !== null) {
    results.push(result[1]); //or use result[1]?
    // console.log(result[1]);
  }

  // es6 import
  while ((result = es6Patt.exec(data)) !== null) {
    results.push(result[1]); //or use result[1]?
    // console.log(result[1]);
  }
  return results;
};

module.exports = getRequireInfoSync;
