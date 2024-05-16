import { Link } from "react-router-dom";
import "./AddReviewPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { useState } from "react";
import { OneReadBook } from "../../../../types/types";
import { useParams } from "react-router-dom";
import { addRewiev } from "../../../../state/myPage/myPageSlice";
import MyButton from "../../../../components/Button/MyButton";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

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

  const handleAddClick = () => {
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
            <label htmlFor="review">
              <h3>Skriv en recension:</h3>{" "}
            </label>
            <input
              type="text"
              name="review"
              id="review"
              onChange={handleReviewChange}
              required
            />
          </div>
          <div className="form-bookReview">
            <fieldset className="fieldset">
              <legend>
                <h3>Betyg:</h3>
              </legend>
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
        </form>
      </div>
      <div className="btns-box">
        <Link key={"readBooks"} to={"/myPage/myReadBooks"}>
          <MyButton icon={<ClearIcon />} name="back-btn" />
        </Link>
        <MyButton
          onClickFunction={handleAddClick}
          icon={<CheckIcon />}
          name="add-btn"
        />
      </div>
      <div className="my-rewiev-box">
        <h2>Din recension</h2>
        <div className="rewiev">
          <h5>Betyg:</h5>
          <p> {thisBook[0].likes !== "" ? thisBook[0].likes : "-"}</p>
        </div>
        <div className="rewiev">
          <h5>Recension: </h5>
          <p>{thisBook[0].review !== "" ? thisBook[0].review : "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default AddReviewPage;
