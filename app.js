
/**
 * app.js
 * App related adjustments snippets for NW.js
 */

 
/* -----------------------------------------
   Disable drag and drop of files
----------------------------------------- */
document.body.addEventListener("dragover", function(e){
	e.preventDefault();
	e.stopPropagation();
}, false);

document.body.addEventListener("drop", function(e){
	e.preventDefault();
	e.stopPropagation();
}, false);

// disable drag and drop on iframe
document.getElementById("main").contentWindow.addEventListener("dragover", function(e){
	e.preventDefault();
	e.stopPropagation();
}, false);


/* -----------------------------------------
   Disable scroll with keyboard
----------------------------------------- */
window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1 && e.target == document.body) {
        e.preventDefault();
		return false;
    }
}, false);


/* -----------------------------------------
   Trigger Resize Event
----------------------------------------- */
// on window maximize & restore, trigger resize event
nw.Window.get().on("maximize", function() {
	$(window).trigger('resize');
});

nw.Window.get().on("restore", function() {
	$(window).trigger('resize');
});
