
/**
 * nw.capturepage.js
 * NW CapturePage related snippets for NW.js
 */


var win = nw.Window.get();
var fs = require('fs');

win.capturePage(function(buffer) {
	fs.writeFile(process.cwd() + '/screenshot.png', buffer, function (err) {
		if (err) {
			console.error(err);
		}

		console.log('Image is saved');
	});
}, { format : 'png', datatype : 'buffer'} );