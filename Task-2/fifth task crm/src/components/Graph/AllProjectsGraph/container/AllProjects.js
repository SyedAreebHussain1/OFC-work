import React, { useEffect, useState, useCallback } from "react";
// import axios from "axios";
// import { allProjectsGraph } from "../../config/api/URL";
import { Pie } from "react-chartjs-2";
import {
  CardBody,
  Button,
  Container,
  CardHeader,
  Card,
  Row,
  Table,
  Col,
  Input,
} from "reactstrap";
import Chart from "chart.js";
import { chartOptions, parseOptions } from "variables/charts.js";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import PDF from "./PDF";

const AllProjects = (props) => {
  const [stage, setStage] = useState(null);

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  var well = {
    boxShadow:
      "3px 3px 3px 3px rgba(0, 0, 0, 0.16), 3px 3px 3px 3px rgba(0, 0, 0, 0.16)",
    borderRadius: "5%",
  };
  useEffect(() => {
 
    let labels = [];
    let data = [];
    var stageArr = [];
    if (props.AllProjects !== null && props.AllProjects !== undefined) {
     
      for (let i = 0; i < props.AllProjects.length; i++) {
        labels = [];
        data = [];
        var projectName = "",
          projectId = "";
        if (props.AllProjects[i] !== undefined) {
        
          projectName = props.AllProjects[i][0].Project_name;
         projectId = props.AllProjects[i][0].Project_id;
          for (let j = 0; j < props.AllProjects[i].length; j++) {
            labels.push(props.AllProjects[i][j].status_name);
            data.push(props.AllProjects[i][j].PlotStatusCount);
          }
        }
        stageArr.push({
          labels: [...labels],
          label: projectName,
          id: projectId,
          datasets: [
            {
              data: [...data],
              backgroundColor: [
                "blue",
                "#fb6340",
                "#577893",
                "rgb(94, 82, 228)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
                "rgb(44, 52, 228)",
                "rgb(25, 215, 46)",
                "rgb(235, 79, 132)",
              ],
              // backgroundColor: palette('tol', data.length).map(function(hex) {
              //   return '#' + hex;
              // }),
              hoverBackgroundColor: [
                "blue",
                "#fb6340",
                "#577893",
                "rgb(94, 82, 228)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
                "rgb(44, 52, 228)",
                "rgb(25, 215, 46)",
                "rgb(235, 79, 132)",
              ],
              defaultStatus: false,
              // borderWidth: 1
            },
          ],
        });
      }
      
      setStage(stageArr);
    }
  }, [props.AllProjects]);

 


  useEffect(() => {
    let body = {
      projectid: null,
    };
    props.showAllProjectsGraph(body, onsuccessProjectGraph, onfailure);
  }, [true]);
  const onsuccessProjectGraph = () => { };
  const onsuccess = () => {

    if (props.Report.length !== 0) {
      const doc = new jsPDF();
      // const img = 'data:image/'

      doc.text("Project", 20, 10);
      // doc.addImage(img, 'png', 0, 0)
      doc.autoTable({
        columns: columns.map((col) => ({ ...col, dataKey: col.field })),
        body: arr1[0],
        styles: { fontSize: 8, cellWidth: "auto", halign: "justify" },
        columnStyles: {
          4: { cellWidth: "wrap" },
          5: { cellWidth: "wrap" },
          6: { cellWidth: "wrap" },
        },
        rowPageBreak: "avoid",
      });
      doc.save("receipt.pdf");
    }
  };
  const onfailure = () => { };
  const columns = [
    { title: "Plot no", field: "Plot_no" },
    { title: "Project name", field: "Project_name" },
    { title: "Sector Name", field: "Sector_Name" },
    { title: "PlotType Name", field: "PlotType_Name" },
    { title: "Category Name", field: "CategoryName" },
    { title: "House Status", field: "House_StatusName" },
    { title: "Name", field: "user_name" },
    { title: "Phone", field: "user_phone" },
    { title: "Sell Agent Name", field: "SellAgentName" },
    { title: "Team Name", field: "TeamName" },
    { title: "Sale Quotation No", field: "SaleQuotationNo" },
  ];

  // if (body.projectid !== null) {
  // }

  const [body, setBody] = useState({
    projectid: '',
  });
  var arr1 = [];
  const [newst, setNewst] = useState({
    projectid: ''
  })

  useEffect(() => {


   
    props.showReport(body, () => onsuccessReport, onfailureReport);


    // }
  }, [body]);
  const onfailureReport = () => {

  }
  const printReport = () => {

    if (props.Report !== null && props.Report !== undefined && props.Report.length !== 0) {
      const doc = new jsPDF();
      doc.text("e.label", 20, 10);
      doc.autoTable({
        columns: columns.map((col) => ({ ...col, dataKey: col.field })),
        body: props.Report,
        styles: { fontSize: 8, cellWidth: "auto", halign: "justify" },
        columnStyles: {
          4: { cellWidth: "wrap" },
          5: { cellWidth: "wrap" },
          6: { cellWidth: "wrap" },
        },
        rowPageBreak: "avoid",
      });
      doc.save("download.pdf");
    };
  }
  const onsuccessReport = () => {

    printReport();







  };
  const onfailureReportt = () => { };
  const printDocument = (e) => {
  };
  const [value, setValue] = useState({})

  const pp = (e) => {

    setBody({ ...body, projectid: e.id });
 

  };

  return (
    <div className="chart" hidden={props.hidden}>
      <Row>
        {stage !== null &&
          stage !== undefined &&
          stage.map((opt, index) => {
           
            return (
              <Col xl="4">
                <Card className="bg-gradient-white" style={well}>
                  <CardHeader className="bg-transparent">
                    <Row className="align-items-center">
                      <div className="col">
                        <h2 className="mb-0">{(index, opt.label)}</h2>
                        <br />
                      </div>
                      {/* <PDF data={opt}/> */}
                      <Button
                        color="success"
                        onClick={(e) => pp(opt)}
                      >
                        Print &nbsp;
                        <i class="fas fa-print"></i>
                      </Button>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="chart">
                      <Pie
                        data={opt}
                        // options={stage1}
                        options={{
                          responsive: true,
                          defaultColor: false,
                          title: {
                            // text: "Year 2021", display: true, color: 'blue'
                          },
                          legend: {
                            display: true,
                            position: "top",
                          },
                        }}
                      />
                    </div>
                  </CardBody>
                </Card>
                <br />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
export default AllProjects;
