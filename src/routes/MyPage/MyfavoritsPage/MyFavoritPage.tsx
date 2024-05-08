import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import {
  removeFavoritAuthor,
  removeFavoritBook,
} from "../../../state/myPage/myPageSlice";

const MyFavoritPage = () => {
  const dispatch = useDispatch();

  const favoritBooks = useSelector(
    (state: RootState) => state.myPageStore.myFavorites.favoriteBooks
  );

  const favoritAuthors = useSelector(
    (state: RootState) => state.myPageStore.myFavorites.favoriteAuthors
  );

  console.log("holabandola = ", favoritBooks);
  return (
    <div className="MyFavoritPage">
      <div className="favorit-books">
        <p>Mina favorit böcker</p>
        {favoritBooks.map((b, index) => {
          return (
            <div key={index}>
              <p>{b.title}</p>
              <button
                onClick={() => {
                  console.log("Ta bort som favorit");
                  dispatch(removeFavoritBook(b.key));
                }}
              >
                Ta bort
              </button>
            </div>
          );
        })}
      </div>
      <div className="favorit-authors">
        <p>Mina favorit författare</p>
        {favoritAuthors.map((a, index) => {
          return (
            <div key={index}>
              <p>{a.name}</p>
              <button
                onClick={() => {
                  console.log("Ta bort som favorit");
                  dispatch(removeFavoritAuthor(a.key));
                }}
              >
                Ta bort
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyFavoritPage;

/* Fortsätt med att försöka få din sparade favorit att skrivas ut */
