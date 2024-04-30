import { useEffect, useRef, useState } from "react";
import "./SearchBar.scss";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { fetchedData, oneAuthor, oneBook } from "../../types/types";

const bookAPI = "https://openlibrary.org/search.json?q=";
const authorAPI = "https://openlibrary.org/search.json?author=";

const SearchBar = () => {
  const [inputTerm, setInputTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundData, setFoundData] = useState<any | null>(null); // ÄNDRA

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      console.log("searchTerm ändrades, du sökte på, ", searchTerm);

      try {
        const response = await axios.get(`${authorAPI}${searchTerm}`);
        const data = response.data;
        if (!ignore) {
          setFoundData(data);
          setSearchTerm(""); //"cleans up the searchterm"
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

  foundData?.num_found > 0 && console.log("datan = ", foundData);

  return (
    <div className="SearchBar">
      <input
        type="text"
        value={inputTerm}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Bok/Författare..."
      />
      <button onClick={handleClick}>
        <NavLink key={"search"} to={"/searchResult"}>
          Sök
        </NavLink>
      </button>
    </div>
  );
};

export default SearchBar;
