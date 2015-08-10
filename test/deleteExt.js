var deleteExt = require('../lib/deleteExt');

console.log('should return /a/b/c: ');
console.log(deleteExt('/a/b/c.js'));
console.log(deleteExt('/a/b/c.json'));
console.log(deleteExt('/a/b/c'));
console.log(deleteExt('/a/b.c'));
