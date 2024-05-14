import { useParams } from "react-router-dom";
import "./SearchedBookPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { OneBook } from "../../../types/types";
import {
  addFavoritBook,
  addReadBook,
  removeFavoritBook,
  removeReadBook,
} from "../../../state/myPage/myPageSlice";
import MyFavoritPage from "../../MyPage/MyfavoritsPage/MyFavoritPage";

const SearchedBookPage = () => {
  const searchresult = useSelector(
    (state: RootState) => state.searchResultStore.books
  );
  const myPageStore = useSelector((state: RootState) => state.myPageStore);
  const dispatch = useDispatch();

  const params = useParams<{ foundId: string }>();
  /* console.log("useparams", params.foundId);
  console.log("Från seearchResult = ", searchresult); */

  const thisBook: OneBook[] = searchresult.filter((book) => {
    return params.foundId === book.title;
  });

  console.log("thisBook ger mig = ", thisBook);

  console.log("Mina favorit böcker", myPageStore.myFavorites.favoriteBooks);
  console.log("Mina lästa böcker", myPageStore.myReadBooksInfo);

  return (
    <div className="SearchedBookPage">
      <div className="book-img">
        <img
          src={`https://covers.openlibrary.org/b/isbn/${thisBook[0].isbn[0]}-M.jpg`}
        />
      </div>
      <div className="book-info" key={thisBook[0].key}>
        <h3>Titel:</h3>
        <p>{thisBook[0].title}</p>
        <h6>Författare:</h6>
        <p> {thisBook[0].author_name}</p>
        <h6>Första mening:</h6>
        <p>{thisBook[0].first_sentence[0]}</p>
        <h6>Personer i boken:</h6>
        <p>{thisBook[0].person.join(", ")}</p>
        <h6>Utspelar sig:</h6>
        <p>{thisBook[0].place.join(", ")}</p>
        <h6>Språk:</h6>
        <p>{thisBook[0].language.join(", ")}</p>
        <h6>Genre:</h6>
        <p>{thisBook[0].subject.slice(0, 5).join(", ")}</p>
      </div>
      <div className="add-to-readBooks">
        {myPageStore.myReadBooksInfo.find((book) => {
          return book.key === thisBook[0].key;
        }) ? (
          <>
            <span
              onClick={() => {
                console.log("Ta bort som läst");
                dispatch(removeReadBook(thisBook[0].key));
              }}
            >
              ✅
            </span>
            <p>Läst!</p>
          </>
        ) : (
          <span
            onClick={() => {
              console.log("Lägg till som läst");
              dispatch(
                addReadBook([
                  {
                    key: thisBook[0].key,
                    title: thisBook[0].title,
                    pages: thisBook[0].number_of_pages_median,
                    likes: "",
                    review: "",
                  },
                ])
              );
            }}
          >
            🟩
          </span>
        )}
      </div>
      <div className="add-to-favorits">
        {myPageStore.myFavorites.favoriteBooks.find((book) => {
          return book.key === thisBook[0].key;
        }) ? (
          <>
            <span
              onClick={() => {
                console.log("Lägg till som favorit");
                dispatch(removeFavoritBook(thisBook[0].key));
              }}
            >
              ❤️
            </span>
            <p>Sparad i favoriter</p>
          </>
        ) : (
          <span
            onClick={() => {
              console.log("Lägg till som favorit");
              dispatch(addFavoritBook([thisBook[0]]));
            }}
          >
            🤍
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchedBookPage;
