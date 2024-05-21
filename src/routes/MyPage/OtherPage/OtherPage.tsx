import { useSelector } from "react-redux";
import "./OtherPage.scss";
import { RootState } from "../../../state/store";

const OtherPage = () => {
  const myreadBooks = useSelector(
    (state: RootState) => state.myPageStore.myReadBooksInfo
  );

  const numbOfPages = myreadBooks.reduce((totalPages, book) => {
    return totalPages + book.pages;
  }, 0);

  const averageNumbOfPages = numbOfPages / myreadBooks.length;

  return (
    <div className="OtherPage">
      <div className="my-read-books">
        <h3>Antal lästa böcker</h3>
        {myreadBooks.length > 0
          ? myreadBooks.length
          : "Du har inte lagt till några lästa böcker ännu"}
      </div>
      <div className="my-read-pages">
        <h3>Antal lästa sidor</h3>
        {numbOfPages}
      </div>
      <div className="average-pages">
        <h3>Snittvärde av sidor per bok</h3>
        {averageNumbOfPages > 0 ? averageNumbOfPages : 0}
      </div>
    </div>
  );
};

export default OtherPage;
