import app from 'app'
import BrowserWindow from 'browser-window'
import crashReporter from 'crash-reporter'
import { client } from 'electron-connect'

let mainWindow = null;
if(process.env.NODE_ENV === 'develop'){
    crashReporter.start();
}

app.on('window-all-closed', () => {
    app.quit();
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 580, height: 365});
    mainWindow.loadUrl('file://' + __dirname + '/app/index.html');

    client.create(mainWindow);
});