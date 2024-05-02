import { Outlet } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchPage.scss";
import { useState } from "react";
import { SearchResults } from "../../types/types";

const SearchPage = () => {
  //To reach te searchresults from SearchBar. Send the setThing as a prop
  const [searchResults, setSearchResults] = useState<SearchResults | null>(
    null
  );

  console.log("searchResult ger mig = ", searchResults);

  return (
    <div className="SearchPage">
      <SearchBar setSearchResults={setSearchResults} />

      {searchResults && <Outlet searchResults={searchResults} />}
    </div>
  );
};

export default SearchPage;
