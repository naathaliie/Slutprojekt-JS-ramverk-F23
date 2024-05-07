import { useParams } from "react-router-dom";
import "./SearchedBookPage.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { OneBook } from "../../../types/types";

const SearchedBookPage = () => {
  const searchresult = useSelector(
    (state: RootState) => state.searchResult.books
  );
  const params = useParams<{ foundId: string }>();
  console.log("useparams", params.foundId);
  console.log("Från seearchResult = ", searchresult);

  const thisBook: OneBook[] = searchresult.filter((book) => {
    return params.foundId === book.title;
  });

  console.log("thisBook ger mig = ", thisBook);

  return (
    <div className="SearchedBookPage">
      {thisBook.map((book) => {
        return (
          <div>
            <h3>Titel: {book.title}</h3>
            <h6>Författare: {book.author_name}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default SearchedBookPage;
