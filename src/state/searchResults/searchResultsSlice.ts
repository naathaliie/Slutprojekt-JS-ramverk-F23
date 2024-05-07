import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalSearchState } from "../../types/types";

export const initialSearchResultState: GlobalSearchState = {
    authors: [],
    books: [],
  };

  const searchResultSlice = createSlice({
    name: "searchResultSlice",
    initialState: initialSearchResultState,
    reducers: {
      setSearchResult: (state, action: PayloadAction<GlobalSearchState>)=>{
        state.authors = action.payload.authors;
        state.books = action.payload.books;
      }
    },
  });

  export const {setSearchResult} = searchResultSlice.actions;
  export default searchResultSlice.reducer;
  