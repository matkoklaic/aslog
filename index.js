var fs = require('fs');

var ERROR = 0;
var WARN = 1;
var INFO = 2;



var loggingLevel = ERROR;

module.exports.ERROR = 0;
module.exports.WARN = 1;
module.exports.INFO = 2;

function ASLog() {
	process.on('exit', function(code) {
		console.log('exit with code: ' + code);
	});
};

ASLog.prototype.instance = undefined;

ASLog.prototype.setLevel = function(level) {
	loggingLevel = level;
};

ASLog.prototype.error = function(message) {
	console.log('ERROR[AS]: ' + message);
};

ASLog.prototype.warn = function(message) {
	if (loggingLevel < WARN) return;
	console.log('WARN[AS]: ' + message);
};

ASLog.prototype.info = function(message) {
	if (loggingLevel < INFO) return;
	console.log('info[AS]: ' + message);
};

module.exports = function() {
	if (!this.instance) {
		instance = new ASLog();
	}
	return instance;
}

