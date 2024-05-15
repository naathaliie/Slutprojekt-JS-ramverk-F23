import { Link } from "react-router-dom";
import "./ErrorPage.scss";
import MyButton from "../../components/Button/MyButton";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <h1>Hoppsan sidan gick inte att hitta...</h1>
      <Link key={"home"} to={"/"} className={"goHome"}>
        <MyButton icon={"HEM"} name="home-btn" />
      </Link>
    </div>
  );
};

export default ErrorPage;
