import { useSelector } from "react-redux";
import "./MyReadBooksPage.scss";
import { RootState } from "../../../state/store";
import { Link, Outlet } from "react-router-dom";

const MyReadBooksPage = () => {
  const readBooks = useSelector(
    (state: RootState) => state.myPageStore.myReadBooksInfo
  );

  return (
    <div className="MyReadBooksPage">
      <div className="read-books-box">
        <h3>Mina lästa böcker </h3>
        <p>(Klicka för att skriva recension)</p>
        {readBooks.length > 0 ? (
          <ul>
            {readBooks.map((book) => {
              return (
                <li key={book.key}>
                  <Link
                    key={"addRewiev"}
                    to={`/myPage/myReadBooks/addRewiev/${book.title}`}
                    className="link"
                  >
                    {book.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          "Du har inte lagt till några lästa böcker ännu"
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default MyReadBooksPage;
