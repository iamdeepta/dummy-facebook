import React from "react";
import "./LeftSidebarItem.scss";

const LeftSidebarItem = ({ item, item_name }) => {
  return (
    <>
      <div className="left_sidebar_item">
        <div className="left_sidebar_img">{item}</div>
        <h4>{item_name}</h4>
      </div>
    </>
  );
};

export default LeftSidebarItem;
