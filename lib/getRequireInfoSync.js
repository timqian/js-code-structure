var fs = require('fs');
// 当使用new RegExp("pattern")方法的时候不要忘记将\它自己进行转义，因为\在字符串里面也是一个转义字符。
var patt = new RegExp('require\\(.*?\\)', 'g');

// return required files as an Array
var getRequireInfoSync =  function (filePath) {
  var result,
      results = [],
      data = fs.readFileSync(filePath, 'utf-8');
  while ((result = patt.exec(data)) !== null) {
    results.push(result[0].slice(9,-2)); //or use result[1]?
     //console.log(result[0]);
  }
  return results;
};

module.exports = getRequireInfoSync;
