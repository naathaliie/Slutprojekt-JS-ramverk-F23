import { useDispatch, useSelector } from "react-redux";
import "./MyReadBooksPage.scss";
import { RootState } from "../../../state/store";
import { Link } from "react-router-dom";

const MyReadBooksPage = () => {
  const dispatch = useDispatch();

  const favoritBooks = useSelector(
    (state: RootState) => state.myPageStore.myReadBooksInfo
  );

  return (
    <div className="MyReadBooksPage">
      <button>
        <Link key={"addReadBook"} to={""}>
          Lägg till bok
        </Link>
      </button>
      <div className="read-books-box">
        <h3>Mina lästa böcker</h3>
      </div>
    </div>
  );
};

export default MyReadBooksPage;
