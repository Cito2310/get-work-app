import { createSlice } from '@reduxjs/toolkit';
import { JSONWorks, WorkOfferExpand } from '../../../../types/';

interface WorkState {
    data: WorkOfferExpand[];
    status: {
        dataExists: boolean;
    }
}

const initialState: WorkState = {
    data: [],
    status: {
        dataExists: false,
    }
}

export const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {

        setWorksLocalStorage: ( state, action: { payload: WorkState } ) => {
            state.data = action.payload.data;
            state.status = action.payload.status;
        },

        setWorks: ( state, action: { payload: WorkOfferExpand[] } ) => {
            state.data = action.payload;
            state.status.dataExists = true;

            window.localStorage.setItem("state-work", JSON.stringify(state));
        },

        updateStatus: ( state, action: { payload: { urlWork: string; newStatus: "none" | "rejected" | "accepted" }}) => {
            
            state.data = state.data.map( work => {
                if ( work.url === action.payload.urlWork ) return { ...work, status: action.payload.newStatus };
                return work;
            })

            window.localStorage.setItem("state-work", JSON.stringify( state ));

        },

        updateViewed: ( state, action: { payload: { urlWork: string; newState: boolean }} ) => {
            const { newState, urlWork } = action.payload;
            state.data = state.data.map( work => {
                if ( work.url === urlWork ) return { ...work, viewed: newState };
                return work;
            })

            window.localStorage.setItem("state-work", JSON.stringify( state ));
        }

    }

})


export const {
    setWorks,
    updateStatus,
    updateViewed,
    setWorksLocalStorage

} = workSlice.actions;
