import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
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
        <div className="userName">user name</div>
      </div>

      <h1>Hello Team 2, here is our starter Social App!</h1>
      <h2>Let Kent know if you have any questions about github or anything</h2>

      <div className='footer-wrapper'>
        <div className='button'>
          <button>Home</button>
          <button>From</button>
          <button>Pictures</button>
          <button>About</button>
          <button>Messages</button>
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
