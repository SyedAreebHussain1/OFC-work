import React, { useEffect, useState } from "react";
import { chartOptions, parseOptions } from "variables/charts.js";
import {
  Card,
  CardHeader,
  Container,
  CardBody,
  Row,
  Col,
  Button,
} from "reactstrap";
import { Pie } from "react-chartjs-2";
import SuccessfullLead from "../../../components/Graph/SuccessfulLead/container/SuccessfullLead";
import SocialCampaign from "../../../components/Graph/SocialCampaign/container/SocialCampaign";
import Select from "react-select";
import Chart from "chart.js";
import jsPDF from "jspdf";
import CallingGraph from "components/Graph/CallingGraph/container/CallingGraph";
import { connect } from "react-redux";
import { showAllCalls } from "components/Graph/CallingGraph/middleware";

const AllGraph = (props) => {
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  useEffect(() => {
    if (props.Response !== null && props.Response !== undefined) {
      let arr = [
        {
          value: null,
          label: "All successfull leads",
          name: "Overall data",
          // Dashboarduserid: 0,
          // phoneNo: 0,
          // role_id: 0,
          // fcmtoken: null,
        },
      ];
      for (let i = 0; i < props.Response.length; i++) {
        let obj = {
          value: props.Response[i].Dashboarduserid,
          label: props.Response[i].name,
        };
        arr.push(obj);
      }
      setOptions(arr);
    }
  }, [props.Response]);

  const [options, setOptions] = useState([null]);
  // end of show data on grid
  const [state, setState] = useState({
    id: null,
    userName: "",
    AgentName: "",
  });
  const onChange = (val, val2, name) => {
    if (name === "user_name") {
      setState({ ...state, id: val, AgentName: val2 });
    } else {
      setState({ ...state, [name]: val });
    }
  };
  var style = {
    boxShadow:
      "3px 3px 3px 3px rgba(0, 0, 0, 0.16), 3px 3px 3px 3px rgba(0, 0, 0, 0.16)",
    borderRadius: "15px",
  };
  useEffect(() => {
    props.showAllCalls(onsuccessReport, onfailureReport);
  }, [true]);

  const [detail, setdetail] = useState();

  const onsuccessReport = () => {};
  const onfailureReport = () => {};
  const columns = [
    { title: "Agent Name", field: "name" },
    { title: "Status Name", field: "status_name" },
    { title: "Total Calls", field: "totalcalls" },
  ];

  var dt = new Date();
  const nDate = new Date(dt).toLocaleString("en-US", {
    timeZone: "Asia/Karachi",
  });

  const printDocument = () => {
    let ArrayForPrintFile = [];
    let sortedArrayForPrintFile = [];
    let parentArray = [];

    let dashboardUserId = [];
    let uniqueDashboardUserId = [];

    let arrayForsortedAgentsName1 = [];
    let j = 0;
    ArrayForPrintFile.push(props.Calls);

    if (ArrayForPrintFile[0] !== null && ArrayForPrintFile[0] !== undefined) {
      for (let i = 0; i <= ArrayForPrintFile[0].length; i++) {
        if (
          ArrayForPrintFile[0][i] !== null &&
          ArrayForPrintFile[0][i] !== undefined
        ) {
          sortedArrayForPrintFile.push(ArrayForPrintFile[0][i]);

          dashboardUserId.push(sortedArrayForPrintFile[i].Dashboarduserid);
        }
      }

      uniqueDashboardUserId = [...new Set(dashboardUserId)];
    }

    if (
      sortedArrayForPrintFile.length !== null &&
      sortedArrayForPrintFile.length !== undefined
    ) {
      for (let j = 0; j < uniqueDashboardUserId.length; j++) {
        let arrayForsortedAgentsName = [];

        for (let i = 0; i < sortedArrayForPrintFile.length; i++) {
          if (
            sortedArrayForPrintFile[i].Dashboarduserid ==
            uniqueDashboardUserId[j]
          ) {
            arrayForsortedAgentsName.push(sortedArrayForPrintFile[i]);
          }
        }
        parentArray.push(arrayForsortedAgentsName);

        //}
      }
    }

    //  }
    //}
    //  }

    parentArray.push(arrayForsortedAgentsName1);

    const doc = new jsPDF();
    // const inputData = document.getElementById('chart');

    doc.text("Agent Calling Report", 20, 10);

    //loop
    for (let i = 0; i < parentArray.length - 1; i++) {
      doc.autoTable({
        columns: columns.map((col) => ({ ...col, dataKey: col.field })),

        body: parentArray[i],
        styles: { fontSize: 8, cellWidth: "auto", halign: "justify" },
      });
    }
    let canvas = document.getElementById("chart");

    //     var dataURL = canvas[0].toDataUrl('image/jpeg').slice('data:image/jpeg;base64,'.length);
    //     // // Convert the data to binary form
    //     // data = atob(data);
    // doc.addImage(dataURL,'JPEG', 10, 10, 280, 150 )

    doc.save(`Total Agent Calls_${nDate}.pdf`);
  };

  useEffect(() => {
    let labels = [];
    let data = [];
    if (props.Calls !== null && props.Calls !== undefined) {
      props.Calls.map((element) => {
        labels.push(element.status_name);
        data.push(element.totalcounts);
      });
    }
    setStage({
      labels: labels,
      datasets: [
        {
          label: "data",
          data: data,
          backgroundColor: ["#5e72e4", "#5603ad", "#577893", "#fb6340"],
          hoverBackgroundColor: ["#5e72e4", "#5603ad", "#577893", "#fb6340"],
          defaultStatus: false,
          // borderWidth: 1
        },
      ],
    });
  }, [props.Calls]);
  const [stage, setStage] = useState("");
  const [body, setBody] = useState({
    startDate: null,
    endDate: null,
  });
  const OnChange = (value, name) => {
    setBody({
      ...body,
      [name]: value,
    });
  };

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    const a = year + "-" + month + "-" + date;
    datesetstate({ ...dateState, CurrentDate: a });
  }, [true]);
  const [dateState, datesetstate] = useState({
    CurrentDate: "",
  });

  return (
    <div>
      <Row>
        <Col className="mb-5 mb-xl-0" xl="8">
          <Card className="bg-gradient-white" style={style}>
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-muted ls-1 mb-1">
                    Successfull Lead
                  </h6>
                  <h2 className="mb-0">Total Successful Lead</h2>
                </div>
                <Col lg="6" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Agent Name
                  </label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isSearchable={true}
                    options={options}
                    id="exampleFormControlSelect1"
                    type="select"
                    placeholder="All Successfull Leads"
                    value={options.id}
                    onChange={(e) => onChange(e.value, e.label, "user_name")}
                  />
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart">
                <SuccessfullLead id={state} />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="bg-gradient-white" style={style}>
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-muted ls-1 mb-1">
                    Social Accounts Campaign
                  </h6>
                  <h2 className="mb-0">Total Campaign</h2>
                  <br />
                </div>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart" id="chart">
                <SocialCampaign />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="mb-5 mb-xl-0" xl="12">
          <Card className="bg-gradient-white" style={style}>
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <Col lg="3" md="6" sm="6">
                  <h6 className="text-uppercase text-muted ls-1 mb-1">
                    Call outcome totals
                  </h6>
                  <h2 className="mb-0">Total Agent Calls</h2>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="input-username"
                    className="form-control"
                    placeholder="DD-MM-YYYY"
                    value={body.startDate}
                    max={dateState.CurrentDate}
                    onChange={(e) => OnChange(e.target.value, "startDate")}
                  ></input>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <label className="form-control-label" for="input-username">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="input-username"
                    className="form-control"
                    placeholder="DD-MM-YYYY"
                    value={body.endDate}
                    onChange={(e) => OnChange(e.target.value, "endDate")}
                  ></input>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <Button color="success" onClick={printDocument}>
                    Generate Report &nbsp;
                    <i class="fas fa-print"></i>
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart">
                <CallingGraph id={body} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5"></Row>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.callinggraph.isLoading,
  isError: state.callinggraph.isError,
  Error: state.callinggraph.error,
  Calls: state.callinggraph.Calls,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showAllCalls: (OnSuccess, OnFailure) =>
      dispatch(showAllCalls(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(AllGraph);
