import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import About from "./about";
import Message from "./message";
import Picts from "./picts";

const Navbar = () => {
  return (
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
  );
};
export default Navbar;
