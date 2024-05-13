import { Link } from "react-router-dom";
import "./AddReadBookPage.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { useState } from "react";
import { OneReadBook } from "../../../types/types";

const AddReadBookPage = () => {
  const myReadBooks = useSelector(
    (state: RootState) => state.myPageStore.myReadBooksInfo
  );

  const [formData, setFormData] = useState<OneReadBook>({
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="titel">
          Titel
          <input
            onChange={handleInputChange}
            value={formData.title}
            name="titel"
            type={"text"}
            placeholder={"Titel på bok"}
          />
        </label>
        <label htmlFor="pages">
          Antal sidor{" "}
          <input
            onChange={handleInputChange}
            value={formData.pages}
            name="pages"
            type={"number"}
            placeholder={"Antal sidor"}
          />
        </label>
      </form>
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
