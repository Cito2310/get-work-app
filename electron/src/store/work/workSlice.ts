import { createSlice } from '@reduxjs/toolkit';
import { JSONWorks, WorkOfferExpand } from '../../../../types/';

interface WorkState {
    data: WorkOfferExpand[];
    date: Date | null;
    id: string | null;
    status: {
        dataExists: boolean;
    }
}

const initialState: WorkState = {
    data: [],
    date: null,
    id: null,
    status: {
        dataExists: false,
    }
}

export const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {

        setWorksLocalStorage: ( state, action: { payload: WorkState } ) => {
            const { data, date, id, status } = action.payload;
            state.data = data;
            state.date = date;
            state.id = id;
            state.status = status;
        },

        setWorks: ( state, action: { payload: JSONWorks } ) => {
            const { data, date, id } = action.payload;
            const dataWithStatus: WorkOfferExpand[] = data.map( work => ({ ...work, status: "none", viewed: false }))
            
            state.data = dataWithStatus;
            state.date = new Date( date );
            state.id = id;
            state.status.dataExists = true;

            window.localStorage.setItem("state-work", JSON.stringify(state));
        },

        updateStatus: ( state, action: { payload: {
            urlWork: string;
            newStatus: "none" | "rejected" | "accepted";

        }}) => {
            
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
