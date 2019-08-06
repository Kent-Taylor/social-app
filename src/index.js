import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./pages/navbar";
import Home from "./pages/home";

import About from "./pages/about";
import Message from "./pages/message";
import Picts from "./pages/picts";

import UserProfile from "./userProfile";

import "./styles.css";

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(()=>{
    fetch("https://social-app-backend-bot.herokuapp.com/users")
   .then(response => response.json())
   .then(data => setUsers(data))
   .catch(error => console.log(error));
  }, []);

  const editUser = id  => {
    fetch(`https://social-app-backend-bot.herokuapp.com/user/${id}`,{
      method: "PUT"
    }).then(response => response.json())
    .then(data => {
      setUsers.name(data.name)
      setUsers.short_bio(data.short_bio)
      
    })
    .catch(error => console.log("Edit err", error));
  }

  const deleteUser = id  => {
    fetch(`https://social-app-backend-bot.herokuapp.com/user/${id}`,{
      method: "DELETE"
    }).then(setUsers(users.filter(user => user.id !== id)))
    .catch(error => console.log("delete err", error));
  }
  
  
  const renderUsers = () => {
    return users.map(user => {
      return <UserProfile 
      user={user}
      deleteUser = {deleteUser} 
      editUser = {editUser}
      />;
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
        <div className="user-wrapper">{renderUsers()}</div>
      </div>
    );
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
