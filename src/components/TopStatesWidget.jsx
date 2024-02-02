import React from "react";
import CustomText from "./CustomText";
import TopStateGradientItem from "./TopStateGradientItem";

const TopStatesWidget = ({ title }) => {
  return (
    <div className="w-full p-6 flex flex-col gap-2 items-start bg-white rounded-2xl shadow-xl">
      <div className="w-full flex pb-4 flex-col items-start gap-2">
        <CustomText
          className="text-xl font-semibold text-[#131313]"
          title={title}
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <TopStateGradientItem statename="NY" dealValue={"120"} />
        <TopStateGradientItem statename="MA" dealValue={"80"} />
        <TopStateGradientItem statename="NH" dealValue={"70"} />
        <TopStateGradientItem statename="OR" dealValue={"50"} />
      </div>
    </div>
  );
};

export default TopStatesWidget;
