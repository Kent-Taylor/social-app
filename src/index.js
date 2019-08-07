import React from "react";
import ReactDOM from "react-dom";

//import Navbar from "./pages/navbar";
import Home from "./pages/home";

import About from "./pages/about";
import Message from "./pages/message";
import Picts from "./pages/picts";

import UserProfile from "./userProfile";
import UserForm from "./userForm";
import {navigate, useRoutes, A} from "hookrouter";

import "./styles.css";

const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://social-app-backend-bot.herokuapp.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const editUser = id => {
    navigate(`/form/${id}`)
  }

  const deleteUser = id => {
    fetch(`https://social-app-backend-bot.herokuapp.com/user/${id}`, {
      method: "DELETE"
    })
      .then(setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.log("delete err", error));
  };

  const renderUsers = () => {
    return users.map(user => {

      return <UserProfile 
      //user={user}
      key={user.id}
      id={user.id}
      name = {user.name}
      image = {user.image}
      short_bio = {user.short_bio}
      deleteUser = {deleteUser} 
      editUser = {editUser}
      />;

    });
  };

  /*-----*/

  const routes = {
    "/": () => <Home renderUsers={renderUsers}/>,
    "/form": () => <UserForm/>,
    "/form/:id": ({id}) => <UserForm id={id} editMode={true}/>,
    "/picts": () => <Picts/>,
    "/about": () => <About/>,
    "/message": () => <Message/>
    };
  /**/

  return (
      <div className="App">
        <div className="navbar-wrapper">
          <div className="logo">desc. logo</div>
          {/*<Navbar />*/}
          <div className="btn-wrapper">
          {/*<A className="btn" href="/">Home</A>*/}
          <A href="/">Home</A>
          <A href="/form">Form</A>
          <A href="/picts">Picts</A>
          <A href="/about">About</A>
          <A href="/message">Message</A>
        </div>          
          <div className="userName">
            <p>Neil_loves_Unicorns@U-go-girl</p>
          </div>
        </div>
        {useRoutes(routes)}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);