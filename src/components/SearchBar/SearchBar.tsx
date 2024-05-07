import "./SearchBar.scss";
import axios from "axios";
import { fetchedData } from "../../types/types";
import { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../../context/SearchContext/SearchContext";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { setSearchResult } from "../../state/searchResults/searchResultsSlice";

const bookAPI = "https://openlibrary.org/search.json?title=";
const authorAPI = "https://openlibrary.org/search/authors.json?q=";

const SearchBar = () => {
  const { setGlobalSearchState } = useContext(SearchContext);
  const [inputTerm, setInputTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundBookData, setFoundBookData] = useState<fetchedData | null>(null);
  const [foundAuthorData, setFoundAuthorData] = useState<fetchedData | null>(
    null
  ); // ÄNDRA

  //För att få tillgång till globalstate-redux. Behövs inte här?
  const searchResult = useSelector((state: RootState) => state.searchResult);

  //För att få tillgång till ALLA!? reducers
  const dispatch = useDispatch();

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      console.log("searchTerm ändrades, du sökte på = ", searchTerm);

      try {
        const authorResponse = await axios.get(
          `${authorAPI}${searchTerm}&limit=10`
        );
        const authorData = authorResponse.data;

        const bookResponse = await axios.get(
          `${bookAPI}${searchTerm}&limit=10`
        );
        const bookData = bookResponse.data;

        if (!ignore) {
          setFoundBookData(bookData);
          setFoundAuthorData(authorData);
          /* setGlobalSearchState({
            authors: authorData.docs,
            books: bookData.docs,
          }); */
          dispatch(
            setSearchResult({ authors: authorData.docs, books: bookData.docs })
          );
        }
      } catch (error) {
        throw new Error("Blabla not working");
      }
    };

    if (searchTerm !== "") {
      fetchData();
    }

    return () => {
      ignore = true;
    };
  }, [searchTerm]);

  const handleChange = () => {
    if (inputRef.current !== null) {
      setInputTerm(inputRef.current.value);
    }
  };

  const handleClick = () => {
    setSearchTerm(inputTerm.trim().toLocaleLowerCase());
    setInputTerm("");
    inputRef.current?.focus();
  };

  foundBookData ? console.log("sliceData = ", searchResult.books) : "";
  foundBookData ? console.log("bookData = ", foundBookData) : "";
  foundAuthorData ? console.log("authorData = ", foundAuthorData) : "";

  return (
    <div className="SearchBar">
      <div className="new-search-box">
        <input
          type="text"
          value={inputTerm}
          onChange={handleChange}
          ref={inputRef}
          placeholder="Bok/Författare..."
        />
        <button onClick={handleClick}>
          <NavLink key={"searchPage"} to={"/searchPage"}>
            Sök
          </NavLink>
        </button>
      </div>
      <div className="last-search-box">
        <Link key={"lastSearch"} to={"/searchPage"}>
          Senaste sökningen
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
