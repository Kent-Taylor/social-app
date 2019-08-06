import React from "react";

const UserProfile = props => {
  
  return (
    <div className="user-profile">
      <img src={props.user.image} alt="user pic"/>
      <h2>{props.user.name}</h2>
      <p className="user-bio">{props.user.short_bio}</p>
      <div className="edit-section">
          <div className="edit-button">
            <button onClick={()=> props.editUser(props.user.id)}>Edit</button>
          </div>
          <div className="delete-button" onClick={()=> props.deleteUser(props.user.id)}>X</div>
        </div>
    </div>
  );
};

export default UserProfile;