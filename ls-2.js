var dir = process.argv[2];
var ext = process.argv[3];
var lsModule = require('./ls-2-module');

lsModule(dir, ext, function (err, fileList) {

	if (err) {
		return console.log(err);
	}

	return console.log(fileList.join('\n'));
});
