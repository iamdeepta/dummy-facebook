import React from "react";
import LeftSidebar from "../left-sidebar/LeftSidebar";
import Post from "../post/Post";
import Users from "../users/Users";
import "./Body.scss";

const Body = () => {
  return (
    <>
      <div className="body">
        <LeftSidebar />
        <Post />
        <Users />
      </div>
    </>
  );
};

export default Body;
