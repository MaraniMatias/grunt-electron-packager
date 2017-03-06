rm -d -r -f ./test/app
git clone https://github.com/electron/electron-quick-start ./test/app
npm install electron --save-dev
npm install electron-packager --save-dev
npm install grunt --save-dev
# npm install grunt-electron-packager --save-dev
cd ./test; grunt
