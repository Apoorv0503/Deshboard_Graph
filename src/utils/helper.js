// References :- https://github.com/joshcarr/largest-triangle-three-buckets.js/blob/master/lib/largest-triangle-three-buckets.js

/* 
groupDataByYear: This function takes an array of data objects as input, where each object contains a timestamp and a profitPercentage. 
It groups the data objects by year based on the timestamp property. It creates an object where each key represents a year, and 
the corresponding value is an array containing the profitPercentage values for that year.
*/

const groupDataByYear = (data) => {
  const groupedData = {};

  data.forEach((d) => {
    //  if d is null or undefined, the optional chaining operator(?.) will short-circuit and return undefined
    const year = new Date(d?.timestamp).getFullYear();

    //if no value for a particular year in the groupedData obj then assign an empty array
    if (!groupedData[year]) {
      groupedData[year] = [];
    }
    //else push the value
    groupedData[year].push(d?.profitPercentage);
  });

  return groupedData;

  /*
  groupedData will be: 
  { 
    '2016': [ 30.5310001373291,31.04343432411,........... etc ],
    '2017': [40.88238248684128, 42.903891271249214, ..........etc],
    .
    .
    .
    .
    .etc
 }
  */
};

/*
1. downsampledData: array of objs like: 
  {timestamp: "2016-07-01", profitPercentage: 30.5310001373291}

 */

export const processDataForChart = (downsampledData) => {
  const groupedData = groupDataByYear(downsampledData);

  //got an array of all the years in the labels variable
  const labels = Object.keys(groupedData);

  //data is an array containing elements: (avg profit for different years)
  const data = labels.map((year) => {
    // Calculate the average or some other relevant statistic for each year
    const avg =
      groupedData[year].reduce((sum, curr) => sum + curr, 0) /
      groupedData[year].length;

      // avg profit for a year= sum of all the elements in profit array for a year/total elements in the profit array;
    return avg;
  });

  return {
    //array of all the years in the labels variable
    labels, 
    datasets: [
      {
        label: "Average Profit Percentage",
        data, //array containing elements: (avg profit for different years)
        borderColor: "#25CD25",
        backgroundColor: 'rgba(37,205,37,0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  };
};
