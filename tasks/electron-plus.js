const 
fs = require('fs'),
electronPackager = require('electron-packager');

module.exports = function (grunt) {
	grunt.registerMultiTask('electron-packager', 'Run electron-plus commands',  function ()  {
    var done = this.async();
		var options = this.data.options;
		if (this.data.options === undefined) {
			throw new Error('`options` required');
		}
    fs.access(options.dir , function (err) {
      if (err){
        throw new Error('`dir` required - path the app');
      }
      electronPackager(typeof options === 'function' ? options.apply(grunt, arguments) : options, function (err,appPath)  {
        if (err) {
          grunt.warn(err);
          return;
        }else{
          grunt.log.writeln('\t'+appPath);
        }
        done();
      });
    });   
	});
};

