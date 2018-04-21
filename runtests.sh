#!/usr/bin/env sh
cd ./test
rm -drf ./node_modules
rm -drf ./app
git clone https://github.com/electron/electron-quick-start ./app
npm install electron --save-dev
npm install electron-packager --save-dev
npm install grunt --save-dev
# npm install grunt-electron-packager --save-dev
grunt
