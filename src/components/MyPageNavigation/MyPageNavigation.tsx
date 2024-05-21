import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const MyPageNavigation = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="MyPageNavigation">
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
        <Link
          style={{ color: "hotpink", textDecoration: "none" }}
          key={"favorits"}
          to={"/myPage/myFavorits"}
        >
          <MenuItem onClick={handleClose}>Mina favoriter</MenuItem>
        </Link>
        <Link
          style={{ color: "hotpink", textDecoration: "none" }}
          key={"readBooks"}
          to={"/myPage/myReadBooks"}
        >
          <MenuItem onClick={handleClose}>Mina lästa böcker</MenuItem>
        </Link>
        <Link
          style={{ color: "hotpink", textDecoration: "none" }}
          key={"other"}
          to={"/myPage/other"}
        >
          <MenuItem onClick={handleClose}>Övrigt</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default MyPageNavigation;
