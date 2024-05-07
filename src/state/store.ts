import { configureStore } from "@reduxjs/toolkit";
import searchResultReducer from "./searchResults/searchResultsSlice";

export const store = configureStore({
    reducer:{
        searchResult: searchResultReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 