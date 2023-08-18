import { ipcNames } from "../types/ipcNames"

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    basicOnIpc: ( value: string ) => ipcRenderer.send('basic-on-ipc' as ipcNames, value),
    getDataWorks: ( value: string ) => ipcRenderer.invoke('get-data-works' as ipcNames, value)
})