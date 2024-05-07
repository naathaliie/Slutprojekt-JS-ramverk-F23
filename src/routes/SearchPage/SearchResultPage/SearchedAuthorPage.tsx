import { useParams } from "react-router-dom";
import "./SearchedAuthorPage.scss";

const SearchedAuthorPage = () => {
  const params = useParams<{ foundId: string }>();
  console.log("useparams", params.foundId);

  return <div className="SearchedAuthorPage">{params.foundId}</div>;
};

export default SearchedAuthorPage;
