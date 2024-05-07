import "./SearchPage.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const SearchPage = () => {
  const searchResult = useSelector(
    (state: RootState) => state.searchResultStore
  );

  return (
    <div className="SearchPage">
      <div className="found-books">
        <h3>Böcker</h3>
        {searchResult.books.map((book) => {
          return (
            <ul key={book.key}>
              <li>
                <Link
                  key={book.key}
                  to={`/searchPage/book/${book.title}`}
                  className="link"
                >
                  {book.title}
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
      <div className="found-authors">
        <h3>Författare</h3>
        {searchResult.authors.map((author) => {
          return (
            <ul key={author.key}>
              <Link key={author.key} to={`/searchPage/author/${author.name}`}>
                <li> {author.name}</li>
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
