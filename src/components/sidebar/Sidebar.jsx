import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdSubscriptions,
  MdHistory,
  MdThumbUp,
  MdLibraryBooks,
  MdSentimentDissatisfied,
  MdExitToApp,
} from "react-icons/md";

const Sidebar = ({sidebarTitle}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const activeIndexFromLocalStorage = localStorage.getItem("activeIndex");
    if (activeIndexFromLocalStorage) {
      setActiveIndex(parseInt(activeIndexFromLocalStorage));
    }
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", index);
  };

  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        <li
          className={`sidebar-item d-flex align-items-center ${
            activeIndex === 0 && "active"
          }`}
          onClick={() => handleClick(0)}
        >
          <AiOutlineHome
            size={24}
            className={`sidebar-logo ${activeIndex === 0 && "active"}`}
          />
          <div className={sidebarTitle ? "sidebarTitle open" : "sidebarTitle"}>
            
          <span className={`sidebarTitleBox ${activeIndex === 0 && "active"}`}>
            Home
          </span>
          </div>
        </li>

        <li
          className={`sidebar-item d-flex align-items-center ${
            activeIndex === 1 && "active"
          }`}
          onClick={() => handleClick(1)}
        >
          <MdSubscriptions
            size={24}
            className={`sidebar-logo ${activeIndex === 1 && "active"}`}
          />
          <div className={sidebarTitle ? "sidebarTitle open" : "sidebarTitle"}>
            
          <span className={`sidebarTitleBox ${activeIndex === 1 && "active"}`}>
            Subscriptions
          </span>
          </div>
        </li>

        <li
          className={`sidebar-item d-flex align-items-center ${
            activeIndex === 2 && "active"
          }`}
          onClick={() => handleClick(2)}
        >
          <MdHistory
            size={24}
            className={`sidebar-logo ${activeIndex === 2 && "active"}`}
          />
          <div className={sidebarTitle ? "sidebarTitle open" : "sidebarTitle"}>
            
          <span className={`sidebarTitleBox ${activeIndex === 2 && "active"}`}>
            History
          </span>
          </div>
        </li>

        <li
          className={`sidebar-item d-flex align-items-center ${
            activeIndex === 3 && "active"
          }`}
          onClick={() => handleClick(3)}
        >
          <MdThumbUp
            size={24}
            className={`sidebar-logo ${activeIndex === 3 && "active"}`}
          />
          <div className={sidebarTitle ? "sidebarTitle open" : "sidebarTitle"}>
            
          <span className={`sidebarTitleBox ${activeIndex === 3 && "active"}`}>
            Liked Video
          </span>
          </div>
        </li>

        <li
          className={`sidebar-item d-flex align-items-center ${
            activeIndex === 4 && "active"
          }`}
          onClick={() => handleClick(4)}
        >
          <MdLibraryBooks
            size={24}
            className={`sidebar-logo ${activeIndex === 4 && "active"}`}
          />
          <div className={sidebarTitle ? "sidebarTitle open" : "sidebarTitle"}>
          <span className={`sidebarTitleBox ${activeIndex === 4 && "active"}`}>
            Library
          </span>
          </div>
        </li>

        <li
          className={`sidebar-item d-flex align-items-center ${
            activeIndex === 5 && "active"
          }`}
          onClick={() => handleClick(5)}
        >
          <MdSentimentDissatisfied
            size={24}
            className={`sidebar-logo ${activeIndex === 5 && "active"}`}
          />
          <div className={sidebarTitle ? "sidebarTitle open" : "sidebarTitle"}>
            
          <span className={`sidebarTitleBox ${activeIndex === 5 && "active"}`}>
            I don't Know
          </span>
          </div>
        </li>
      </ul>
      <hr />
      <li
        className={`sidebar-item-login d-flex align-items-center ${
          activeIndex === 6 && "active"
        }`}
        onClick={() => handleClick(6)}
      >
        <MdExitToApp
          size={24}
          className={`sidebar-logo ${activeIndex === 6 && "active"}`}
        />
        <div className={sidebarTitle ? "sidebarTitle open" : "sidebarTitle"}>
          
        <span className={`sidebarTitleBox ${activeIndex === 6 && "active"}`}>
          Log Out
        </span>
        </div>
      </li>
      <hr />
    </nav>
  );
};

export default Sidebar;
