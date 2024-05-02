import { useParams } from "react-router-dom";
import "./SearchedBookPage.scss";
import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext/SearchContext";

const SearchedBookPage = () => {
  const { globalSearchState } = useContext(SearchContext);
  const params = useParams<{ foundId: string }>();
  console.log("useparams", params.foundId);

  return <div className="SearchedBookPage">{params.foundId}</div>;
};

export default SearchedBookPage;
