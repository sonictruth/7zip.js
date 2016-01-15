(function(){
'use strict';



	console.log('Testing');
	var zip = require('./7za.js');
	// noInitialRun required
	zip.FS.mkdir('/working');
	zip.FS.mount(zip.NODEFS, { root: '/tmp' }, '/working');

	zip.callMain(['a', '/working/testX.zip', '/working/test/*']);



})();