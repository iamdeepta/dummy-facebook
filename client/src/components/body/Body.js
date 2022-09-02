import React from "react";
import Post from "../post/Post";
import Users from "../users/Users";
import "./Body.scss";

const Body = () => {
  return (
    <>
      <div className="body">
        <Post />
        <Users />
      </div>
    </>
  );
};

export default Body;
