import { Link, NavLink, Outlet } from "react-router-dom";
import "./Navbar.scss";
import SearchBar from "../SearchBar/SearchBar";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
          <NavLink key={"home"} to={"/"} className="home-icon">
            Mitt Bibliotek
          </NavLink>
        </div>

        <div className="nav-myPage">
          <span onClick={handleClick}>
            <AccountCircleIcon sx={{ fontSize: "50px" }} />
          </span>
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
              <Link
                style={{ color: "hotpink", textDecoration: "none" }}
                key={"favorits"}
                to={"/myPage/myFavorits"}
              >
                Mina favoriter
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                style={{ color: "hotpink", textDecoration: "none" }}
                key={"readBooks"}
                to={"/myPage/myReadBooks"}
              >
                Mina lästa böcker
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                style={{ color: "hotpink", textDecoration: "none" }}
                key={"other"}
                to={"/myPage/other"}
              >
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
