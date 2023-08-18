import { JobOffer } from "./jobOffer"

declare global {
    interface Window {
        electronAPI: {
            basicOnIpc: ( value: string ) => unknown,
            getDataWorks: () => Promise<JobOffer[]>,
        }
    }
}

export {}