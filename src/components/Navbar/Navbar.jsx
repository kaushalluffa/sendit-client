import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo"><Link to="/">SendIT</Link></div>
      <div className="navbar__bars">
        <FaBars />
      </div>
      <div className="navbar__menu">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
