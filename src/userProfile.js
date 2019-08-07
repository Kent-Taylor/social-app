import React from "react";

const UserProfile = props => {
  
  return (
    <div className="user-profile">
      <img src={props.image} alt="user pic"/>
      <h2>{props.name}</h2>
      <p className="user-bio">{props.short_bio}</p>
      <div className="edit-section">
          <div className="edit-button">
            <button onClick={()=> props.editUser(props.id)}>Edit</button>
          </div>
          <div className="delete-button" onClick={()=> props.deleteUser(props.id)}>X</div>
        </div>
    </div>
  );
};

export default UserProfile;