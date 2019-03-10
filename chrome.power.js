
/**
 * chrome.power.js
 * Chrome Power API related snippets for NW.js
 */


chrome.power.releaseKeepAwake();
chrome.power.requestKeepAwake("display"); // or system (allows the display to sleep)
