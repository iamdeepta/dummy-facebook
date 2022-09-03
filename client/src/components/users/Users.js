import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";
import "./Users.scss";
import api from "../../api/baseurl";

const Users = () => {
  const [users, setUsers] = useState([]);

  //retrieve online users
  const getUsers = async () => {
    const response = await api.get("online_users");
    return response.data;
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allusers = await getUsers();

      if (allusers) {
        setUsers(allusers);
      }
    };

    getAllUsers();
  }, []);

  return (
    <>
      <div className="users">
        <div className="users_header">
          <p>Contacts</p>
        </div>

        <div className="users_list">
          {users.map((user) => {
            return (
              <>
                <UserItem user={user} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
