import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="NavBar">
        <div className="nav-title">
          <NavLink key={"home"} to={"/"} className="title">
            Monster University
          </NavLink>
        </div>

        <div className="nav-links">
          {/* <NavLink key={"home"} to={"/"}>
              HomePage
            </NavLink> */}
          <NavLink key={"allMonsters"} to={"/monsters"}>
            Alla Monster
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
