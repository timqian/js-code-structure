//var assert = require('assert');

// describe('测试getPathsSync方法', function () {
//   it('should return all the dirs important', function () {
//
//   });
// });

//
var getPathsSync = require('../lib/getPathsSync');
console.log('Paths under /Users/junhuachen/Documents/tim/jsCodeStructure/lib: ');
console.log(getPathsSync('/Users/junhuachen/Documents/tim/jsCodeStructure/lib'));
