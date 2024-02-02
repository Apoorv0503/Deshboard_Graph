import React from "react";
import CustomText from "./CustomText";

const TopMonthYear = ({ title, subtitle, ismonth = false, value }) => {
  return (
    <div className="w-1/3 bg-white rounded-2xl flex flex-col gap-4 shadow-xl p-4">
      <CustomText
        className="text-[#7D7D7D] text-base font-semibold"
        title={title}
      />
      <div className={`flex flex-col ${!ismonth && 'gap-2'} justify-end items-start`}>
        <CustomText
          className="text-[#734A00] font-semibold text-2xl"
          title={subtitle}
        />
        <CustomText
          className={`${ismonth ? 'text-[#FFA500]': 'text-[#454545]'} font-medium text-base`}
          title={`${ismonth ? value : `${value} sold so far`}`}
        />
      </div>
    </div>
  );
};

export default TopMonthYear;
