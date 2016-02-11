var http = require('http');
var fs = require('fs');
var filepath = process.argv[2];

var server = http.createServer(function (req, res) {
  fs.createReadStream(filepath).pipe(res);
});

server.listen(8000);