import React from "react";
import ReactDOM from "react-dom";

import UniSpaceLogo from "./images/unispace-logo1.png";

//import Navbar from "./pages/navbar";
import Home from "./pages/home";

import About from "./pages/about";
import Message from "./pages/message";
import Picts from "./pages/picts";

import UserProfile from "./userProfile";
import UserForm from "./userForm";
import { navigate, useRoutes, A } from "hookrouter";

import "./styles.css";

const App = () => {
  /*-----*/

  const routes = {
    "/": () => <Home />,
    "/form": () => <UserForm />,
    "/form/:id": ({ id }) => <UserForm id={id} editMode={true} />,
    "/about": () => <About />,
    "/message": () => <Message />
  };
  /**/

  return <div className="homepage-container">{useRoutes(routes)}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
