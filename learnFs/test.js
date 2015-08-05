var fs = require('fs');

// fs.readFile('../package.json', 'utf8', function (err ,data) {
//   console.log(data);
// });
//
// fs.writeFile('./results.txt', 'Hello World', function(err) {
//   if(err) throw err;
//   console.log('File write completed');
// });
//
// fs.open('./results.txt', 'w', function(err, fd) {
//   if(err) throw err;
//   var buf = new Buffer('bbbbb\na');
//   fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
//     if(err) throw err;
//     console.log(err, written, buffer);
//     fs.close(fd, function() {
//       console.log('open and write Done');
//     });
//   });
// });

// fs.open('./results.txt', 'r', function(err, fd) {
//   if(err) throw err;
//   var buf = new Buffer(1);
//   fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
//     if(err) throw err;
//     console.log(err, bytesRead, buffer);
//     fs.close(fd, function() {
//       console.log('open and read Done');
//     });
//   });
// });

var path = '../';
fs.readdir(path, function (err, files) {
  if(err) throw err;
  files.forEach(function(file) {
    console.log(path+file);
    fs.stat(path+file, function(err, stats) {
      console.log(stats);
    });
  });
});
