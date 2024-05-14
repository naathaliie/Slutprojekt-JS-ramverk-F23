import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalSearchState } from "../../types/types";

export const initialSearchResultState: GlobalSearchState = {
    authors: [],
    books: [],
    loading: null,
  };

  const searchResultSlice = createSlice({
    name: "searchResultSlice",
    initialState: initialSearchResultState,
    reducers: {
      setSearchResult: (state, action: PayloadAction<GlobalSearchState>)=>{
        state.authors = action.payload.authors;
        state.books = action.payload.books;
      },
      setLoading: (state, action: PayloadAction<boolean>) =>  {
        state.loading = action.payload;
      },
    },
  });

  export const {setSearchResult, setLoading} = searchResultSlice.actions;
  export default searchResultSlice.reducer;
  