'use strict';
const os = require('os');

module.exports = function (grunt)  {
	grunt.initConfig({
		'electron-packager': {
			build: {
        options:{
          platform  : os.platform(),
          arch      : os.arch(),
          dir       : './test/app',
          out       : './test/build',
          icon      : './test/app/recursos/icon',
          name      : 'nameBuild',
          ignore    : 'bower.json',
          version   : '0.36.7', // set version of electron
          overwrite : true
        }
			},
			buildCustom: {
				options: function (name,platform,arch) {
          return {
            platform  : platform,
            arch      : arch,
            dir       : './test/app',
            out       : './test/build',
            icon      : './test/app/recursos/icon',
            name,
            version   : '0.36.6',
            ignore    : 'bower.json',
            overwrite : true
          }
				}
			}
		}
	});

	grunt.loadTasks('tasks');

	grunt.registerTask('default', [
		'electron-packager:build',
		'electron-packager:buildCustom:buildCustomName:win32:all'
	]);
};
