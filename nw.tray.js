
/**
 * nw.tray.js
 * NW Tray related snippets for NW.js
 */


nw.Window.get().on("minimize", function() {
   
	// hide window on minimize and create tray entry
	this.hide();
    tray = new nw.Tray({
        title: "Title",
		tooltip: "Tooltip tray text",
        icon: "images/icon.png"
    });
	
	// tray context menu
	var menu = new nw.Menu();
	var showMenuItem = new nw.MenuItem({ label: "Show" }); menu.append(showMenuItem);
	menu.append(new nw.MenuItem({ type: "separator" }));
	var quitMenuItem = new nw.MenuItem({ label: "Quit" }); menu.append(quitMenuItem);
	tray.menu = menu;
	
	// context menu item commands
	showMenuItem.on("click", function() { 
        nw.Window.get().show();
		tray.remove();
        tray = null;
	});
	quitMenuItem.on("click", function() { 
        nw.Window.get().hide();
		tray.remove();
        tray = null;
		Application.quit();
	});
	
	// restore window on icon click
    tray.on("click", function() {
        nw.Window.get().show();
        this.remove();
        tray = null;
    });
	
});