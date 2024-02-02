import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS, //representing the chart instance
  CategoryScale, //for x-axis
  LinearScale, //for y-axis
  PointElement, //data points in graph
  LineElement, // lines connecting data points 
  Title, //add title to the chart
  Tooltip, //additional information when the user hovers over or interacts with data points 
  Legend, //key to the various elements or datasets present in the chart
  Filler, //to fill the area below or above a line or between lines
  registerables, // additional plugins like chart types, custom scales, or other features.
} from "chart.js";

// "react-chartjs-2": This is the module from which you're importing the Line component. 
// In this case, it's a library called react-chartjs-2, which provides React components for rendering Chart.js charts in a React application.
import { Line } from "react-chartjs-2";

//other compoent used for showing the graph title
import CustomText from "./CustomText";

//helper functions used here
import {
  largestTriangleThreeBuckets,
  processDataForChart,
} from "../utils/helper";


import FileUpload from "./FileUpload";
import graphsortby from "../assets/graphsortby.png";
import { options } from "../utils/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ...registerables
);

// title= Graph as a prop
const GraphWidget = ({ title }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
/*
      downsampledData is an array containing objs like: 
        [
        {
          timestamp: "2016-07-01",
          profitPercentage: 30.5310001373291
        },
        {
          ...
          ....
        },
      ]
*/
        const response = await fetch('https://chakrtask.onrender.com/api/downsampled');
        const downsampledData = await response.json();
        console.log(downsampledData);
      // Prepare the data for Chart.js
        const NewData = processDataForChart(downsampledData);
        setChartData(NewData);
      } catch (error) {
        console.error('Error fetching data from the API', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="w-full p-6 flex flex-col gap-2 items-start bg-white rounded-2xl shadow-xl">
        <div className="w-full flex pb-4 justify-between items-center">
          <CustomText
            title={title}
            className={"text-xl font-semibold text-[#131313]"}
          />

          <div className="flex items-center gap-1">
            <span className="text-[#454545] text-sm font-normal">Yearly</span>
            <button>
              <img src={graphsortby} alt="graph-sortby" loading="lazy"/>
            </button>
          </div>
        </div>

        {/* 
        1. options: This is a prop passed to the Line component. It contains configuration options for the chart, such as its title, 
                    axes configurations, legend settings, etc. These options are typically defined as an object.

        2. data: This is another prop passed to the Line component. It contains the data that will be displayed on the chart.
         */}

        <Line options={options} data={chartData} />
      </div>
    </>
  );
};

export default GraphWidget;
