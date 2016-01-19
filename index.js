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


	zip.FS.chdir(workDirName + dir);

	var args = process.argv.slice(2);

	zip.callMain(args);
	// zip.callMain(['a', 'test.zip', 'test_file.tst']);


})();