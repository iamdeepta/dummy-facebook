import React, { useState } from "react";
import "./Post.scss";
import { FaVideo } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { GoSmiley } from "react-icons/go";
import PostItem from "./PostItem";

const Post = () => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="post">
        <div className="post_input">
          <div className="post_input_up">
            <img src="https://picsum.photos/200/300?random=1" alt="profile" />
            <input
              type="text"
              placeholder="What's on your mind, Deepta?"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="post_input_down">
            <div className="post_input_down_options">
              <FaVideo className="post_input_down_options_icon video" />
              <span>Live video</span>
            </div>
            <div className="post_input_down_options">
              <BsImages className="post_input_down_options_icon gallery" />
              <span>Photo/video</span>
            </div>
            <div className="post_input_down_options">
              <GoSmiley className="post_input_down_options_icon feeling" />
              <span>Feeling/activity</span>
            </div>
          </div>
          <div className="post_input_button">
            <button className="btn_post">Post</button>
          </div>
        </div>

        <div className="post_list">
          <PostItem />
        </div>
      </div>
    </>
  );
};

export default Post;
