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

import getBookDetails from "../../../../utils/getBookDetails";

const SearchedBookPage = () => {
  const searchresult = useSelector(
    (state: RootState) => state.searchResultStore.books
  );
  const myPageStore = useSelector((state: RootState) => state.myPageStore);
  const dispatch = useDispatch();

  const params = useParams<{ foundId: string }>();
  //Hitta den klickade boken
  const thisBook: OneBook[] = searchresult.filter((book) => {
    return params.foundId === book.title;
  });
  //Hämta ut de delar som skall renderas från en utility-function. Kontorllerar även om de finns eller inte direkt från funktionen istället för här i koden
  const details = getBookDetails(thisBook[0]);

  if (thisBook.length === 0) {
    return <div className="SearchedBookPage"> Boken hittades inte</div>;
  }

  return (
    <div className="SearchedBookPage">
      <div className="book-img">
        <img src={details.cover_i} alt="bild" />
      </div>
      <div className="book-info" key={details.key}>
        <h3>Titel:</h3>
        <p>{details.title}</p>
        <h4>Författare:</h4>
        <p>{details.author}</p>
        <h4>Första mening:</h4>
        <p>{details.first_sentence}</p>
        <h4>Personer i boken:</h4>
        <p>{details.persons}</p>
        <h4>Utspelar sig:</h4>
        <p>{details.place}</p>
        <h4>Språk:</h4>
        <p>{details.language}</p>
        <h4>Genre:</h4>
        <p>{details.genre}</p>
        <h4>Antal sidor:</h4>
        <p>{details.numb_of_pages}</p>
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
