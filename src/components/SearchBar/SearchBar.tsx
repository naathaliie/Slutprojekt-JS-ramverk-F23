import { useEffect, useRef, useState } from "react";
import "./SearchBar.scss";
import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";
import { fetchedData } from "../../types/types";
import SearchResultPage from "../../routes/SearchPage/SearchResultPage/SearchResultPage";

const bookAPI = "https://openlibrary.org/search.json?title=";
const authorAPI = "https://openlibrary.org/search.json?author=";

const SearchBar = () => {
  const [inputTerm, setInputTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundBookData, setFoundBookData] = useState<fetchedData | null>(null);
  const [foundAuthorData, setFoundAuthorData] = useState<fetchedData | null>(
    null
  ); // ÄNDRA

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      console.log("searchTerm ändrades, du sökte på, ", searchTerm);

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

  foundBookData ? console.log("bookData = ", foundBookData) : "";
  foundAuthorData ? console.log("authorData = ", foundAuthorData) : "";

  return (
    <div className="SearchBar">
      <input
        type="text"
        value={inputTerm}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Bok/Författare..."
      />
      <button onClick={handleClick}>Sök</button>
    </div>
  );
};

export default SearchBar;
