  var net = require('net');
  var moment = require('moment');

  var server = net.createServer(function (socket) {
    // socket handling logic
    var time = moment().format('YYYY-MM-DD HH:mm\n');
    socket.end(time);
  });

  server.listen(8000);