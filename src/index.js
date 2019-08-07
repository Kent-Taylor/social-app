import React from "react";

import { navigate, useRoutes, A } from "hookrouter";
import UserProfile from "../userProfile";
import UniSpaceLogo from "../images/unispace-logo1.png";

const Home = props => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://social-app-backend-bot.herokuapp.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const editUser = id => {
    navigate(`/form/${id}`);
  };

  const deleteUser = id => {
    fetch(`https://social-app-backend-bot.herokuapp.com/user/${id}`, {
      method: "DELETE"
    })
      .then(setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.log("delete err", error));
  };

  const renderUsers = () => {
    return users.map(user => {
      return (
        <UserProfile
          //user={user}
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          short_bio={user.short_bio}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      );
    });
  };

  return (
    <div className="homepage-container">
      <div className="App">
        <div className="navbar-wrapper">
          <div className="logo">
            <img src={UniSpaceLogo} alt="UniSpaceLogo" />
          </div>

          {/*<Navbar />*/}
          <div className="btn-wrapper">
            {/*<A className="btn" href="/">Home</A>*/}
            <A href="/">Home</A>
            <A href="/form">Create</A>
            <A href="/picts">Pictures</A>
          </div>
          <div className="userName">
            <div className="log-in-status">Logged in as:</div>
            <p>Neil_loves_Unicorns@U-go-girl</p>
          </div>
        </div>
        <div className="user-wrapper">{renderUsers()}</div>
        <div className="footer-wrapper">
          <div className="button">
            <A href="/">Home</A>
            <A href="/form">Create</A>
            <A href="/picts">Pictures</A>
          </div>
          <div className="copyright">
            <h3>Copyright © 2019 Students Inc. All rights reserved.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
