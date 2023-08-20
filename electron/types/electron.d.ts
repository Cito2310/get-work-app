import { JSONWorks } from "../../types/jsonWorks"

declare global {
    interface Window {
        electronAPI: {
            redirect: ( url: string ) => unknown,
            getDataWorks: () => Promise<JSONWorks>,
        }
    }
}

export {}