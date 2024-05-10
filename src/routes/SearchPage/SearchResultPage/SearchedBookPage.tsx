import { useParams } from "react-router-dom";
import "./SearchedBookPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { OneBook } from "../../../types/types";
import {
  addFavoritBook,
  removeFavoritBook,
} from "../../../state/myPage/myPageSlice";
import MyFavoritPage from "../../MyPage/MyfavoritsPage/MyFavoritPage";

const SearchedBookPage = () => {
  const searchresult = useSelector(
    (state: RootState) => state.searchResultStore.books
  );
  const myPageStore = useSelector(
    (state: RootState) => state.myPageStore.myFavorites
  );
  const dispatch = useDispatch();

  const params = useParams<{ foundId: string }>();
  /* console.log("useparams", params.foundId);
  console.log("Från seearchResult = ", searchresult); */

  const thisBook: OneBook[] = searchresult.filter((book) => {
    return params.foundId === book.title;
  });

  console.log("thisBook ger mig = ", thisBook);

  console.log("Mina favorit böcker", myPageStore.favoriteBooks);

  return (
    <div className="SearchedBookPage">
      <div className="book-img">bild</div>
      <div className="book-info">
        <div key={thisBook[0].key}>
          <h3>Titel: {thisBook[0].title}</h3>
          <h6>Författare: {thisBook[0].author_name}</h6>

          {myPageStore.favoriteBooks.find((book) => {
            return book.key === thisBook[0].key;
          }) ? (
            <span
              onClick={() => {
                console.log("Lägg till som favorit");
                dispatch(removeFavoritBook(thisBook[0].key));
              }}
            >
              ❤️
            </span>
          ) : (
            <span
              onClick={() => {
                console.log("Lägg till som favorit");
                dispatch(addFavoritBook(thisBook));
              }}
            >
              🤍
            </span>
          )}
        </div>
      </div>

      <MyFavoritPage />
    </div>
  );
};

export default SearchedBookPage;
