import { useDispatch, useSelector } from "react-redux";
import "./MyReadBooksPage.scss";
import { RootState } from "../../../state/store";
import { Link, Outlet } from "react-router-dom";

const MyReadBooksPage = () => {
  const dispatch = useDispatch();

  const favoritBooks = useSelector(
    (state: RootState) => state.myPageStore.myReadBooksInfo
  );

  return (
    <div className="MyReadBooksPage">
      <Link key={"addReadBook"} to={"/myPage/myReadBooks/addBook"}>
        <button> Lägg till bok</button>
      </Link>

      <div className="read-books-box">
        <h3>Mina lästa böcker</h3>
      </div>
      <Outlet />
    </div>
  );
};

export default MyReadBooksPage;
