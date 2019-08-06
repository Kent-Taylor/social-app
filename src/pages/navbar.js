import React from "react";
import { NavLink } from "react-router-dom";
import unicorn from "../images/unispace-logo1.png";

const Navbar = () => {
  return (
    <div className="nav-bar-wrapper">
      <img src={unicorn} alt="unicorn logo" />
      <div className="btn-wrapper">
        <NavLink className="btn" to="/">
          HOME
        </NavLink>
        <NavLink className="btn" to="/picts">
          PICTURES
        </NavLink>
        <NavLink className="btn" to="/about">
          ABOUT
        </NavLink>
        <NavLink className="btn" to="/message">
          MESSAGE
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
