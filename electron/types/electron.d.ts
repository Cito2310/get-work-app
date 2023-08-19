import { JSONWorks } from "../../types/jsonWorks"

declare global {
    interface Window {
        electronAPI: {
            basicOnIpc: ( value: string ) => unknown,
            getDataWorks: () => Promise<JSONWorks>,
        }
    }
}

export {}