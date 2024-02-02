import React from "react";
import newdealplus from "../assets/newdealplus.png";

const NewDealsItem = ({ title }) => {
  return (
    <div className="flex cursor-pointer py-3 pl-3 pr-4 items-center justify-center gap-2 rounded-2xl bg-[#FFF7E8]">
      <img className="w-6 h-6" src={newdealplus} alt="new-deal" loading="lazy"/>
      <span className="text-[#734A00] font-normal text-sm">{title}</span>
    </div>
  );
};

export default NewDealsItem;
