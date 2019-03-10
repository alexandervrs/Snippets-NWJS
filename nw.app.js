
/**
 * nw.app.js
 * NW App related snippets for NW.js
 */


// get data from manifest
var appTitle   = nw.App.manifest.window.title // get title
var appVersion = nw.App.manifest.version // get version

// get storage directory
var storageDirectory = nw.App.dataPath;

// get executable directory
var executableDirectory = require("path").join(require('path').dirname(process.argv[0]), require("path").sep);

// quit the application
nw.App.quit();