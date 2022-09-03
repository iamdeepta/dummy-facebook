import React from "react";
import "./Header.scss";
import { BsMessenger, BsBellFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillHome, AiOutlineShop } from "react-icons/ai";
import { TbFlag3 } from "react-icons/tb";
import { FiAirplay } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import { useEffect } from "react";

const Header = () => {
  const { user, getCurrentUser } = useGetCurrentUser();

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);
  return (
    <>
      <div className="header">
        <div className="header_left">
          <img src="/images/fb_logo.PNG" alt="facebook" />
          <div className="header_left_search">
            <input type="text" placeholder="Search Facebook" />
            <BiSearch className="header_left_search_icon" />
          </div>
        </div>
        <div className="header_middle">
          <AiFillHome className="header_middle_menu" />
          <TbFlag3 className="header_middle_menu" />
          <FiAirplay className="header_middle_menu" />
          <AiOutlineShop className="header_middle_menu" />
          <HiUserGroup className="header_middle_menu" />
        </div>
        <div className="header_right">
          <CgMenuGridO className="header_right_menu" />
          <BsMessenger className="header_right_menu" />
          <BsBellFill className="header_right_menu" />
          <img src={user.profile_picture} alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Header;
