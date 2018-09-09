#!/usr/bin/env sh
npm install
cd ./test
rm -drf ./node_modules
rm -drf ./app
git clone https://github.com/electron/electron-quick-start ./app
npm install
grunt
