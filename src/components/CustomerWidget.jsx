import React from "react";
import sortbydownarrow from "../assets/sortbydownarrow.png";
import CustomerItem from "./CustomerItem";
import buyeravatar from "../assets/buyeravatar.png";
import RedirectButton from "./RedirectButton";
import CustomText from "./CustomText";

const CustomerWidget = ({ sortBy }) => {
  return (
    <div className="w-1/2 rounded-2xl flex flex-col gap-4 py-6 bg-white shadow-xl">
      <div className="flex px-6 justify-between items-center">
        <CustomText
          className="text-xl font-semibold text-[#131313]"
          title={"Customers"}
        />
        <div className="flex gap-1 items-center justify-center">
          <span className="text-[#454545] text-sm font-normal">
            {"Sort by"} <span className="font-medium">{sortBy}</span>
          </span>
          <button>
            <img
              className="w-3.5 h-3.5"
              src={sortbydownarrow}
              alt="sort-by-down-arrow"
              loading="lazy"
            />
          </button>
        </div>
      </div>
      <div className="px-2 flex flex-col items-start">
        <CustomerItem
          profilePic={buyeravatar}
          customerName={"Maggie Johnson"}
          customerCompanyName={"Oasis Organic Inc."}
        />
        <CustomerItem
          profilePic={buyeravatar}
          customerName={"Maggie Johnson"}
          customerCompanyName={"Oasis Organic Inc."}
        />
        <CustomerItem
          profilePic={buyeravatar}
          customerName={"Maggie Johnson"}
          customerCompanyName={"Oasis Organic Inc."}
        />
        <CustomerItem
          profilePic={buyeravatar}
          customerName={"Maggie Johnson"}
          customerCompanyName={"Oasis Organic Inc."}
        />
        <CustomerItem
          profilePic={buyeravatar}
          customerName={"Maggie Johnson"}
          customerCompanyName={"Oasis Organic Inc."}
        />
      </div>
      <div className="flex px-6 items-end gap-2">
        <RedirectButton children={false} clickableLink={"All customers"} />
      </div>
    </div>
  );
};

export default CustomerWidget;
