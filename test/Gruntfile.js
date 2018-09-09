'use strict';
const os = require('os');
module.exports = function (grunt) {
  grunt.initConfig({
    'electron-packager': {
      options: {
        asar: true,
        dir: './app',
        ignore: 'bower.json',
        out: './build',
        overwrite: true
      },
      buildLinux: {
        name: 'nameBuild-test-linux',
        arch: 'x64',
        platform: 'linux',
      },
      buildWin: {
        name: 'nameBuild-test-win',
        arch: 'x64',
        platform: 'win32',
      },
      build: {
        options:{
          platform        : os.platform(),
          arch            : os.arch(),
          dir             : './app',
          out             : './build',
          icon            : './app/recursos/icon',
          name            : 'nameBuild',
          ignore          : 'bower.json',
          // set specific version of electron, If it isn't using the electron's version on your deps.
          electronVersion: '2.0.8',
          asar      : true,
          overwrite : true
        }
      },
      buildCustom: {
        options: function (name, platform, arch) {
          return {
            arch,
            asar: true,
            dir: './app',
            // icon: './app/recursos/icon',
            ignore: 'bower.json',
            name,
            out: './build',
            overwrite: true,
            platform
          };
        }
      }
    }
  });
  grunt.loadTasks('./../tasks');
  grunt.registerTask('default', [
    'electron-packager:build',
    'electron-packager:buildLinux',
    'electron-packager:buildWin',
    'electron-packager:buildCustom:buildCustomName:win32:x64'
  ]);
};
