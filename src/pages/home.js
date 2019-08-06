import React from "react";

const Home = props => {
  return (
    <div className="homepage-container">
    <div className="user-wrapper">{props.renderUsers()}</div>
    </div>
  )
}

export default Home;