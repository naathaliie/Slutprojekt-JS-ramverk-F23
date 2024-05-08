import { Link, NavLink, Outlet } from "react-router-dom";
import "./Navbar.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="NavBar">
        <div className="nav-search">
          <SearchBar />
        </div>

        <div className="nav-loggo">
          <NavLink key={"home"} to={"/"} className="home">
            THE LIBRARY
          </NavLink>
        </div>

        <div className="nav-myPage">
          <span onClick={handleClick}>😍</span>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link key={"favorits"} to={"/myPage/myFavorits"}>
                Mina favoriter
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>Mina lästa böcker</MenuItem>
            <MenuItem onClick={handleClose}>
              <Link key={"other"} to={"/myPage/other"}>
                Övrigt
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
