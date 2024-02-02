import React from 'react'

const CommonPage = ({title, profile}) => {
  return (
    <div className="w-full flex flex-col gap-4 p-20">
      <p className="text-[60px] font-bold text-[#131313] text-center">
        {title.toUpperCase()}
      </p>
      <img className="w-full h-full" src={profile} alt={`${title}-page`} loading="lazy"/>
    </div>
  )
}

export default CommonPage