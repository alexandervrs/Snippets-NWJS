
/**
 * chrome.idle.js
 * Chrome Idle API related snippets for NW.js
 */

 
chrome.idle.setDetectionInterval(15);
chrome.idle.onStateChanged.addListener(function(newState) {
	switch (newState) {
		case "idle":
			console.log("Application is idle");
			break;
		case "active":
			console.log("Application is active");
			break;
		case "locked":	
			console.log("Application is locked");
			break;
	}
});