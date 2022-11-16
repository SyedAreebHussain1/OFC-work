import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Sucessfullleadgraph } from "../../../../config/api/URL";
import { Line, } from "react-chartjs-2";
import { connect } from "react-redux";
import { showAllLeadGraph } from "../middleware";
const SuccessfullLead = (props) => {


  useEffect(() => {
    props.showAllLeadGraph(onSuccess, onFailure)
  }, [true])
  const onSuccess = () => { };
  const onFailure = () => { };


  const [stage1, setStage1] = useState("");
  useEffect(() => {
    let labels = [];
    let data = Array.from(Array(12)).fill(0);
    if (props.SuccessfullGraph !== null && props.SuccessfullGraph !== undefined) {
      props.SuccessfullGraph.map((item, i) => { data[parseInt(item.month) - 1] = parseInt(item.Sucessfulllead) });;
      props.SuccessfullGraph.map(element => {
    
        labels.push(element.month);
        data.push(element.Sucessfulllead);
      });
    }
    setStage1({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      // labels: labels,
      datasets: [{
        label: "Successful",
        data: data,

        backgroundColor: [
          'rgb(239, 182, 49)',
          'rgb(114, 82, 128)',
          'rgb(239, 182, 49)',
          'rgb(255, 205, 86)',
          '#fb6340',
          '#577893',
          '#1171ef',
          'rgb(255, 99, 132)',
          'rgb(54, 162, 35)',
          'rgb(15, 205, 86)',
          'rgb(255, 255, 0)',
          'rgb(239, 182, 49)',
          'rgb(239, 182, 49)',
        ],
        options: {
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'probability'
              }
            }]
          }
        },
        fill: false,
      }],

    });
  }, [props.SuccessfullGraph])
  useEffect(() => {
    let body = {}
    if (props.id !== null && props.id !== undefined) {
      body = {
        agentid: props.id.id
      }
    }
    else {
      body = {
        agentid: null
      }
    }

    props.showAllLeadGraph(body, onSuccess, onFailure);
  }, [props.id])
  return (
    <div>
      <div className="chart">
        {Object.keys(stage1).length &&
          <Line
            data={stage1}
            options={stage1}
            options={{
              responsive: true,
              defaultColor: false,
              animation:{
                animateScale: true,
              },
              title: { text: "", display: true, },
              scales:{
                yAxes:[{
                  // type: 'logarithmic',
                  ticks:{
                    beginAtZero: true,
                    // stepSize: 1,
                    // precision: 0,
                  },
                  
                }]
              }
            }}
          />
        }
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  isLoading: state.AllSuccessfullGraph.isLoading,
  isError: state.AllSuccessfullGraph.isError,
  Error: state.AllSuccessfullGraph.error,
  SuccessfullGraph: state.AllSuccessfullGraph.SuccessfullGraph,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showAllLeadGraph: (body, OnSuccess, OnFailure) =>
      dispatch(showAllLeadGraph(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(SuccessfullLead);
