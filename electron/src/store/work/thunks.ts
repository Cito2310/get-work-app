import { AppDispatch, RootState } from "../store"
import { addWorks, setWorks } from "./workSlice";

export const startGetWorks = () => {
    return async( dispath: AppDispatch, getState: () => RootState ) => {

        const data = await window.electronAPI.getDataWorks();
        dispath( setWorks( data ) );
    }
}

export const startAddWorks = () => {
    return async( dispath: AppDispatch, getState: () => RootState ) => {

        const data = await window.electronAPI.getDataWorks();
        dispath( addWorks( data ) );
    }
}