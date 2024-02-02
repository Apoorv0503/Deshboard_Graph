import React from "react";

const TopBuyer = ({ title, name, company, profilePic }) => {
  return (
    <div className="w-1/3 bg-white rounded-2xl flex flex-col gap-4 shadow-xl p-4">
      <span className="text-[#7D7D7D] text-base font-semibold">{title}</span>
      <div className="flex flex-col justify-end items-start gap-2">
        <div className="flex justify-center items-center w-6 h-6">
          <img src={profilePic} alt="top-buyer-icon" loading="lazy"/>
        </div>
        <div className="flex flex-col gap-1 items-start justify-center">
          <span className="text-[#131313] font-medium text-xs">{name}</span>
          <span className="text-[#454545] font-normal text-[10px]">
            {company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBuyer;
