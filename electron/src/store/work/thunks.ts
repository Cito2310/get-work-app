import { AppDispatch, RootState } from "../store"
import { setWorks } from "./workSlice";

export const startGetWorks = () => {
    return async( dispath: AppDispatch, getState: () => RootState ) => {

        const data = await window.electronAPI.getDataWorks();
        dispath( setWorks( data ) );
    }
}