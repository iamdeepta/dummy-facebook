import React from "react";
import "./UserItem.scss";

const UserItem = ({ user }) => {
  return (
    <>
      <div className="user_item">
        <div className="user_item_img">
          <img src={user.profile_picture} alt="user" />
          <div className="user_item_active"></div>
        </div>
        <h4>{user.name}</h4>
      </div>
    </>
  );
};

export default UserItem;
