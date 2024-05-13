import "./SearchBar.scss";
import axios from "axios";
import { fetchedData } from "../../types/types";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { setSearchResult } from "../../state/searchResults/searchResultsSlice";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const bookAPI = "https://openlibrary.org/search.json?title=";
const authorAPI = "https://openlibrary.org/search/authors.json?q=";

const SearchBar = () => {
  const [inputTerm, setInputTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundBookData, setFoundBookData] = useState<fetchedData | null>(null);
  const [foundAuthorData, setFoundAuthorData] = useState<fetchedData | null>(
    null
  ); // ÄNDRA

  //För att få tillgång till globalstate-redux. Behövs inte här?
  const searchResult = useSelector(
    (state: RootState) => state.searchResultStore
  );

  //För att få tillgång till ALLA!? reducers
  const dispatch = useDispatch();

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      /*  console.log("searchTerm ändrades, du sökte på = ", searchTerm); */

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
    console.log("du klickade på den nya knappen och du skrev ", inputTerm);
  };

  foundBookData ? console.log("sliceData = ", searchResult.books) : "";
  foundBookData ? console.log("bookData = ", foundBookData) : "";
  foundAuthorData ? console.log("authorData = ", foundAuthorData) : "";

  return (
    <div className="SearchBar">
      <div className="input-box">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "18ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="Sök på en bok eller författare"
            id="outlined-basic"
            label="sök"
            variant="outlined"
            size="small"
            value={inputTerm}
            onChange={handleChange}
            inputRef={inputRef}
          />
          <Link key={"lastSearch"} to={"/searchPage"}>
            <button onClick={handleClick}>
              <SearchIcon />
            </button>
          </Link>
        </Box>
      </div>
      <div className="input-btn"></div>
      <div className="last-search-box">
        <Link key={"lastSearch"} to={"/searchPage"}>
          Senaste sökningen
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;

//senaste sökningen
