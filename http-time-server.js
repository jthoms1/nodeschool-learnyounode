var http = require('http');
var moment = require('moment');
var url = require('url');

var server = http.createServer(function(req, res) {

  var isoTime = moment(url.parse(req.url, true).query.iso);
  var timeObj = {};

  if (req.url === '/api/parsetime') {
    timeObj.hour = isoTime.format('HH');
    timeObj.minute = isoTime.format('mm');
    timeObj.second = isoTime.format('ss');
  } else {
    timeObj.unixTime = isoTime.format('X');
  }

  res.writeHead(200, {'Content-Type': 'application/json'});
  console.log(JSON.stringify(timeObj));
  res.write(JSON.stringify(timeObj));
  res.end();

});

server.listen(8000);
