# grunt-electron-packager

Grunt task to create packages [Electron](http://electron.atom.io) using  [`electron-packager`](https://github.com/maxogden/electron-packager)
This is mostly intended for those that have an existing grunt setup and want to integrate Electron app packaging.
It allows you to create custom options.
This uses the installed version of electron-packager.

## Install

```
$ npm install grunt-electron-packager --save-dev
```

## devDependencies

These dependencies must be installed.

```bash
$ npm install grunt --save-dev
$ npm install load-grunt-tasks --save-dev
$ npm install electron --save-dev
$ npm install electron-packager --save-dev
```

## Usage

### Use with task-specific options

```javascript
const os = require('os');
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    'electron-packager': {
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
          electronVersion: '1.8.4',
          asar      : true,
          overwrite : true
        }
      },
      buildCustom: {
        options: function (name,platform,arch) {
          return {
            platform ,
            arch,
            dir       : './app',
            out       : './build',
            icon      : './app/recursos/icon',
            name,
            ignore    : 'bower.json',
            asar      : true,
            overwrite : true
          }
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-electron-packager');

  grunt.registerTask('build', [
    'electron-packager:build',
    'electron-packager:buildCustom:buildCustomName:win32:all'
  ]);
```

### Use with global options for tasks

```javascript
const os = require('os');
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

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
        name: 'nameBuild-test',
        arch: os.arch(),
        platform: os.platform(),
        // set specific version of electron, If it isn't using the electron's version on your deps.
        electronVersion: '1.8.4',
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
    }
  });
  grunt.loadNpmTasks('grunt-electron-packager');

  grunt.registerTask('build', [
    'electron-packager',
  ]);
```

```javascript
const os = require('os');
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    'electron-packager': {
      options: {
        asar: true,
        dir: './app',
        // icon: './app/recursos/icon',
        ignore: 'bower.json',
        out: './build',
        overwrite: true
      },
      build: {
        arch: os.arch(),
        name: 'nameBuild-test',
        platform: os.platform(),
      },
      buildCustom: function (name, platform, arch) {
        return {
          arch,
          name,
          platform
        };
      }
    }
  });
  grunt.loadNpmTasks('grunt-electron-packager');

  grunt.registerTask('build', [
    'electron-packager',
  ]);
```

## Options

See the `electron-packager` [options](https://github.com/maxogden/electron-packager#usage).

## License

MIT © [Marani Matias Ezequiel](maranimatias@gmail.com)

> If you give me a star for my work, I will appreciate. It helps a lot and it's free: D
