//var assert = require('assert');

// describe('测试getPathsSync方法', function () {
//   it('should return all the dirs important', function () {
//
//   });
// });

// 需要在主目录下执行
var getPathsSync = require('../lib/getPathsSync');
console.log(getPathsSync('.'));
