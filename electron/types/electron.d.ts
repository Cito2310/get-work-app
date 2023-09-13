import { JSONWorks } from "../../types/jsonWorks"

declare global {
    interface Window {
        electronAPI: {
            getDataWorks:   () => Promise<JSONWorks>,

            redirect:       ( url: string ) => void,

            // Database
            dbGet:          ( objData: { nameFile: string }) => Promise<any | null>,
            dbSave:         ( objData: { nameFile: string, data: string }) => Promise<void>,
        }
    }
}

export {}