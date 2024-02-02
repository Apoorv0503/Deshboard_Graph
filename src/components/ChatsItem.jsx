import React from "react";
import redchat from "../assets/redchat.png";

const ChatsItem = ({ profile, isUnread = false }) => {
  return (
    <div
      className={`flex cursor-pointer p-3 items-center gap-2 rounded-2xl ${
        isUnread ? "bg-[#FFF7E8]" : ""
      }`}
    >
      <div className="relative flex w-8 h-8 justify-center items-center">
        <img src={profile} alt="profile-pic" loading="lazy" className="w-8 h-8 rounded-3xl" />
        {isUnread && (
          <img
            src={redchat}
            alt="online"
            className="absolute top-1 left-6 w-2 h-2"
          />
        )}
      </div>
    </div>
  );
};

export default ChatsItem;
