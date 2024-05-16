import { Link } from "react-router-dom";
import "./AddReviewPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { useState } from "react";
import { OneReadBook } from "../../../../types/types";
import { useParams } from "react-router-dom";
import { addRewiev } from "../../../../state/myPage/myPageSlice";

const AddReviewPage = () => {
  const myReadBooks = useSelector(
    (state: RootState) => state.myPageStore.myReadBooksInfo
  );
  const dispatch = useDispatch();
  const params = useParams<{ readBook: string }>();

  const thisBook: OneReadBook[] = myReadBooks.filter((book) => {
    return params.readBook === book.title;
  });

  const [review, setReview] = useState<string>("");
  const [like, setLike] = useState<
    "inte min grej" | "helt ok" | "bästa jag läst" | ""
  >(thisBook[0].likes);

  const handleLikeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLike(
      e.target.value as "inte min grej" | "helt ok" | "bästa jag läst" | ""
    );
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.value);
  };

  console.log("mina lästa böcker ", myReadBooks);

  return (
    <div className="AddReviewPage">
      <h1>Lägg till recension</h1>
      <div className="book-info-box">
        <h3>Titel</h3>
        <p>{thisBook[0].title}</p>
        <h3>Antal sidor</h3>
        <p>{thisBook[0].pages}</p>
      </div>
      <div className="input-box">
        <form className="form-bookReview">
          <div className="form-bookReview">
            <fieldset>
              <legend>Betyg:</legend>
              <div>
                <input
                  type="radio"
                  id="likeChoice1"
                  name="likes"
                  value="inte min grej"
                  onChange={handleLikeChange}
                  checked={like === "inte min grej"}
                />
                <label htmlFor="likeChoice1">inte min grej</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="likeChoice2"
                  name="likes"
                  value="helt ok"
                  onChange={handleLikeChange}
                  checked={like === "helt ok"}
                />
                <label htmlFor="likeChoice2">helt ok</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="likeChoice3"
                  name="likes"
                  value="bästa jag läst"
                  onChange={handleLikeChange}
                  checked={like === "bästa jag läst"}
                />
                <label htmlFor="likeChoice3">bästa jag läst</label>
              </div>
            </fieldset>
          </div>
          <div className="form-bookReview">
            <label htmlFor="review">Skriv en recension: </label>
            <input
              type="text"
              name="review"
              id="review"
              onChange={handleReviewChange}
              required
            />
          </div>
        </form>
      </div>
      <div className="btns">
        <Link key={"readBooks"} to={"/myPage/myReadBooks"}>
          <button>stäng</button>
        </Link>
        <button
          onClick={() => {
            dispatch(
              addRewiev([
                {
                  key: thisBook[0].key,
                  title: thisBook[0].title,
                  pages: thisBook[0].pages,
                  likes: like,
                  review: review,
                },
              ])
            );
          }}
        >
          Lägg till
        </button>
      </div>
      <div className="removez">
        <p>{thisBook[0].review}</p>
      </div>
    </div>
  );
};

export default AddReviewPage;
