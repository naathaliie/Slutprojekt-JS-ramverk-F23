import { SearchResults, fetchedData } from "../../../types/types";
import "./SearchResultPage.scss";

type SearchResultPageProps = {
  searchResults: SearchResults | null;
};

const SearchResultPage = ({ searchResults }: SearchResultPageProps) => {
  return (
    <div className="SearchResultPage">
      <div className="foundBooks">
        <h2>Hittade böcker</h2>
      </div>
      <div className="foundAuthors">
        <h2>Hittade författare</h2>
      </div>
    </div>
  );
};

export default SearchResultPage;
