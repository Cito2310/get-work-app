import { dialog, ipcMain } from 'electron';

import { ipcNames } from '../types/ipcNames';
import { readFileSync } from 'fs';

export const ipConnection = () => {
    ipcMain.handle("get-data-works" as ipcNames, async(e, args)=>{
        const filePath = (await dialog.showOpenDialog({ properties: ["openFile"], title: "Seleccione los datos" })).filePaths[0];
        const data = readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    })
}