import React from "react";
import "./PostComments.scss";

const PostComments = () => {
  return (
    <>
      <div className="post_comments">
        <img src="https://picsum.photos/200/300?random=1" alt="profile" />
        <div className="post_comments_msg">
          <div className="post_comments_msg_content">
            <h6>Daniel Robusto</h6>
            <p>Good point, but consider removing the last five words.</p>
          </div>
          <div className="post_comments_hour">
            <p>2h</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostComments;
