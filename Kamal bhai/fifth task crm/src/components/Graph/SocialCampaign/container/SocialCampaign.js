import React, { useEffect, useState } from 'react'
import axios from "axios";
import { SocialLeads } from "../../../../config/api/URL";
import { Pie, Chart } from "react-chartjs-2";
import { connect } from "react-redux";
import { showSocialCampaignGraph } from "../middleware";

const SocialCampaign = (props) => {

  // useEffect(() => {

  // }, [props.AllCampaign])

  useEffect(() => {
    props.showSocialCampaignGraph(onSuccess, onFailure)
  
  }, [true])
  const onSuccess = () => { };
  const onFailure = () => { };

  useEffect(() => {

    let labels = [];
    let data = [];

    if (props.AllCampaign !== null && props.AllCampaign !== undefined) {
      props.AllCampaign.map(element => {
   
        labels.push(element.campaign_name);
        data.push(element.totalleads);
      });
    }
    setStage({
      labels: labels,
      datasets: [{
        label: "Campaign",
        data: data,
        backgroundColor: [
          '#5e72e4',
          '#5603ad',
          '#577893',
          '#fb6340',
        ],
        hoverBackgroundColor: [
          '#5e72e4',
          '#5603ad',
          '#577893',
          '#fb6340',
        ],
        defaultStatus: false,
        // borderWidth: 1
      }]
    });
  }, [props.AllCampaign])
  const [stage, setStage] = useState("");

  // const Chart = () => {
  //   let labels = [];
  //   let data = [];

  //   axios({
  //     method: "get",
  //     url: SocialLeads,
  //     // data: Body,
  //   })
  //     .then((res) => {
  //       const res1 = res.data.response;
  //  
  //       // setStage(res.data.response);
  //       res1.forEach(element => {
  //      
  //         labels.push(element.campaign_name);
  //         data.push(element.totalleads);
  //       });
  //      
  //       setStage({
  //         labels: labels,
  //         datasets: [{
  //           label: "Campaign",
  //           data: data,
  //           backgroundColor: [

  //             '#5e72e4',
  //             '#5603ad',
  //             '#577893',
  //             '#fb6340',
  //             // 'blue',
  //             // '#fb6340',
  //             // '#577893',
  //             // 'rgb(94, 82, 228)',
  //             'rgb(255, 205, 86)',
  //             'rgb(255, 99, 132)',
  //           ],
  //           hoverBackgroundColor: [
  //             '#5e72e4',
  //             '#5603ad',
  //             '#577893',
  //             '#fb6340',
  //             'rgb(255, 205, 86)',
  //             'rgb(255, 99, 132)',
  //           ],
  //           defaultStatus: false,
  //           // borderWidth: 1
  //         }]
  //       });
  //     })
  //     .catch(err => {
  //      
  //     })
  // }
  // useEffect(() => {
  //   Chart();
  // }, [true])
  return (
    <div>
      <div className="chart">
        {/* <canvas width="200" height="200"></canvas> */}
        {Object.keys(stage).length &&
          <Pie
            data={stage}
            // width='350px'
            // height="420px"
            // options={stage}
            options={{
              title: {
                display: true,
                text: 'Year 2021',
                fontSize: 15
              },
              animation:{
                animateScale: true,
              },
              legend: {
                display: true,
                position: 'top'
              }
            }}
          />}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.AllSocialCampaign.isLoading,
  isError: state.AllSocialCampaign.isError,
  Error: state.AllSocialCampaign.error,
  AllCampaign: state.AllSocialCampaign.AllCampaign,

});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showSocialCampaignGraph: (OnSuccess, OnFailure) =>
      dispatch(showSocialCampaignGraph(OnSuccess, OnFailure)),

  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(SocialCampaign);
