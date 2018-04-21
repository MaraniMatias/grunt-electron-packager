const
  fs = require('fs'),
  electronPackager = require('electron-packager');

module.exports = function (grunt) {
  grunt.registerMultiTask('electron-packager', 'Run electron-plus commands', function () {
    var done = this.async(),
      options;

    if (typeof this.data === 'undefined' && typeof this.data.options === 'undefined') {
      throw new Error('`options` required');
    } else {
      if (typeof this.data.options !== 'undefined') {
        if (typeof this.data.options === 'function') {
          options = this.data.options.apply(grunt, arguments);
        } else {
          options = this.data.options;
        }
      } else {
        if (typeof this.data === 'function') {
          options = this.options(this.data.apply(grunt, arguments));
        } else
        if (typeof this.data !== 'undefined') {
          options = this.options(this.data);
        }
      }
    }

    try {
      // console.log(options);
      fs.access(options.dir, function (err) {
        if (err) {
          grunt.fatal(err instanceof Error ? err : new Error(err));
        }
        electronPackager(options, function (err, appPath) {
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
