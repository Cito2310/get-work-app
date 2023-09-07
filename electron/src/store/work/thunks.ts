import { WorkOfferExpand } from "../../../../types";
import { AppDispatch, RootState } from "../store"
import { addWorks } from "./workSlice";

export const startAddWorks = () => {
    return async( dispath: AppDispatch, getState: () => RootState ) => {

        const { data, date } = await window.electronAPI.getDataWorks();

        const dateParse = new Date(date).toLocaleDateString();
        const msDate = new Date(dateParse).getTime();

        const allUrl = getState().work.data.map( work => work.url );

        // @ts-ignore
        const dataWithStatusAndViewed: WorkOfferExpand[] = data.map( work => ({ 
            ...work, 
            viewed: false, 
            status: "none", 
            date: msDate,
        // }))
        })).filter( work => !allUrl.includes( work.url ) );

        dispath( addWorks( dataWithStatusAndViewed ) );
        
    }
}