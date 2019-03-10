
/**
 * chrome.system.display.js
 * Chrome System Display API related snippets for NW.js
 */


chrome.system.display.getInfo(function(display) {
	
	for (var i=0; i < display.length; i++) {
		// display info
		console.log( JSON.stringify(display[i]) );
		
		console.log("");
		console.log("Display Info "+i);
		console.log("ID: "+display[i].id );
		console.log("Name: "+display[i].name);
		console.log("Left: "+display[i].bounds.left );
		console.log("Top: "+display[i].bounds.top );
		console.log("Width: "+display[i].bounds.width );
		console.log("Height: "+display[i].bounds.height );
		console.log("DPIX: "+display[i].dpiX );
		console.log("DPIY: "+display[i].dpiY );
		console.log("Rotation: "+display[i].rotation );
		console.log("Workarea Left: "+display[i].workArea.left);
		console.log("Workarea Top: "+display[i].workArea.top);
		console.log("Workarea Width: "+display[i].workArea.width);
		console.log("Workarea Height: "+display[i].workArea.height);
		console.log("Is Primary: "+display[i].isPrimary );
		console.log("Mirroring Source ID: "+display[i].mirroringSourceId );
		console.log("");
	
	}
});

chrome.system.display.onDisplayChanged.addListener(function (){
	console.log("Display settings changed");
});
