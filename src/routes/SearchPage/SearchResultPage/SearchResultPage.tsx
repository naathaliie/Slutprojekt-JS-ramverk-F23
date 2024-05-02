import "./SearchResultPage.scss";

const SearchResultPage = () => {
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
