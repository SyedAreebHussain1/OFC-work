import React, { useEffect, useState } from 'react'
import { HorizontalBar } from "react-chartjs-2";
import { connect } from "react-redux";
import { showAllCalls } from "../middleware";

const CallingGraph = (props) => {

  const datasetKeyProvider = () => { return Math.random(); }

  const onSuccess = () => { };
  const onFailure = () => { };
  var data = {
    labels: [],
    datasets: []
  }
  var colors = [
    '#fb6340',
    '#577893',
    'rgb(94, 82, 228)',
    'rgb(255, 205, 86)',
    'rgb(44, 52, 228)',
    'rgb(255, 99, 132)',
    'rgb(25, 215, 46)',
    'rgb(235, 79, 132)',]  // add as many colors as there will be areas (maximum)
  useEffect(() => {
    props.Calls !== null && props.Calls !== undefined && props.Calls.forEach(function (e) {
      // create labels
      var labelIndex = data.labels.indexOf(e.name)
      if (labelIndex === -1) {
        labelIndex = data.labels.length;
        data.labels.push(e.name);
        // dummy entries for each dataset for the label
        data.datasets.forEach(function (dataset) {
          dataset.data.push(0)
        })
      }
      // get the area dataset
      var area = data.datasets.filter(function (area) {
        return (area.label === e.status_name);
      })[0]
      // otherwise create it
      if (area === undefined) {
        area = {
          label: e.status_name,
          data: data.labels.map(function () {
            return 0;
          }),
          backgroundColor: colors[data.datasets.length],
        };
        data.datasets.push(area)
      }
      // set the value
      area.data[labelIndex] = e.totalcalls;
    });
    setStage(data)
  }, [props.Calls])

  const [stage, setStage] = useState(null)
  useEffect(() => {
    let body = {}
    if (props.id !== null && props.id !== undefined && props.id.startDate !== null && props.id.endDate) {
      body = {
        DateR1: props.id.startDate,
        DateR2: props.id.endDate,
      }
    }
    else {
      body = {
        DateR1: null,
        DateR2: null,
      }
    }

    props.showAllCalls(body, onSuccess, onFailure)
   
  }, [props.id])
  return (
    <div>
      <div className="chart">
        <HorizontalBar
          data={stage}
          datasetKeyProvider={datasetKeyProvider}
          options={{
            animation: {
              animateScale: true,
            },
            scales: {
              yAxes: [{
                barPercentage: 0.2
              }],
              xAxes: [{
                barPercentage: 0.1
              }]
            },
            legend: {
              display: true,
              position: 'top',
            },
          }}
        />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  isLoading: state.callinggraph.isLoading,
  isError: state.callinggraph.isError,
  Error: state.callinggraph.error,
  Calls: state.callinggraph.Calls,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showAllCalls: (body, OnSuccess, OnFailure) =>
      dispatch(showAllCalls(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(CallingGraph);