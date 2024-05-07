import { createSlice } from "@reduxjs/toolkit";
import { GlobalMyPageState} from "../../types/types";

export const initialMyPageState: GlobalMyPageState = {
  myFavourites: {
    favouriteBooks: [],
    favouriteAuthors: [],
  },
  myReadBooksInfo: [],
};

const myPageSlice = createSlice({
    name: "myPageSlice",
    initialState: initialMyPageState,
    reducers:{},
});

export default myPageSlice.reducer;