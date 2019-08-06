import React from "react";
import ReactDOM from "react-dom";
import UserProfile from "./userProfile"

import "./styles.css";
const App = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(()=>{
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
     <div className="navbar-wrapper">
      <div className="logo">desc. logo</div>
      <div className="btn">
        <button>newbutton</button>
        <button>newbutton</button>
        <button>newbutton</button>
        <button>newbutton</button>
      </div>
      </div> 
      <div className="user-wrapper"> 
      {renderUsers()}
      </div>  
  </div>)
  ;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);