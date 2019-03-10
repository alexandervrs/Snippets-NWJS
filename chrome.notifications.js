
/**
 * chrome.notifications.js
 * Chrome Notifications API related snippets for NW.js
 */


chrome.notifications.create("main", {
	"type":"basic",
	"title":"test", 
	"message":"My message", 
	"iconUrl":"icons/icon.png"
}, function (){
	
});