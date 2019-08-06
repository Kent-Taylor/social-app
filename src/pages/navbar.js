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
      <NavLink to="/picts">PICTS</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/message">MESSAGE</NavLink>
    </div>
  );
};
export default Navbar;
