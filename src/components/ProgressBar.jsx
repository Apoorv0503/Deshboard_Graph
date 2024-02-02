import React from 'react'

const ProgressBar = ({progress}) => {
    const strokeWidth = 15;
    const radius = 100 - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 200) * circumference;
  
    return (
      <div className="w-full flex flex-col items-center">
        <svg width="200" height="120">
          <circle
            cx="100"
            cy="120"
            r={radius}
            fill="transparent"
            stroke="#FFF7E8"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset="0"
          />
          <circle
            cx="100"
            cy="120"
            r={radius}
            fill="transparent"
            stroke="#FFCD71"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(180, 100, 120)"
          />
        </svg>
        <div className="relative -top-8 text-center font-medium text-[#131313] text-3xl">
          {progress}%
        </div>
      </div>
    );
}

export default ProgressBar;