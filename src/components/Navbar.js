import React, { useState } from "react";
import Logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
function Navbar() {
  const [switchBtn, setSwitchBtn] = useState(false);
  const handleClick = () => {
    setSwitchBtn(!switchBtn);
  };
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} />
        {switchBtn && (
          <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        )}
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={handleClick}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
