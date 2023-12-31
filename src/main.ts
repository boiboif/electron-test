import { app, BrowserWindow, globalShortcut, ipcMain, utilityProcess } from "electron";
import path from "path";

utilityProcess.fork(path.join(__dirname, "./server.js"));

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    autoHideMenuBar: true,
    frame: false,
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  const WM_INITMENU = 0x0116;
  mainWindow.hookWindowMessage(WM_INITMENU, () => {
    mainWindow.setEnabled(false);
    mainWindow.setEnabled(true);
  });

  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('maximize')
  })
  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('unmaximize')
  })

  // 注册一个'CommandOrControl+X' 快捷键监听器
  globalShortcut.register("CommandOrControl+F12", () => {
    mainWindow.webContents.openDevTools();
  });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  return mainWindow;
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  const mainWindow = createWindow();
  ipcMain.handle("ping", () => "pong");
  ipcMain.handle("quit", () => app.quit());
  ipcMain.handle("minimize", () => mainWindow.minimize());
  ipcMain.handle("toogleMaximize", () => (mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()));
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
