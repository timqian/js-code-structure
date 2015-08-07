var relativePathToAbsolute = require('../lib/relativePathToAbsolute');

// ''./a/d.js'
console.log('should return ./a/d.js');
console.log(relativePathToAbsolute('/a/b/c.js', '../d.js'));
console.log('should return fs');
console.log(relativePathToAbsolute('/a/b/c.js', 'fs'));
console.log('should return /fs.js');
console.log(relativePathToAbsolute('/a/b/c.js', '/fs.js'));
