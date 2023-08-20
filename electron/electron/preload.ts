import { ipcNames } from "../types/ipcNames"

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    redirect: ( url: string ) => ipcRenderer.send('redirect' as ipcNames, url),
    getDataWorks: () => ipcRenderer.invoke('get-data-works' as ipcNames)
})