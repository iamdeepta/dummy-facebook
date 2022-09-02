import React from "react";
import UserItem from "./UserItem";
import "./Users.scss";

const Users = () => {
  return (
    <>
      <div className="users">
        <div className="users_header">
          <p>Contacts</p>
        </div>

        <div className="users_list">
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </div>
      </div>
    </>
  );
};

export default Users;
