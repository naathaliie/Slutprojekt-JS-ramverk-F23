import { useContext } from "react";
import "./SearchPage.scss";
import { SearchContext } from "../../context/SearchContext/SearchContext";
import { Link, Outlet } from "react-router-dom";

const SearchPage = () => {
  const { globalSearchState } = useContext(SearchContext);

  return (
    <div className="SearchPage">
      <div className="found-books">
        <h3>Böcker</h3>
        {globalSearchState.books.map((book) => {
          return (
            <ul key={book.key}>
              <li>
                <Link
                  key={"foundId"}
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
      </div>
    </div>
  );
};

export default SearchPage;
