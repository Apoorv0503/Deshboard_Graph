import React from 'react';
import brownarrow from "../assets/brownarrow.png";

const RedirectButton = ({children, clickableLink}) => {
  return (
    <button className={`flex ${children? 'justify-center relative -top-10': 'justify-start'} ${clickableLink === 'All customers'? 'pt-3': 'pt-10'} items-end`}>
        <span className="text-sm font-normal text-[#734A00]">
          {clickableLink}
        </span>
        <img className="w-4" src={brownarrow} alt="link" loading="lazy"/>
      </button>
  )
}

export default RedirectButton