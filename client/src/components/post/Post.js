import React, { useState, useEffect } from "react";
import "./Post.scss";
import { FaVideo } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { GoSmiley } from "react-icons/go";
import PostItem from "./PostItem";
import api from "../../api/baseurl";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";

const Post = () => {
  const [text, setText] = useState("");

  const { user, getCurrentUser } = useGetCurrentUser();

  const [posts, setPosts] = useState([]);

  //retrieve posts
  const getPosts = async () => {
    const response = await api.get("posts");
    return response.data;
  };

  useEffect(() => {
    const getAllPosts = async () => {
      const allPosts = await getPosts();

      if (allPosts) {
        setPosts(allPosts);
      }
    };

    getAllPosts();
  }, []);

  //render current user data
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  //   console.log(posts);
  return (
    <>
      <div className="post">
        <div className="post_input">
          <div className="post_input_up">
            <img src={user.profile_picture} alt="profile" />
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
          {posts.map((post) => {
            return (
              <>
                <PostItem post={post} key={post.id} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Post;
