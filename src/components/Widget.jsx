import React from "react";
import greenarrow from "../assets/greenarrow.png";
import AnimatedProgressBar from "./AnimatedProgressBar";
import RedirectButton from "./RedirectButton";
import CustomText from "./CustomText";

const Widget = ({
  delay,
  children,
  title,
  value,
  subTitle,
  greenArrow,
  clickableLink,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 px-6 pt-6 bg-white shadow-xl rounded-2xl">
      <div className={`w-full flex ${children? 'justify-center': 'justify-start pb-4'}`}>
        <CustomText title={title} className={'text-xl font-semibold text-[#131313]'}/>
      </div>
      {children ? (
        <div>
          {children}
        </div>
      ) : (
        <>
          <div className="flex items-baseline gap-2">
            <AnimatedProgressBar targetProgress={value} delay={delay}/>
            {greenArrow && <img src={greenarrow} alt="link" loading="lazy"/>}
          </div>
          <CustomText className="font-normal text-sm text-[#454545]" title={subTitle}/>
        </>
      )}
      <RedirectButton children={children ? true: false} clickableLink={clickableLink}/>
    </div>
  );
};

export default Widget;
