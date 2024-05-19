import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.scss";
import SearchBar from "../SearchBar/SearchBar";
import MyPageNavigation from "../MyPageNavigation/MyPageNavigation";

const Navbar = () => {
  return (
    <>
      <div className="NavBar">
        <div className="nav-search">
          <SearchBar />
        </div>

        <div className="nav-loggo">
          <NavLink key={"home"} to={"/"} className="home-icon">
            Ditt Bibliotek
          </NavLink>
        </div>

        <MyPageNavigation />
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
