import { WorkOfferExpand } from "../../../../types";
import { detectKeywords } from "../../helpers/detectKeywords";
import { AppDispatch, RootState } from "../store"
import { addWorks } from "./workSlice";

export const startAddWorks = () => {
    return async( dispath: AppDispatch, getState: () => RootState ) => {

        const { data, date } = await window.electronAPI.getDataWorks();
        const dateParse = new Date(date).toDateString();
        const msDate = new Date(dateParse).getTime();

        const allUrl = getState().work.data.map( work => work.url );

        // @ts-ignore
        const dataWithStatusAndViewed: WorkOfferExpand[] = data.map( work => ({ 
            ...work, 
            viewed: false, 
            status: "none", 
            date: msDate,
            includeKeyword: detectKeywords( work as WorkOfferExpand ),
        // }))
        })).filter( work => !allUrl.includes( work.url ) );

        const dataSort = dataWithStatusAndViewed.sort((a, b) => Number(b.includeKeyword) - Number(a.includeKeyword) )

        dispath( addWorks( dataSort ) );
        
    }
}