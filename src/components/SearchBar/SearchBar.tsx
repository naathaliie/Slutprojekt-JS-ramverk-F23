import "./SearchBar.scss";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useFetch } from "../../hooks/useFetch";
import MyButton from "../Button/MyButton";

const SearchBar = () => {
  const [inputTerm, setInputTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  //För att få tillgång till globalstate-redux. Behövs inte här men jag vill se vad som händer
  const searchResult = useSelector(
    (state: RootState) => state.searchResultStore
  );

  const { foundBookData, foundAuthorData } = useFetch(searchTerm);

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
            <MyButton
              name="input-search-btn"
              onClickFunction={handleClick}
              icon={<SearchIcon />}
            />
          </Link>
        </Box>
      </div>
      {(foundBookData || foundAuthorData) && (
        <div className="last-search-box">
          <Link key={"lastSearch"} to={"/searchPage"}>
            Senaste sökningen
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
