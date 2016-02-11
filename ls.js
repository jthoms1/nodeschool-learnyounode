var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];
var fileExtRegex = /\.(.*)$/;

fs.readdir(dir, function(err, list) {
  list.forEach(function(file) {
    if (fileExtRegex.exec(file)[1] === ext) {
      console.log(file);
    }
  });
});
