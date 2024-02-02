import React from "react";
import CustomText from "./CustomText";
import ChatsItem from "./ChatsItem";
import buyeravatar from "../assets/buyeravatar.png";

const ChatsWidget = ({ title, unread }) => {
  return (
    <div className="w-full flex p-4 flex-col items-start gap-2 bg-white rounded-2xl shadow-xl">
      <div className="w-full flex gap-2 px-2 pb-4 flex-col items-start">
        <CustomText
          className="text-xl font-semibold text-[#131313]"
          title={title}
        />
        <p className="text-[#454545] text-sm font-normal">
          {unread} unread messages
        </p>
      </div>
      <div className="w-full flex justify-center items-center gap-2 flex-wrap">
        <ChatsItem profile={buyeravatar} isUnread />
        <ChatsItem profile={buyeravatar} isUnread />
        <ChatsItem profile={buyeravatar} />
        <ChatsItem profile={buyeravatar} />
        <ChatsItem profile={buyeravatar} />
        <ChatsItem profile={buyeravatar} />
        <ChatsItem profile={buyeravatar} isUnread />
        <ChatsItem profile={buyeravatar} isUnread />
      </div>
    </div>
  );
};

export default ChatsWidget;
