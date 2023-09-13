export class Database {
    // METODO: Obtener base de datos
    async get( objData: { nameFile: string } ): Promise<any> {
        const { nameFile } = objData;
        const data = await window.electronAPI.dbGet({ nameFile });
        return data;
    }
    
    // METODO: Guardar en la base de datos
    async save( objData: { nameFile: string, data: string } ): Promise<void> {
        const { nameFile, data } = objData;
        await window.electronAPI.dbSave({ nameFile, data });
    }
}