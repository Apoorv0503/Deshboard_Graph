import React from "react";
import CustomText from "./CustomText";
import NewDealsItem from "./NewDealsItem";

const NewDealsWidget = ({ title }) => {
  return (
    <div className="w-full p-6 flex flex-col gap-2 items-start flex-1 bg-white rounded-2xl shadow-xl">
      <div className="flex pb-4 flex-col items-start gap-2">
        <CustomText
          className="text-xl font-semibold text-[#131313]"
          title={title}
        />
      </div>
      <div className="flex items-start content-start gap-2 flex-wrap">
        <NewDealsItem title={"Fruit2Go"} />
        <NewDealsItem title={"Marshall MKT"} />
        <NewDealsItem title={"CCNT"} />
        <NewDealsItem title={"Joana Mini-market"} />
        <NewDealsItem title={"Little Brazil Vegan"} />
        <NewDealsItem title={"Target"} />
        <NewDealsItem title={"Organic Place"} />
        <NewDealsItem title={"Morello"} />
      </div>
    </div>
  );
};

export default NewDealsWidget;
