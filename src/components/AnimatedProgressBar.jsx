import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const AnimatedProgressBar = ({ targetProgress, isProgressbar = false, delay }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prevProgress) => {
        if (prevProgress < targetProgress) {
          return prevProgress + 1;
        } else {
          clearInterval(intervalId);
          return prevProgress;
        }
      });
    };

    const intervalId = setInterval(updateProgress, delay);

    return () => clearInterval(intervalId);
  }, [targetProgress]);

  if (isProgressbar) {
    return <ProgressBar progress={progress} />;
  }

  return (
    <div
      className={`${
        isProgressbar ? "relative -top-8 text-center text-3xl" : "text-[48px]"
      } font-medium text-[#131313]`}
    >
      {progress}%
    </div>
  );
};

export default AnimatedProgressBar;
