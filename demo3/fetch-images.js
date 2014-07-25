var http = require("http");
var fs = require("fs");
var path = require("path");
var URL = require('url'); 

function mkpathsync(dirpath, mode) {
	dirpath = path.resolve(dirpath);
	
	if (typeof mode === 'undefined') {
		mode = 0777 & (~process.umask());
	}

	try {
		if (!fs.statSync(dirpath).isDirectory()) {
			throw new Error(dirpath + ' exists and is not a directory');
		}
	} catch (err) {
		if (err.code === 'ENOENT') {
			mkpathsync(path.dirname(dirpath), mode);
			fs.mkdirSync(dirpath, mode);
		} else {
			throw err;
		}
	}
};

function saveData(url, filename, data) {
	var dir = path.dirname(filename);
	
	mkpathsync(dir);
	fs.writeFile(filename, data, "binary", function (err) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("download: " + url);
			console.log("save data to " + filename);
			console.log("");
		}
	});

	return;
}

function fetchOneFile(weburl, filename) {
	var url = URL.parse(weburl);
	
	var options = {
	  protocol: url.protocol,
	  host: url.host,
	  path: url.path,
	  port: url.port,
	};

	function onResponse(response) {
	  var data = null;

	  response.on('data', function (chunk) {
	  	if(data) {
	  		data = Buffer.concat([data, chunk]);	
	  	}
	  	else {
			data = chunk;
		}
	  });

	  response.on('end', function () {
		saveData(weburl, filename, data);	
	  });
	}

	var req = http.request(options, onResponse);
	req.end();

	return;
}

function onUIData(data) {
	var ret = eval(data);

	for(var i = 0; i < guiData.fileList.length; i++) {
		var iter = guiData.fileList[i];
		fetchOneFile(iter.weburl, iter.fileurl);
	}

	return;
}

fs.readFile('ui-data.js', 'utf8', function (err,data) {
  if (err) {
	return console.log(err);
  }

  onUIData(data);
});

return;


