import { useParams } from "react-router-dom";
import "./SearchedBookPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { OneBook } from "../../../types/types";
import { addFavoritBook } from "../../../state/myPage/myPageSlice";

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

  /*   console.log("thisBook ger mig = ", thisBook); */

  console.log("Mina favorit böcker", myPageStore.favoriteBooks);

  return (
    <div className="SearchedBookPage">
      {thisBook.map((book) => {
        return (
          <div key={book.key}>
            <h3>Titel: {book.title}</h3>
            <h6>Författare: {book.author_name}</h6>
            <button
              onClick={() => {
                console.log("Lägg till som favorit");
                dispatch(addFavoritBook(thisBook));
              }}
            >
              Spara som favorit{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SearchedBookPage;
