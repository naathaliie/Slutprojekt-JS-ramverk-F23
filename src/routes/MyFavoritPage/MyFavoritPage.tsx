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
      {myPageStore.map((b, index) => {
        return <p key={index}>hej{b.title}</p>;
      })}
    </div>
  );
};

export default MyFavoritPage;

/* Fortsätt med att försöka få din sparade favorit att skrivas ut */
