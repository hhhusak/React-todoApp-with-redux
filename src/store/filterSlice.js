import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: ['All', 'Completed', 'Current']
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleFilter: (state) => {
            state.items.push(state.items.shift());
        }
    }
})

export const filterActions = filterSlice.actions;
export default filterSlice;