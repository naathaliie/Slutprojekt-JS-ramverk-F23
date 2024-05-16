import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  GlobalMyPageState,
  OneBook,
  OneReadBook,
  oneAuthor,
} from "../../types/types";

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
  reducers: {
    addFavoritBook: (state, action: PayloadAction<OneBook[]>) => {
      state.myFavorites.favoriteBooks.push(...action.payload);
    },
    removeFavoritBook: (state, action: PayloadAction<string>) => {
      state.myFavorites.favoriteBooks = state.myFavorites.favoriteBooks.filter(
        (book) => {
          return book.key !== action.payload;
        }
      );
    },
    addFavoritAuthor: (state, action: PayloadAction<oneAuthor[]>) => {
      state.myFavorites.favoriteAuthors.push(...action.payload);
    },
    removeFavoritAuthor: (state, action: PayloadAction<string>) => {
      state.myFavorites.favoriteAuthors =
        state.myFavorites.favoriteAuthors.filter((author) => {
          return author.key !== action.payload;
        });
    },
    addReadBook: (state, action: PayloadAction<OneReadBook[]>) => {
      state.myReadBooksInfo.push(...action.payload);
    },
    addRewiev: (state, action: PayloadAction<OneReadBook[]>) => {
      state.myReadBooksInfo = state.myReadBooksInfo.map((book) => {
        if (book.key === action.payload[0].key) {
          // Om bokens nyckel matchar, ersätt den med hela payload-objektet
          return action.payload[0];
        } else {
          // Om bokens nyckel inte matchar, behåll boken oförändrad
          return book;
        }
      });
    },
    removeReadBook: (state, action: PayloadAction<string>) => {
       state.myReadBooksInfo = state.myReadBooksInfo.filter((book)=>{return book.key !== action.payload}); 
    },
  },
});

export const {
  addFavoritBook,
  removeFavoritBook,
  addFavoritAuthor,
  removeFavoritAuthor,
  addReadBook,
  removeReadBook,
  addRewiev,
} = myPageSlice.actions;
export default myPageSlice.reducer;


/* .map((book) => {
            const updatedBook = action.payload.find((updated) => updated.key === book.key);
            return updatedBook ? updatedBook : book;
          }); */