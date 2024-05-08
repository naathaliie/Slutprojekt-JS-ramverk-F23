import { useParams } from "react-router-dom";
import "./SearchedAuthorPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { oneAuthor } from "../../../types/types";
import { addFavoritAuthor } from "../../../state/myPage/myPageSlice";
import MyFavoritPage from "../../MyPage/MyfavoritsPage/MyFavoritPage";

const SearchedAuthorPage = () => {
  const searchResult = useSelector(
    (state: RootState) => state.searchResultStore.authors
  );
  const dispatch = useDispatch();

  const params = useParams<{ foundId: string }>();
  console.log("useparams", params.foundId);

  const thisAuthor: oneAuthor[] = searchResult.filter((author) => {
    return params.foundId === author.name;
  });

  console.log("this author ger mig = ", thisAuthor);

  return (
    <div className="SearchedAuthorPage">
      {" "}
      <div key={thisAuthor[0].key}>
        <h3>Namn: {thisAuthor[0].name}</h3>
        <h6>Top work: {thisAuthor[0].top_work}</h6>
        <button
          onClick={() => {
            console.log("Lägg till som favorit");

            dispatch(addFavoritAuthor(thisAuthor));
          }}
        >
          Spara som favorit
        </button>
      </div>
      <MyFavoritPage />
    </div>
  );
};

export default SearchedAuthorPage;
