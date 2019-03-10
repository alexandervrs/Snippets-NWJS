
/**
 * nw.file.dialog.js
 * NW File Dialog related snippets for NW.js
 */


// requires filesystem node module
var fileSystem = require("fs");


/* -----------------------------------------
   Filesystem dialogs (file/folder open)
----------------------------------------- */

<!-- html -->
<form><input id="file-open-dialog" type="file" style="display: none;" accept="image/jpg,image/png,image/gif,image/jpeg,image/webp,image/bmp,image/ico" nwworkingdir="" role="hidden" /></form>

<form><input id="folder-open-dialog" type="file" style="display: none;" nwdirectory nwworkingdir="" role="hidden" /></form>
<!-- /html -->

$("#file-open-dialog, #folder-open-dialog").on("change", function(d) {
	
	// enumerate files
	var g = $(this)[0].files;
	
	if (g[0] == undefined) {
		return false
	}
	var f = this.value;
	var e = { "/etc": "/private/etc" };
	
	fileSystem.realpath(f, e, function(j, i) {
		
		if (j) {
			throw j;
		}
		
		var l = i;
		var k = l.substring(0, l.lastIndexOf("\\") + 1);
		var h = l.substring(l.lastIndexOf("\\") + 1, l.length);
		
		pathRoot = k;
		path = i;
		
		$("#file-open-dialog").closest("form")[0].reset();
		$("#folder-open-dialog").closest("form")[0].reset();
		
		alert("Result: "+f);
	});

});


/* -----------------------------------------
   Filesystem dialogs (file save)
----------------------------------------- */

<!-- html -->
<form><input id="file-save-dialog" type="file" style="display: none;" accept="image/jpg,image/png,image/gif,image/jpeg,image/webp,image/bmp,image/ico" nwsaveas="file.txt" nwworkingdir="" role="hidden" /></form>
<!-- /html -->

$("#file-save-dialog").on("change", function(d) {
	
	var g = $(this)[0].files;
	
	if (g[0] == undefined) {
		return false
	}
	var f = this.value;
	var e = { "/etc": "/private/etc" };
	
	fileSystem.realpath(f, e, function(j, i) {
		
		$("#file-save-dialog").closest("form")[0].reset();
		
		alert("Result: "+f);
	});

});

