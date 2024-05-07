import { createSlice } from "@reduxjs/toolkit";
import { GlobalSearchState } from "../../types/types";

export const initialSearchResultState: GlobalSearchState = {
    authors: [],
    books: [],
  };

  const searchResultSlice = createSlice({
    name: "searchResultSlice",
    initialState: initialSearchResultState,
    reducers: {
      searchresult: (state, action)=>{
        state = action.payload
      }
    },
  });

  export default searchResultSlice.reducer;