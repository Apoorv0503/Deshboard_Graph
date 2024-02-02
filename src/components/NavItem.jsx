import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomSVG from "./CustomSVG";
import uparrow from "../assets/Opened.png";
import downarrow from "../assets/Closed.png";

const NavItem = ({ item, isCollapsed }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  const active = location.pathname === item.path;
  const activeItem = hasChildren ? item.children.some(item => item.path === location.pathname) : active;

  const getNavigationItem = () => {
    
    return (
      <div className={`w-full hover:text-[#734A00] flex items-center justify-center gap-2`}>
        <CustomSVG
          width={isCollapsed ? "25" : "25"}
          height={isCollapsed ? "25" : "25"}
          fillColor={activeItem ? "#FFA500" : "#7D7D7D"}
          type={item.type}
        />
        {!isCollapsed && (
          <div className="w-full flex items-center justify-between">
            <span
              className={`font-normal text-md ${activeItem ? 'text-[#734A00]':'text-[#131313]'}`}
            >
              {item.name}
            </span>
            {hasChildren && <img className="w-4 h-4" loading="lazy" src={isOpen ? uparrow : downarrow} />}
          </div>
        )}
      </div>
    );
  };

  if (hasChildren) {
    return (
      <div className="cursor-pointer w-full" onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`${
            isCollapsed ? "px-1" : "pl-6 pr-4"
          } w-full flex flex-col py-2 ${
            (isOpen) && "bg-[#FFF7E8]"
          } hover:bg-[#FFF7E8] text-[#131313] rounded-3xl`}
        >
          {getNavigationItem()}
          {isOpen && !isCollapsed && (
            <div className="flex flex-col">
              {item.children.map((child) => (
                <Link
                  to={child.path}
                  key={child.name}
                  className="pl-8 pr-4 py-2 hover:bg-[#FFF7E8] text-[#655252]"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <Link className="w-full" to={`${item.path}`}>
          <div
            className={`${
              isCollapsed ? "px-4" : "w-[280px] pl-6 pr-20"
            } flex flex-col py-2 hover:bg-[#FFF7E8] hover:text-[#734A00] text-[#131313] rounded-3xl`}
          >
            {getNavigationItem()}
          </div>
        </Link>
      </div>
    );
  }
};

export default NavItem;
