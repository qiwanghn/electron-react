'use strict';

var _app = require('app');

var _app2 = _interopRequireDefault(_app);

var _browserWindow = require('browser-window');

var _browserWindow2 = _interopRequireDefault(_browserWindow);

var _crashReporter = require('crash-reporter');

var _crashReporter2 = _interopRequireDefault(_crashReporter);

var _electronConnect = require('electron-connect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainWindow = null;
if (process.env.NODE_ENV === 'develop') {
    _crashReporter2.default.start();
}

_app2.default.on('window-all-closed', function () {
    _app2.default.quit();
});

_app2.default.on('ready', function () {
    mainWindow = new _browserWindow2.default({ width: 580, height: 365 });
    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');

    _electronConnect.client.create(mainWindow);
});