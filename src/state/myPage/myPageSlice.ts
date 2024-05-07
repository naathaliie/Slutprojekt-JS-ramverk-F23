import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalMyPageState, OneBook} from "../../types/types";

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
            state.myFavorites.favoriteBooks.push(action.payload);
        },
        removeFavoritBook: (state, action: PayloadAction<string>)=> {
            state.myFavorites.favoriteBooks = state.myFavorites.favoriteBooks.filter((book)=>{return book.key !== action.payload});
        },
    },
});

export const {addFavoritBook} = myPageSlice.actions;
export default myPageSlice.reducer;