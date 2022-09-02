import React from "react";
import "./UserItem.scss";

const UserItem = () => {
  return (
    <>
      <div className="user_item">
        <div className="user_item_img">
          <img src="https://picsum.photos/200/300?random=3" alt="user" />
          <div className="user_item_active"></div>
        </div>
        <h4>Akash Sarker</h4>
      </div>
    </>
  );
};

export default UserItem;
