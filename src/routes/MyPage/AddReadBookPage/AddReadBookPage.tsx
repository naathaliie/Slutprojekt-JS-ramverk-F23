import { Link } from "react-router-dom";
import "./AddReadBookPage.scss";

const AddReadBookPage = () => {
  return (
    <div className="AddReadBookPage">
      <h1>Lägg till bok</h1>
      <Link key={"readBooks"} to={"/myPage/myReadBooks"}>
        <button>stäng</button>
      </Link>
    </div>
  );
};

export default AddReadBookPage;
