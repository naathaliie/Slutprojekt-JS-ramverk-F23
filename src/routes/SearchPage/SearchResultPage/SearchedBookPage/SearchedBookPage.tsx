import { useParams } from "react-router-dom";
import "./SearchedBookPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { OneBook } from "../../../../types/types";
import {
  addFavoritBook,
  addReadBook,
  removeFavoritBook,
  removeReadBook,
} from "../../../../state/myPage/myPageSlice";

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
        <h4>Författare:</h4>
        <p> {thisBook[0].author_name}</p>
        {thisBook[0].first_sentence ? (
          <>
            <h4>Första mening:</h4>
            <p>{thisBook[0].first_sentence[0]}</p>
          </>
        ) : (
          <h4>Första mening: -</h4>
        )}
        {thisBook[0].person ? (
          <>
            <h4>Personer i boken:</h4>
            <p>{thisBook[0].person.join(", ")}</p>
          </>
        ) : (
          <h4>Personer i boken: -</h4>
        )}
        {thisBook[0].place ? (
          <>
            <h4>Utspelar sig:</h4>
            <p>{thisBook[0].place.join(", ")}</p>
          </>
        ) : (
          <h4>Utspelar sig: -</h4>
        )}

        <h4>Språk:</h4>
        <p>{thisBook[0].language.join(", ")}</p>
        <h4>Genre:</h4>
        <p>{thisBook[0].subject.slice(0, 4).join(", ")}</p>
        {thisBook[0].number_of_pages_median !== undefined ? (
          <>
            <h4>Antal sidor:</h4>
            <p>{thisBook[0].number_of_pages_median}</p>
          </>
        ) : (
          <h4>Antal sidor: -</h4>
        )}
      </div>
      <div className="add-to-readBooks">
        {myPageStore.myReadBooksInfo.find((book) => {
          return book.key === thisBook[0].key;
        }) ? (
          <>
            <span
              className="emoji-icon read-book checked"
              onClick={() => {
                console.log("Ta bort som läst");
                dispatch(removeReadBook(thisBook[0].key));
              }}
            >
              ✅
            </span>
          </>
        ) : (
          <span
            className="emoji-icon read-book notChecked"
            onClick={() => {
              console.log("Lägg till som läst");
              dispatch(
                addReadBook([
                  {
                    key: thisBook[0].key,
                    title: thisBook[0].title,
                    pages:
                      thisBook[0].number_of_pages_median !== undefined
                        ? thisBook[0].number_of_pages_median
                        : 0,
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

        {myPageStore.myFavorites.favoriteBooks.find((book) => {
          return book.key === thisBook[0].key;
        }) ? (
          <>
            <span
              className="emoji-icon favorit checked"
              onClick={() => {
                console.log("Lägg till som favorit");
                dispatch(removeFavoritBook(thisBook[0].key));
              }}
            >
              ❤️
            </span>
          </>
        ) : (
          <span
            className="emoji-icon favorit notChecked"
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
