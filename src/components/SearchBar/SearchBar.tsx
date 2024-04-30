import { useEffect, useRef, useState } from "react";
import "./SearchBar.scss";
import { useFetch } from "../../hooks/useFetch";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  const [inputTerm, setInputTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundData, setFoundData] = useState<any>(null);

  useEffect(() => {
    let ignore = false;

    const fetchApi = async () => {
      console.log("Jag ändrades, du sökte på, ", searchTerm);
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${searchTerm}`
        );
        const data = response.data;
        setFoundData(data);
      } catch (error) {
        throw new Error("Blabla det fungerar inte");
      }
    };

    fetchApi();

    return () => {
      ignore = true;
    };
  }, [searchTerm, setFoundData]);

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

  foundData && console.log("datan = ", foundData);

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
