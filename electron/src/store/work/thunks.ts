import { WorkOfferExpand } from "../../../../types";
import { AppDispatch, RootState } from "../store"
import { setWorks } from "./workSlice";

export const startGetWorks = () => {
    return async( dispath: AppDispatch, getState: () => RootState ) => {

        const { data } = await window.electronAPI.getDataWorks();
        const dataWithStatusAndViewed: WorkOfferExpand[] = data.map( work => ({ ...work, viewed: false, status: "none" }));

        dispath( setWorks( dataWithStatusAndViewed ) );
        
    }
}