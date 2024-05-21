import "./SearchBar.scss";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useFetch } from "../../hooks/useFetch";
import MyButton from "../Button/MyButton";

const SearchBar = () => {
  const [inputTerm, setInputTerm] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

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
  };

  return (
    <div className="SearchBar">
      <div className="input-div">
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
      {/* Senaste sökningen skall endast finnas efter att en lyckad sökning gjorts */}
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
