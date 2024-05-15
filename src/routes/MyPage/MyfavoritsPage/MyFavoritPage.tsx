import "./MyFavoritPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import {
  removeFavoritAuthor,
  removeFavoritBook,
} from "../../../state/myPage/myPageSlice";
import MyButton from "../../../components/Button/MyButton";
import DeleteIcon from "@mui/icons-material/Delete";

const MyFavoritPage = () => {
  const dispatch = useDispatch();

  const favoritBooks = useSelector(
    (state: RootState) => state.myPageStore.myFavorites.favoriteBooks
  );

  const favoritAuthors = useSelector(
    (state: RootState) => state.myPageStore.myFavorites.favoriteAuthors
  );
  return (
    <div className="MyFavoritPage">
      <div className="favorit-books">
        <h3>Mina favorit böcker</h3>
        {favoritBooks.length > 0 ? (
          <ul>
            {favoritBooks.map((b, index) => {
              return (
                <li key={index}>
                  {b.title}
                  <MyButton
                    icon={<DeleteIcon sx={{ fontSize: "15px" }} />}
                    name="aBtn"
                    onClickFunction={() => {
                      dispatch(removeFavoritBook(b.key));
                    }}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          "Du har inte favoritmarkerat någon bok ännu"
        )}
      </div>
      <div className="favorit-authors">
        <h3>Mina favorit författare</h3>
        {favoritAuthors.length > 0 ? (
          <ul>
            {favoritAuthors.map((a, index) => {
              return (
                <li key={index}>
                  {a.name}
                  <MyButton
                    icon={<DeleteIcon sx={{ fontSize: "15px" }} />}
                    name="aBtn"
                    onClickFunction={() => {
                      dispatch(removeFavoritAuthor(a.key));
                    }}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          "Du har inte favoritmarkerat någon författare ännu"
        )}
      </div>
    </div>
  );
};

export default MyFavoritPage;
