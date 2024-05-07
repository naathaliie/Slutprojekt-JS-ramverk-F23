import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalMyPageState, OneBook, oneAuthor} from "../../types/types";

export const initialMyPageState: GlobalMyPageState = {
  myFavorites: {
    favoriteBooks: [],
    favoriteAuthors: [],
  },
  myReadBooksInfo: [],
};

const myPageSlice = createSlice({
    name: "myPageSlice",
    initialState: initialMyPageState,
    reducers:{
        addFavoritBook: (state, action: PayloadAction<OneBook[]>) => {
            state.myFavorites.favoriteBooks = action.payload;
        }
    },
});

export const {addFavoritBook} = myPageSlice.actions;
export default myPageSlice.reducer;