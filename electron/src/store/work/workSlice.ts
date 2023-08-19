import { JSONWorks } from './../../../../types/jsonWorks';
import { WorkOfferWithStatus } from './../../../../types/workOffer';
import { createSlice } from '@reduxjs/toolkit';

interface workState {
    data: WorkOfferWithStatus[];
    date: Date | null;
    id: string | null;
    status: {
        dataExists: boolean;
    }
}

const initialState: workState = {
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

        setWorks: ( state, action: { payload: JSONWorks } ) => {
            const { data, date, id } = action.payload;
            const dataWithStatus: WorkOfferWithStatus[] = data.map( (work) => ({ ...work, status: "none" }));

            state.data = dataWithStatus;
            state.date = new Date( date );
            state.id = id;
            state.status.dataExists = true;

            window.localStorage.setItem("state-work", JSON.stringify(state));
        },

        addWorks: ( state, action: { payload: JSONWorks } ) => {
            const { data, date, id } = action.payload;
            const dataWithStatus: WorkOfferWithStatus[] = data.map( (work) => ({ ...work, status: "none" }));

            state.data.push( ...dataWithStatus );
            state.date = new Date( date );
            state.id = id;

            window.localStorage.setItem("state-work", JSON.stringify(state));
        },

        updateStatus: ( state, action: { payload: {
            urlWork: string,
            newStatus: "none" | "rejected" | "accepted" ,

        }}) => {
            
            const work = state.data.find( work => work.url === action.payload.urlWork );
            work?.status === action.payload.newStatus;

        }

    }

})


export const {
    setWorks,
    addWorks,
    updateStatus

} = workSlice.actions;
