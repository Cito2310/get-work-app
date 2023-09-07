import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
    currentSearch: string;
    isBeingSearched: boolean;
}

const initialState: SearchState = {
    currentSearch: "",
    isBeingSearched: false
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {

        changeCurrentSearch: ( state, action: { payload: string }) => {
            if ( state.currentSearch.length === 0 ) { state.isBeingSearched = false }
            if ( state.currentSearch.length > 0 ) { state.isBeingSearched = true }

            state.currentSearch = action.payload;
        },

    }

})


export const {
    changeCurrentSearch

} = searchSlice.actions;
