import { configureStore } from "@reduxjs/toolkit";
import searchResultReducer from "./searchResults/searchResultsSlice";
import myPageReducer from "./myPage/myPageSlice";

export const store = configureStore({
    reducer:{
        searchResultStore: searchResultReducer,
        myPageStore: myPageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 