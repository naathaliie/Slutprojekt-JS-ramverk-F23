import { useContext } from "react";
import "./SearchPage.scss";
import { SearchContext } from "../../context/SearchContext/SearchContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const SearchPage = () => {
  const { globalSearchState } = useContext(SearchContext);
  const searchResult = useSelector((state: RootState) => state.searchResult);

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
                  📘 {book.title}
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
              <li> {author.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
