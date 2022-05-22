import "./styles.css";
import React, { useEffect, useState } from "react";
import fetchData from "./utils";
import Circle from "./Circle";
import { Line } from "./Line";

const DATA_URL = "https://mocki.io/v1/18936d28-2f79-4840-b146-5622e8ad1e77";

const Chart = () => {
  const [data, setData] = useState([]);
  const xScale = [],
    yScale = [];
  for (let i = 1; i < 15; i++) {
    xScale.push(i);
  }
  for (let i = 14; i > 0; i--) {
    yScale.push(i);
  }

  useEffect(() => {
    const getChartData = async () => {
      const data = await fetchData(DATA_URL);
      setData(data);
    };
    getChartData();
  }, []);

  return (
    <div className="chart-wrapper">
      <div className="chart-wrapper__vertical">
        <Line range={yScale} className="chart-wrapper__yScale" />
      </div>
      <div className="chart-wrapper__circleContainer">
        {data?.map((item, indx) => {
          const { salary, compratio, headcount, title } = item;
          return (
            <Circle
              key={indx}
              x={salary}
              y={headcount}
              z={compratio}
              title={title}
            />
          );
        })}
      </div>
      <div className="chart-wrapper__horizontal">
        <Line range={xScale} className="chart-wrapper__xScale" />
      </div>
    </div>
  );
};

export default Chart;
