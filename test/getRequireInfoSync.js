// 需要在主目录下执行
var getRequireInfoSync = require('../lib/getRequireInfoSync');

console.log('should return required moudles of bin/jcs');
console.log(getRequireInfoSync('/Users/junhuachen/Documents/tim/jsCodeStructure/bin/jcs.js'));
