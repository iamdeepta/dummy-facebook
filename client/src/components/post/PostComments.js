import React from "react";
import "./PostComments.scss";

const PostComments = ({ comment }) => {
  let today_date = new Date().getTime();

  let day_diff = (today_date - Number(comment.created_at)) / (1000 * 3600 * 24);

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
            <p>
              {day_diff < 1
                ? Math.round(day_diff * 24) === 0
                  ? `${Math.round(day_diff * 24 * 60)}m`
                  : `${Math.round(day_diff * 24)}h`
                : `${Math.round(day_diff)}d`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostComments;
