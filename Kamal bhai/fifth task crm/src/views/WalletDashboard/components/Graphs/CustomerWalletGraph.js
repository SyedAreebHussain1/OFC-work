import { Pie, Chart } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { chartOptions, parseOptions } from "variables/charts.js";
const CustomerWalletGraph = (props) => {
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  const [graphData, setGraphData] = useState("");
  const setData = () => {
    const labels = ["Daily", "Monthly", "Yearly"];
    const data = [300, 600, 700];
    setGraphData({
      labels: labels,
      datasets: [
        {
          label: "CustomerWallet",
          data: props.data,
          backgroundColor: ["#5e72e4", "#5603ad", "#577893", "#fb6340"],
          hoverBackgroundColor: ["#5e72e4", "#5603ad", "#577893", "#fb6340"],
          defaultStatus: false,
          // borderWidth: 1
        },
      ],
    });
  };
  useEffect(() => {
    // console.log("GRAPH DATA", props.data);
    setData();
  }, [props.data]);
  return (
    <>
      <div className="chart">
        {/* <canvas width="200" height="200"></canvas> */}

        {Object.keys(graphData).length && (
          <Pie
            data={graphData}
            // width='350px'
            // height="420px"
            // options={stage}
            options={{
              //   title: {
              //     display: true,
              //     text: "Customer wallet report",
              //     fontSize: 15,
              //   },
              animation: {
                animateScale: true,
              },
              legend: {
                display: true,
                position: "top",
              },
            }}
          />
        )}
      </div>
    </>
  );
};
export default CustomerWalletGraph;
