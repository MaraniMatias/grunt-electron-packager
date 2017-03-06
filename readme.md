# grunt-electron-packager 

Grunt task to create packages [Electron](http://electron.atom.io) using  [`electron-packager`](https://github.com/maxogden/electron-packager)
This is mostly intended for those that have an existing grunt setup and want to integrate Electron app packaging.
It allows you to create custom options.

## Install

```
$ npm install grunt-electron-packager --save-dev 
```

## Usage

```js
const os = require('os');
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

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
            platform ,
            arch,
            dir       : './test/app',
            out       : './test/build',
            icon      : './test/app/recursos/icon',
            name,
            ignore    : 'bower.json',
            overwrite : true
          }
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-electron-packager');
  grunt.registerTask('default', [
    'electron-packager:build',
    'electron-packager:buildCustom:buildCustomName:win32:all'
  ]);

```
## Options

See the `electron-packager` [options](https://github.com/maxogden/electron-packager#usage).

## License

MIT © [Marani Matias Ezequiel](maranimatias@gmail.com)
