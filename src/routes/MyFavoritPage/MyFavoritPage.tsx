import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const MyFavoritPage = () => {
  const myPageStore = useSelector(
    (state: RootState) => state.myPageStore.myFavorites.favoriteBooks
  );

  console.log("holabandola = ", myPageStore);
  return (
    <div>
      <p>Mina favorit böcker</p>
      {myPageStore.map((b) => {
        return <p key={b.key}>{b.title}</p>;
      })}
    </div>
  );
};

export default MyFavoritPage;
