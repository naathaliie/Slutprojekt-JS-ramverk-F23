import { Link } from "react-router-dom";
import "./AddReadBookPage.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { useState } from "react";
import { OneReadBook } from "../../../types/types";
import { useParams } from "react-router-dom";

const AddReadBookPage = () => {
  const myReadBooks = useSelector(
    (state: RootState) => state.myPageStore.myReadBooksInfo
  );

  const params = useParams<{ readBook: string }>();
  console.log("params ger mig, ", params.readBook);

  const [formData, setFormData] = useState<OneReadBook>({
    key: "",
    title: "",
    pages: 0,
    likes: 0,
    review: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="AddReadBookPage">
      <h1>Lägg till bok</h1>
      <div className="input-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            Titel
            <input
              id="title"
              onChange={handleInputChange}
              value={formData.title}
              name="title"
              type={"text"}
              placeholder={"Titel på bok"}
            />
          </label>
          <label htmlFor="pages">
            Antal sidor{" "}
            <input
              id="pages"
              onChange={handleInputChange}
              value={formData.pages}
              name="pages"
              type={"number"}
              placeholder={"Antal sidor"}
            />
          </label>
          <label htmlFor="likes">
            Likes
            <input
              id="likes"
              onChange={handleInputChange}
              value={formData.pages}
              name="likes"
              type={"text"}
              placeholder={"Hur bra var boken?"}
            />
          </label>
        </form>
      </div>
      <div className="btns">
        <Link key={"readBooks"} to={"/myPage/myReadBooks"}>
          <button>stäng</button>
        </Link>
        <button>Lägg till</button>
      </div>
    </div>
  );
};

export default AddReadBookPage;
