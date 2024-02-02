import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import collapseright from "../assets/Collapse-right.png";
import collapseleft from "../assets/Collapse-left.png";
import logo from "../assets/Logo.png";
import bar from "../assets/Bar.png";
import setting from "../assets/setting.png";
import profile from "../assets/profile.png";
import logout from "../assets/logout.png";
import search from "../assets/search.png";
import logoicon from "../assets/Logo-icon.png";
import { Link } from "react-router-dom";
import { navItems } from "../utils/constants";
import CustomText from "./CustomText";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const inputRef = useRef();

  const ClickedOnSearchButton = () => {
    setIsCollapsed(false);
  };

  useEffect(() => {
    if (!isCollapsed) {
      inputRef.current && inputRef.current.focus();
    }
  }, [isCollapsed]);

  return (<div
      className={`flex flex-col h-full max-w-[320px] items-start
      rounded-2xl gap-4 p-4 bg-white text-black ${
        isCollapsed ? "w-28" : "w-1/4"
      } transition-width shadow-2xl duration-300`}
    >
      <div className="w-full flex justify-center items-center p-4">
        <Link to={"/"} className="">
          <img src={!isCollapsed ? logo : logoicon} loading="lazy"/>
        </Link>
      </div>

      <div className="w-full flex justify-center items-center">
        <div
          className={`w-full flex justify-center gap-1 items-center ${
            !isCollapsed && "px-4 py-1 rounded-3xl border-2 border-[#f1f1f1]"
          }`}
        >
          <button onClick={ClickedOnSearchButton}>
            <img
              className={isCollapsed ? "" : "w-4 h-4"}
              src={isCollapsed ? bar : search}
              alt="search-button"
              loading="lazy"
            />
          </button>
          {!isCollapsed && (
            <input
              ref={inputRef}
              type="text"
              name="search"
              placeholder="Search"
              className="w-full px-4 py-2 outline-none"
            />
          )}
        </div>
      </div>

      <nav className="w-full flex flex-col justify-center gap-4">
        {navItems.map((item) => (
          <NavItem key={item.name} item={item} isCollapsed={isCollapsed} />
        ))}
      </nav>

      <div className="mt-auto p-4 ">
        <button
          className={`relative ${
            isCollapsed ? "-top-4 left-12" : "-top-4 left-[260px]"
          } flex justify-center p-2 bg-gray-300 items-center rounded-full`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <img
            className="w-6 h-6"
            src={isCollapsed ? collapseright : collapseleft}
            alt="collapse-sidebar"
            loading="lazy"
          />
        </button>
        {/* Bottom section with user profile, settings, and logout */}

        {/* User Profile */}
        <div className="flex items-center gap-2 mb-4">
          <img src={profile} className="w-[50px]" alt="profile-icon" loading="lazy"/>
          {!isCollapsed && (
            <div className="w-full flex flex-col">
              <CustomText
                className="text-[#131313] text-md font-medium"
                title={"Gustavo Xavier"}
              />
              <CustomText
                className="bg-[#FFCD71] rounded-3xl w-fit font-normal text-[10px] px-1.5"
                title={"Admin"}
              />
            </div>
          )}
        </div>

        {/* Settings Button */}
        <button className="flex items-center gap-2 p-2 rounded-3xl hover:bg-[#FFF7E8] w-full">
          <img src={setting} alt="setting-icon" loading="lazy"/>
          {/* Placeholder for settings icon */}
          {!isCollapsed && (
            <CustomText className={"font-normal text-md"} title={"Settings"} />
          )}
        </button>

        {/* Logout Button */}
        <button className="flex items-center gap-2 p-2 w-full mt-2">
          <img src={logout} alt="logout-icon" loading="lazy"/>
          {/* Placeholder for logout icon */}
          {!isCollapsed && (
            <CustomText
              className="font-normal text-md text-[#B01212]"
              title={"Logout"}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
