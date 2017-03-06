'use strict';
const os = require('os');
module.exports = function (grunt) {
  grunt.initConfig({
    'electron-packager': {
      build: {
        options: {
          platform: os.platform(),
          arch: os.arch(),
          dir: './app',
          out: './build',
          icon: './app/recursos/icon',
          name: 'nameBuild',
          ignore: 'bower.json',
          version: '1.4.3', // set version of electron
          asar: true,
          overwrite: true
        }
      },
      buildCustom: {
        options: function (name, platform, arch) {
          return {
            platform,
            arch,
            dir: './app',
            out: './build',
            icon: './app/recursos/icon',
            name,
            ignore: 'bower.json',
            asar: true,
            overwrite: true
          }
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
