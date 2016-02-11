var fs = require('fs');

module.exports = function (dir, ext, callback) {
  var fileList = [];
  var fileExtRegex = new RegExp('\\.' + ext + '$');

  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err);
    }
    list.forEach(function (file) {
      if (fileExtRegex.test(file)) {
        fileList.push(file);
      }
    });
    return callback(null, fileList);
  });
};
