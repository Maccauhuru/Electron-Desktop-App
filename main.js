const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

//initialize win
let win;

createWindow = () => {
    //load the browser window
    win = new BrowserWindow({ width: 800, height: 600, icon: __dirname + '/img/icon.jpg' });

    //load the index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //open devtools
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    })
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// On macOS it is common for applications and their menu bar
// to stay active until the user quits explicitly with Cmd + Q
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});