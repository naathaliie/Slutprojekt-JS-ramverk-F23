import { fetchedData } from "../../types/types";
import "./SearchResultPage.scss";

type SearchResultPageProps = {
  books: fetchedData[] | null;
  authors: fetchedData[] | null;
};

const SearchResultPage = ({ books, authors }: SearchResultPageProps) => {
  return (
    <div className="SearchResultPage">
      <div className="foundBooks">
        <h2>Hittade böcker</h2>
        {books !== null ? (
          books.map((b) => {
            return (
              <ul>
                <li>titel</li>
              </ul>
            );
          })
        ) : (
          <p>Hittade inga böcker</p>
        )}
      </div>
      <div className="foundAuthors">
        <h2>Hittade författare</h2>
      </div>
    </div>
  );
};

export default SearchResultPage;
