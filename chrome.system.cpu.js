
/**
 * chrome.system.cpu.js
 * Chrome System CPU API related snippets for NW.js
 */


chrome.system.cpu.getInfo(function(cpu) {

	// cpu info
	console.log( JSON.stringify(cpu) );
	console.log("Architecture Name: "+cpu.architectureName );
	console.log("Model Name: "+cpu.modelName );
	console.log("Number of Processors: "+cpu.numOfProcessors );
	
	cpu.processors.forEach(function(processor, index) {
		console.log( "Processor Usage for "+index );
		console.log( "  Idle: "+processor.usage.idle );
		console.log( "  Total: "+processor.usage.total );
		console.log( "  Kernel: "+processor.usage.kernel );
		console.log( "  User: "+processor.usage.user );
    });
	
});
