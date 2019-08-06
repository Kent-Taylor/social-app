import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const user = this.props.user;

    return (
      <div className="user-profile">
        <img src={user.image} alt="user pic" />
        <h2>{user.name}</h2>
        <p className="user-bio">{user.short_bio}</p>
        <div className="edit-section">
          <div className="edit-button">
            <button>Edit</button>
          </div>
          <div className="delete-button">X</div>
        </div>
      </div>
    );
  }
}

export default UserProfile;

