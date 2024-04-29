import { NavLink } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <h1>Hoppsan sidan gick inte att hitta...</h1>
      <NavLink key={"home"} to={"/"} className={"goHome"}>
        HEM
      </NavLink>
    </div>
  );
};

export default ErrorPage;
