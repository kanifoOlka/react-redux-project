import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface sortState {
    sort: null | string;
}

const initialState = {
    sort: null
}

export const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        setUsersSort: (state: sortState, action: PayloadAction<string>) => {
            state.sort = action.payload;
        }
    }
});

export const {
    setUsersSort
} = sortSlice.actions;

export default sortSlice.reducer;