const electronPackager = require('electron-packager');

module.exports = function (grunt) {
	grunt.registerMultiTask('electron-packager', 'Run electron-plus commands',  function ()  {
    var done = this.async();
		var options = this.data.options;
		if (this.data.options === undefined) {
			throw new Error('`options` required');
		}
    electronPackager(typeof options === 'function' ? options.apply(grunt, arguments) : options, function (err)  {
      if (err) {
        grunt.warn(err);
        return;
      }
      done();
    });
	});
};
