

var Module = {};
//Module.noInitialRun = true;

Module.preInit = [function() {
	FS.mkdir('/working');
    FS.mount(NODEFS, { root: '.' }, '/working');
}];

