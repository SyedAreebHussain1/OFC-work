import React from "react";
import Headers from "components/Headers/Header1";
import { useState, useEffect } from "react";
import Select from 'react-select';
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
// import Projects from "../../../components/Graph/Projects"
// import AllProjects from "components/Graph/AllProjects";
import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";
import { projects } from "config/api/URL";
import AllGraph from "./AllGraph";

const Dashboard = (props) => {
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  var well = {
    boxShadow: "3px 3px 3px 3px rgba(0, 0, 0, 0.16), 3px 3px 3px 3px rgba(0, 0, 0, 0.16)",
    borderRadius: '5%',
  }
  const [state, setState] = useState({
    id: null,
    userName: "",
  });

  const onChange = (val, name) => {
  
    if (name === "project_name") {
     
      setState({ ...state, id: val });
  
    } else {
      setState({ ...state, [name]: val });
    }
  };

  // auto complete on Project 
  const [project, setproject] = useState([null]);
  useEffect(() => {
    if (props.ProjectsName !== null && props.ProjectsName !== undefined) {
      let arr = [];
      for (let i = 0; i < props.ProjectsName.length; i++) {
        let obj = {
          value: props.ProjectsName[i].Project_id,
          label: props.ProjectsName[i].Project_name,
        }
        arr.push(obj);
      }

      setproject(arr);
    }

  }, [props.ProjectsName])

  useEffect(() => {
    props.showProject(onsuccess, onfailure);
  }, [true])

  const onsuccess = () => { };
  const onfailure = () => { };

  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <AllGraph />
      </Container>
    </>
  );
};
export default Dashboard


