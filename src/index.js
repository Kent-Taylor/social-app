import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./pages/navbar";
import Home from "./pages/home";

import About from "./pages/about";
import Message from "./pages/message";
import Picts from "./pages/picts";

import mockData from "./mockData";
import UserProfile from "./userProfile";

import "./styles.css";

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://social-app-backend-bot.herokuapp.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const renderUsers = () => {
    return users.map(user => {
      return <UserProfile user={user} />;
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar-wrapper">
          <div className="logo">desc. logo</div>
          <Navbar />

          <div className="userName">
            <div className="login">Login</div>
            <button className="btn">USER NAME</button>
            <button className="btn">PASSWORD</button>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/picts" component={Picts} />
          <Route path="/about" component={About} />
          <Route path="/message" component={Message} />
        </Switch>
      </BrowserRouter>
      <div className="homepage-container">
        <div className="user-wrapper">{renderUsers()}</div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
