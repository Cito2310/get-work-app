import { ipcNames } from "../types/ipcNames"

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {

    getDataWorks:   () => ipcRenderer.invoke('get-data-works' as ipcNames),
    
    redirect:       ( url: string ) => ipcRenderer.send('redirect' as ipcNames, url),
    
    // Database
    dbGet:          ( objData: { nameFile: string }) => ipcRenderer.invoke('db-get' as ipcNames, objData),
    dbSave:         ( objData: { nameFile: string, data: string }) => ipcRenderer.send('db-save' as ipcNames, objData),

})