const
	fs = require('fs'),
	electronPackager = require('electron-packager');

module.exports = function(grunt) {
	grunt.registerMultiTask('electron-packager', 'Run electron-plus commands', function() {
		var done = this.async(), options;
		if (this.data.options === undefined) {
			throw new Error('`options` required');
		} else {
			options = typeof (ref = this.data.options) === 'function' ? ref.apply(grunt, arguments) : ref;
		}
		
		try {
			fs.access(options.dir, function(err) {
				if (err) {
					grunt.fatal(err instanceof Error ? err : new Error(err));
				}
				electronPackager(options, function(err, appPath) {
					if (err) {
						grunt.warn(err);
						return;
					} else {
						grunt.log.writeln('\t' + appPath);
					}
					done();
				});
			});
		} catch (err) {
			grunt.fatal(err instanceof Error ? err : new Error(err));
		}
	});
};
