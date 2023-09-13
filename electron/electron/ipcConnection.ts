import { dialog, ipcMain, shell } from 'electron';

import { ipcNames } from '../types/ipcNames';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

export const ipConnection = () => {

    ipcMain.handle("get-data-works" as ipcNames, async(e, args)=>{
        const filePath = (await dialog.showOpenDialog({ properties: ["openFile"], title: "Seleccione los datos" })).filePaths[0];
        const data = readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    })


    ipcMain.on("redirect" as ipcNames, async(e, url)=>{
        shell.openExternal(url);
    })


    ipcMain.handle("db-get" as ipcNames, async(e, args: { nameFile: string })=>{
        if ( !existsSync(`./data/${args.nameFile}.json`) ) return(null);
        return JSON.parse(readFileSync( `./data/${args.nameFile}.json`, "utf-8" ));
    })


    ipcMain.on("db-save" as ipcNames, async(e, args: { nameFile: string, data: string })=>{
        if (!existsSync("./data")) mkdirSync("./data");
        writeFileSync(`./data/${args.nameFile}.json`, args.data);
    })

}