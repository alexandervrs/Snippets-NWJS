
// on window maximize & restore, trigger resize event
nw.Window.get().on("maximize", function() {
	$(window).trigger('resize');
});

nw.Window.get().on("restore", function() {
	$(window).trigger('resize');
});
