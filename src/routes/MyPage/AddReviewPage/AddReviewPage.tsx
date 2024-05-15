import { Link } from "react-router-dom";
import "./AddReviewPage.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { useState } from "react";
import { OneReadBook } from "../../../types/types";
import { useParams } from "react-router-dom";
import { updateReadBook } from "../../../state/myPage/myPageSlice";

const AddReviewPage = () => {
  const myReadBooks = useSelector(
    (state: RootState) => state.myPageStore.myReadBooksInfo
  );

  const params = useParams<{ readBook: string }>();

  const thisBook: OneReadBook[] = myReadBooks.filter((book) => {
    return params.readBook === book.title;
  });

  const [formData, setFormData] = useState<OneReadBook>({
    key: thisBook[0].key,
    title: thisBook[0].title,
    pages: thisBook[0].pages,
    likes: "",
    review: "",
  });

  /* const [selectedLike, setSelectedLike] = useState<string>("");
  const [typedRewiev, setTypedReview] = useState<string>(""); */

  const handleLikeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Uppdatera formData med det valda "likes" alternativet
    setFormData({
      ...formData,
      likes: e.target.value as "Worst" | "ok" | "Great",
    });
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Uppdatera formData med det valda "likes" alternativet
    setFormData({
      ...formData,
      review: e.target.value,
    });
  };

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
                  value="Worst"
                  onChange={handleLikeChange}
                />
                <label htmlFor="likeChoice1">Worst</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="likeChoice2"
                  name="likes"
                  value="ok"
                  onChange={handleLikeChange}
                />
                <label htmlFor="likeChoice2">ok</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="likeChoice3"
                  name="likes"
                  value="Great"
                  onChange={handleLikeChange}
                />
                <label htmlFor="likeChoice3">Great</label>
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
            updateReadBook([formData]);
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
