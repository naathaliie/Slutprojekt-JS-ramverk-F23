import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="NavBar">
        <div className="nav-search">
          <NavLink key={"home"} to={"/"} className="search">
            Sökfält
          </NavLink>
        </div>

        <div className="nav-loggo">
          <NavLink key={"home"} to={"/"} className="home">
            THE LIBRARY
          </NavLink>
        </div>

        <div className="nav-myPage">
          <NavLink key={"myPage"} to={"/monsters"} className="myPage">
            😍
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
