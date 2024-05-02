import { useParams } from "react-router-dom";
import "./SearchResultPage.scss";

const SearchResultPage = () => {
  const params = useParams<{ foundId: string }>();
  console.log("useparams", params.foundId);

  return <div className="SearchResultPage">SearchPageResult</div>;
};

export default SearchResultPage;
