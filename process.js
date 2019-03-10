
/**
 * process.js
 * Process related snippets for NW.js
 */


// get process temp directory (unpack directory)
process.cwd();

// get current OS (win32, darwin, linux)
process.platform();

// catch errors
process.on('uncaughtException', function(error) {
	console.log(error.stack);
});

// execute program/child process
var proc = require('child_process').execFile(executable, ["-argument1", "-argument2", "-argument3"], { cwd: "" }, function(error, stdout, stderr) {
	
	if (error) { 
		// runs on error
	}
	if (stdout) { 
		// runs on stdout
	}
	if (stderr) { 
		// runs on stderr
	}
	
});

proc.stdin.on("close", function() {
	// runs on stdin update
});

proc.on("exit", function(code) {
	// runs on execution end
});

// kills the process
proc.kill();