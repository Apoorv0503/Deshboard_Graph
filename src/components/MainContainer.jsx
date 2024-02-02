import React, { useEffect } from "react";
import CustomerWidget from "./CustomerWidget";
import ChatsWidget from "./ChatsWidget";
import TopStatesWidget from "./TopStatesWidget";
import NewDealsWidget from "./NewDealsWidget";
import FirstRowWidgetContainer from "./FirstRowWidgetContainer";
import TopBuyer from "./TopBuyer";
import GraphWidget from "./GraphWidget";
import buyeravatar from "../assets/buyeravatar.png";
import TopMonthYear from "./TopMonthYear";

const MainConatiner = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full flex flex-col gap-4">
      <FirstRowWidgetContainer />
      <div className="w-full flex gap-4">
        <CustomerWidget sortBy={"Newest"} />
        <div className="w-1/2 flex flex-col gap-4">
          <GraphWidget title={"Graph"} />
          <div className="w-full flex gap-4">
            <TopMonthYear
              title={"Top month"}
              subtitle={"November"}
              ismonth
              value={"2019"}
            />
            <TopMonthYear title={"Top year"} subtitle={"2023"} value={"96K"} />
            <TopBuyer
              title={"Top buyer"}
              name={"Maggie Johnson"}
              company={"Oasis Organic Inc."}
              profilePic={buyeravatar}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="flex w-7/12 gap-4">
          <ChatsWidget title={"Chats"} unread={2} />
          <TopStatesWidget title={"Top states"} />
        </div>
        <div className="w-5/12">
          <NewDealsWidget title={"New deals"} />
        </div>
      </div>
    </div>
  );
};

export default MainConatiner;
