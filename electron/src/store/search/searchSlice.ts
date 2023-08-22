import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
    currentSearch: string;
}

const initialState: SearchState = {
    currentSearch: ""
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {

        changeCurrentSearch: ( state, action: { payload: string }) => {
            state.currentSearch = action.payload;
        },

    }

})


export const {
    changeCurrentSearch

} = searchSlice.actions;
