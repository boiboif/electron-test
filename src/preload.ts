// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 除函数之外，我们也可以暴露变量
  ping: () => ipcRenderer.invoke("ping"),
});

contextBridge.exposeInMainWorld("customApi", {
  quit: () => ipcRenderer.invoke("quit"),
  minimize: () => ipcRenderer.invoke("minimize"),
  toogleMaximize: () => ipcRenderer.invoke("toogleMaximize"),
  onMaximize: (callback: () => void) => ipcRenderer.on("maximize", () => callback()),
  onUnmaximize: (callback: () => void) => ipcRenderer.on("unmaximize", () => callback()),
});
