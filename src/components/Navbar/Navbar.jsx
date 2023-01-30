import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">SendIT <FaRegPaperPlane/></Link>
      </div>
    </div>
  );
};

export default Navbar;
