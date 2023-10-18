import { createSlice } from '@reduxjs/toolkit';
import { WorkOfferExpand } from '../../../../types/';
import { dbSaveWorkState } from '../../helpers/dbSaveWorkState';

export interface WorkState {
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

        setWorks: ( stateWork, action: { payload: WorkState } ) => {
            stateWork.data = action.payload.data;
            stateWork.status = action.payload.status;
        },

        addWorks: ( state, action: { payload: WorkOfferExpand[] } ) => {
            state.status.dataExists = true;

            // ORDENAR DATA - Primero los que incluyen palabras claves
            const newData = [ ...state.data, ...action.payload ];
            state.data = newData.sort(( a, b ) => Number(b.includeKeyword) - Number(a.includeKeyword) );

            dbSaveWorkState( state );
        },

        updateStatus: ( state, action: { payload: { urlWork: string; newStatus: "none" | "rejected" | "accepted" }}) => {
            
            state.data = state.data.map( work => {
                if ( work.url === action.payload.urlWork ) return { ...work, status: action.payload.newStatus };
                return work;
            })

            dbSaveWorkState( state );
        },

        updateViewed: ( state, action: { payload: { urlWork: string; newState: boolean }} ) => {
            const { newState, urlWork } = action.payload;
            state.data = state.data.map( work => {
                if ( work.url === urlWork ) return { ...work, viewed: newState };
                return work;
            })

            dbSaveWorkState( state );
        }

    }

})


export const {
    addWorks,
    updateStatus,
    updateViewed,
    setWorks

} = workSlice.actions;
