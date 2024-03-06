import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        { id: Math.random(), text: 'Second record', isCompleted: true },
        { id: Math.random(), text: 'First record', isCompleted: false }
    ]
}

const recordsSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {
        addRecord: (state, action) => {
            const newRecord = action.payload;
            state.items.unshift(newRecord);
        },
        toggleCompletion: (state, action) => {
            const id = action.payload;
            const record = state.items.find(record => record.id === id);
            if (record) {
                record.isCompleted = !record.isCompleted;
            }
        }
    }
})

export const recordsActions = recordsSlice.actions;
export default recordsSlice;