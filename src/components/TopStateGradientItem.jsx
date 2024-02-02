import React, { useEffect, useState } from "react";
import CustomText from "./CustomText";

const TopStateGradientItem = ({ statename, dealValue }) => {
  const [width, setWidth] = useState("");
  useEffect(() => {
    const getWidth = () => {
      switch (dealValue) {
        case "120":
          setWidth("w-[100%]");
          break;
        case "80":
          setWidth("w-[85%]");
          break;
        case "70":
          setWidth("w-[75%]");
          break;
        case "50":
          setWidth("w-[60%]");
          break;
        default:
          setWidth("");
          break;
      }
    };

    getWidth();
  }, [dealValue]);

  return (
    <div
      className={`relative ${width} flex px-2 py-1.5 flex-col 
      rounded bg-gradient-to-r from-[#FFCD71] 
      to-[rgba(255, 205, 113, 0.00)] items-start justify-center gap-2`}
    >
      <CustomText
        className="text-sm font-semibold text-[#131313]"
        title={statename}
      />
      <span className="absolute text-xs font-semibold text-[#131313] top-2 right-4">
        {dealValue}K
      </span>
    </div>
  );
};

export default TopStateGradientItem;
