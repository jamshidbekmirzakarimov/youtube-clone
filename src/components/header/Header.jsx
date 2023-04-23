import React from "react";
import "./header.css";
import YoutubeLogo from "../../assets/icons/youtubeLogo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa"
import {MdNotifications, MdApps} from "react-icons/md"

const Header = ({handleToggleSidebar}) => {
  return (
    <header>
      <div className="site-header-wrapper">
        <div className="header-start">
        <div className="menu-burger">
            <FaBars
              size={24}
            onClick={()=>handleToggleSidebar()}
            />
          </div>
          <img className="header-logo" src={YoutubeLogo} alt="youtube logo" />
          <form className="d-flex">
            <input type="search" placeholder="search" />
            <button>
              <AiOutlineSearch size={22} />
            </button>
          </form>
          </div>
        <div className="header-right">
          <div className="header-right-icon">
          <MdNotifications size={24} />
          </div>
          <div className="header-right-icon">
          <MdApps size={24} />
          </div>
          <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" width={50} height={50} alt="" />
          </div>
        </div>
    </header>
  );
};

export default Header;
