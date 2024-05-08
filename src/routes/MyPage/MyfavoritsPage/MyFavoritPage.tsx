import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { removeFavoritBook } from "../../../state/myPage/myPageSlice";

const MyFavoritPage = () => {
  const dispatch = useDispatch();

  const myPageStore = useSelector(
    (state: RootState) => state.myPageStore.myFavorites.favoriteBooks
  );

  console.log("holabandola = ", myPageStore);
  return (
    <div>
      <p>Mina favorit böcker</p>
      {myPageStore.map((b, index) => {
        return (
          <div key={index}>
            <p>{b.title}</p>
            <button
              onClick={() => {
                console.log("Ta bort som favorit");
                dispatch(removeFavoritBook(b.key));
              }}
            >
              Ta bort
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MyFavoritPage;

/* Fortsätt med att försöka få din sparade favorit att skrivas ut */
