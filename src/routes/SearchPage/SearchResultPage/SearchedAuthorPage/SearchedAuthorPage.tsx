import { useParams } from "react-router-dom";
import "./SearchedAuthorPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { oneAuthor } from "../../../../types/types";
import {
  addFavoritAuthor,
  removeFavoritAuthor,
} from "../../../../state/myPage/myPageSlice";
import noImg from "../../../../assets/noImg.png";

const SearchedAuthorPage = () => {
  const searchResult = useSelector(
    (state: RootState) => state.searchResultStore.authors
  );

  const myPageStore = useSelector(
    (state: RootState) => state.myPageStore.myFavorites
  );
  const dispatch = useDispatch();

  const params = useParams<{ foundId: string }>();
  console.log("useparams", params.foundId);

  const thisAuthor: oneAuthor[] = searchResult.filter((author) => {
    return params.foundId === author.name;
  });

  return (
    <div className="SearchedAuthorPage">
      <div className="author-img">
        <img src={noImg} alt="" />
      </div>
      <div className="author-info" key={thisAuthor[0].key}>
        <h3>Namn: </h3>
        <p>{thisAuthor[0].name}</p>
        <h6>Top work: </h6>
        <p>{thisAuthor[0].top_work}</p>

        {thisAuthor[0].birth_date ? (
          <>
            <h6>Född:</h6> <p>{thisAuthor[0].birth_date}</p>
          </>
        ) : (
          <h6>Född: -</h6>
        )}

        {thisAuthor[0].death_date ? (
          <>
            <h6>Död: </h6>
            <p>{thisAuthor[0].death_date}</p>
          </>
        ) : (
          <h6>Död: -</h6>
        )}
      </div>
      <div className="add-to-favorits">
        {myPageStore.favoriteAuthors.find((author) => {
          return author.key === thisAuthor[0].key;
        }) ? (
          <>
            <span
              className="emoji-icon favorit checked"
              onClick={() => {
                console.log("Lägg till som favorit");
                dispatch(removeFavoritAuthor(thisAuthor[0].key));
              }}
            >
              ❤️
            </span>
          </>
        ) : (
          <span
            className="emoji-icon favorit notChecked"
            onClick={() => {
              console.log("Lägg till som favorit");
              dispatch(addFavoritAuthor([thisAuthor[0]]));
            }}
          >
            🤍
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchedAuthorPage;
