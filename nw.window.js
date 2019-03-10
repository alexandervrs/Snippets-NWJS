
/**
 * nw.window.js
 * NW Window related snippets for NW.js
 */


// open new window
nw.Window.open("views/window.html", {
		id: "newwindow",
		title: "New Window",
		icon: "images/icon.png",
		width: 680,
		height: 480,
		resizable: false,
		always_on_top: false,
		show: true,
		position: "center"
	},
	function(new_win) { 
		new_win.params = {}; 
		new_win.params.someValue = 5; // pass value to the new window, access it in new window with nw.Window.get().params.someValue;
});

// close window
nw.Window.get().close();

// close window event
nw.Window.get().on("close", function() {
	if (confirm("Are you sure you want to quit?")) {
		this.hide();
		this.close(true); // "true" force closes without executing close event
	}
});

// on focus lost
nw.Window.get().on("blur", function() {
	console.log("Window focus lost");
});

// on focus restored
nw.Window.get().on("focus", function() {
	console.log("Window has focus");
});

// on resize event
nw.Window.get().on("resize", function() {
	console.log("Resizing");
});

// move window
nw.Window.get().x = 32;
nw.Window.get().y = 32;

// maximize window
nw.Window.get().maximize();

// minimize window
nw.Window.get().minimize();

// restore window
nw.Window.get().restore();

// hide window
nw.Window.get().hide();

// show window
nw.Window.get().show();

// hide from taskbar
nw.Window.get().setShowInTaskbar(false);

// focus window
nw.Window.get().focus();

// enter fullscreen mode
nw.Window.get().enterFullscreen();

// exit fullscreen mode
nw.Window.get().leaveFullscreen();

// return if in fullscreen mode
var isFullscreen = nw.Window.get().isFullscreen();
