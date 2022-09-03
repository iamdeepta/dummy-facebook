import React from "react";
import "./PostComments.scss";

const PostComments = ({ comment }) => {
  return (
    <>
      <div className="post_comments">
        <img src={comment.user.profile_picture} alt="profile" />
        <div className="post_comments_msg">
          <div className="post_comments_msg_content">
            <h6>{comment.user.name}</h6>
            <p>{comment.text}</p>
          </div>
          <div className="post_comments_hour">
            <p>{comment.created_at}h</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostComments;
