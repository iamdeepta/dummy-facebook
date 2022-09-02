import React from "react";
import "./PostItem.scss";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";

const PostItem = () => {
  return (
    <>
      <div className="post_item">
        <div className="post_item_header">
          <div className="post_item_header_img">
            <img src="https://picsum.photos/200/300?random=2" alt="profile" />
            <div className="post_item_header_img_text">
              <h6>Rahul Baidya</h6>
              <p>10h</p>
            </div>
          </div>

          <FiMoreHorizontal className="post_item_header_icon" />
        </div>

        <div className="post_item_body">
          <p>
            Adding fuel to the fire, however, was Sri Lanka coach Chris
            Silverwood's tactics during the first innings of the match in
            Sharjah. Continuing the practice that earned varied opinions from
            his stint in England, Silverwood displayed coded signals for Sri
            Lanka skipper Shanaka – something that didn't go down quite well
            with many Bangladesh supporters.
          </p>

          <div className="post_item_body_bottom">
            <div className="post_item_body_bottom_like_comment_count">
              <div className="post_item_body_bottom_like_count">
                <AiFillLike className="post_item_body_bottom_like_count_icon" />
                <p>23</p>
              </div>
              <a href="/">20 comments</a>
            </div>

            <div className="post_item_body_bottom_like_comment_share">
              <div className="post_item_body_bottom_like">
                <AiOutlineLike className="post_item_body_bottom_like_icon" />
                <span>Like</span>
              </div>
              <div className="post_item_body_bottom_like">
                <BiComment className="post_item_body_bottom_like_icon comment" />
                <span>Comment</span>
              </div>
              <div className="post_item_body_bottom_like">
                <RiShareForwardLine className="post_item_body_bottom_like_icon" />
                <span>Share</span>
              </div>
            </div>
          </div>

          <div className="post_item_comments"></div>
        </div>
      </div>
    </>
  );
};

export default PostItem;
