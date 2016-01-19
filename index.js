(function(){
'use strict';

	var path = require('path');
	var dir = path.resolve('.');
	var pathObj =  path.parse(dir);
    var root =pathObj.root;

	var zip = require('./7za.js');
	// noInitialRun required
	var workDirName = '/workging';
	zip.FS.mkdir(workDirName);
	zip.FS.mount(zip.NODEFS, { root: root }, workDirName);

	var args = process.argv.slice(2);

	zip.FS.chdir(workDirName + dir);

	if(args.length >0){
		zip.callMain(args);
	} else {
		zip.callMain(['a', 'test.zip', 'test_file.tst']);
	}


})();