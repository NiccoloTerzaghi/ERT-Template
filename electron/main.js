const { app, BrowserWindow } = require('electron')
const path = require('path')

const isDev = require('electron-is-dev');
let mainWin

const createWindow = () => {
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      contextIsolation: true,
      enableRemoteModule: false,
      disableBlinkFeatures: "Auxclick",
      preload: path.join(__dirname, 'preload.js'),
    }
  })


  if (isDev) {
    mainWin.loadURL("http://localhost:3000")
  } else {
    mainWin.loadFile(path.join(__dirname, '../index.html'))
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.whenReady().then(() => {
  createWindow()
  // if (isDev) mainWin.webContents.openDevTools() //!dev tools on start

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})