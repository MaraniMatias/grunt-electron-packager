'use strict';
const os = require('os');
module.exports = function (grunt) {
  grunt.initConfig({
    'electron-packager': {
      options: {
        asar: true,
        dir: './app',
        icon: './app/recursos/icon',
        ignore: 'bower.json',
        out: './build',
        overwrite: true
      },
      build: {
        arch: os.arch(),
        electronVersion: '1.8.4', // set version of electron
        name: 'nameBuild-test',
        platform: os.platform(),
      },
      buildCustom: {
        options: function (name, platform, arch) {
          return {
            arch,
            // asar: true,
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
    'electron-packager:buildCustom:buildCustomName:win32:all'
  ]);
};
