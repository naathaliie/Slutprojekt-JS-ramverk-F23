import { Outlet } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchPage.scss";

const SearchPage = () => {
  return (
    <div className="SearchPage">
      <SearchBar />

      {"blabla" && <Outlet />}
    </div>
  );
};

export default SearchPage;
