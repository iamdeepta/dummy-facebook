import React from "react";
import "./LeftSidebar.scss";
import LeftSidebarItem from "./LeftSidebarItem";
import { BsPeopleFill, BsClockHistory } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineShop } from "react-icons/ai";
import { FiAirplay } from "react-icons/fi";

const LeftSidebar = () => {
  return (
    <>
      <div className="left_sidebar">
        <div className="left_sidebar_list">
          <LeftSidebarItem
            item={
              <img src="https://picsum.photos/200/300?random=1" alt="profile" />
            }
            item_name={"Deepta Barua"}
          />
          <LeftSidebarItem
            item={<BsPeopleFill className="left_sidebar_img_icon" />}
            item_name={"Friends"}
          />
          <LeftSidebarItem
            item={<HiUserGroup className="left_sidebar_img_icon" />}
            item_name={"Groups"}
          />
          <LeftSidebarItem
            item={<AiOutlineShop className="left_sidebar_img_icon" />}
            item_name={"Marketplace"}
          />
          <LeftSidebarItem
            item={<FiAirplay className="left_sidebar_img_icon" />}
            item_name={"Watch"}
          />
          <LeftSidebarItem
            item={<BsClockHistory className="left_sidebar_img_icon" />}
            item_name={"Memories"}
          />
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
