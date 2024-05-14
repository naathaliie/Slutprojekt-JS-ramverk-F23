import "./SearchPage.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { CircularProgress } from "@mui/material";

const SearchPage = () => {
  const searchResult = useSelector(
    (state: RootState) => state.searchResultStore
  );

  return (
    <div className="SearchPage">
      {searchResult.loading ? (
        <CircularProgress />
      ) : (
        <>
          {" "}
          <div className="found-books">
            <h3>Böcker</h3>
            <ul>
              {searchResult.books.map((book) => {
                return (
                  <li key={book.key}>
                    <Link
                      key={book.key}
                      to={`/searchPage/book/${book.title}`}
                      className="link"
                    >
                      {book.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="found-authors">
            <h3>Författare</h3>
            <ul>
              {searchResult.authors.map((author) => {
                return (
                  <li key={author.key}>
                    <Link
                      key={author.key}
                      to={`/searchPage/author/${author.name}`}
                      className="link"
                    >
                      {author.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
