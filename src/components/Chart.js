import React from "react";
import ChartBar from "./Chartbar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
          key={dataPoint.key}
        />
      ))}
    </div>
  );
};

export default Chart;
