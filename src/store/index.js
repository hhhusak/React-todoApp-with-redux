/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import recordsSlice from "./recordsSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
    reducer: {
        records: recordsSlice.reducer,
        filter: filterSlice.reducer
    }
})

export default store;