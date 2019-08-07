import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="navbar-wrapper">
        <div className="logo">desc. logo</div>
        <div className="btn">
          <a href='google.com'>newbutton</a>
          <a href='google.com'>newbutton</a>
          <a href='google.com'>newbutton</a>
          <a href='google.com'>newbutton</a>
        </div>
        <div className="userName">user name</div>
      </div>

      <h1>Hello Team 2, here is our starter Social App!</h1>
      <h2>Let Kent know if you have any questions about github or anything</h2>

      <div className='footer-wrapper'>
        <div className='button'>
            <a href='google.com'>Home</a>
            <a href='google.com'>From</a>
            <a href='google.com'>Pictures</a>
            <a href='google.com'>About</a>
            <a href='google.com'>Messages</a>
        </div>
        <div className="copyright">
            <h3>Copyright © 2019 Students Inc. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
