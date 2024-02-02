import React, { useEffect } from "react";

const FileUpload = ({ onDataLoaded }) => {
  useEffect(() => {
    const loadCSV = async () => {
      try {
        const response = await fetch(
          'https://chakr-innovation-assignment.vercel.app/CHAKR-innovation-dataset.csv'
        );
        const text = await response.text();
        parseCSV(text);
      } catch (error) {
        console.error("Error loading CSV file", error);
      }
    };

    loadCSV();
  }, []);

  const parseCSV = (text) => {
    const lines = text.split("\n");
    const result = [];

    for (let i = 1; i < lines.length; i++) {
      // Skipping the header row
      const line = lines[i].trim();
      if (line) {
        const columns = line.split(",");
        const timestamp = columns[0].split(" ")[0];
        const profitPercentage = parseFloat(columns[1]);
        result.push({ timestamp, profitPercentage });
      }
    }

    onDataLoaded(result);
  };

  //   return <input type="file" accept=".csv" onChange={handleFileChange} />;
};

export default FileUpload;
