import React from "react";
import ReactDOM from "react-dom";

import mockData from "./mockData";
import UserProfile from "./userProfile"

import "./styles.css";

class App extends React.Component {
  constructor(){

    super();

    this.state = {
      users: mockData
    };
  }
  renderUsers = () => {
    return this.state.users.map(user => {
      return <UserProfile user={user} />
    })
  } 
  
 render() {
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
      {this.renderUsers()}
      </div>
    </div> 
    )
}


}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);