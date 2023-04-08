import React, { useState, useEffect } from "react";
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
  Badge,
  Tooltip,
} from "reactstrap";
import OpenNewModal from "../helpers/Agent_Modal";
import TeamModal from "../helpers/TeamModal";
import DeleteAgent from "../helpers/delete_agent";
import { AgentTable } from "./AgentTable";
import Select from "react-select";
import { URL, BASEURL } from "config/api/URL";
import axios from "axios";
export const Form = (props) => {
  const [source, setSource] = useState("");
  const [sourcedata, setSourceData] = useState("");
  const [source2, setSource2] = useState("");
  const [state, setState] = useState({
    roleId: "",
    teamid: "",
  });
  useEffect(() => {
    if (props.role !== null && props.role !== undefined) {
      let arr = [];
      for (let i = 0; i < props.role.length; i++) {
        let obj = {
          value: props.role[i].user_role_name,
          label: props.role[i].user_role_name,
        };
        arr.push(obj);
      }
      setSource2(arr);
    }
  }, [props.role]);

  useEffect(() => {
    if (props.team !== null && props.team !== undefined) {
      let arr = [];
      for (let i = 0; i < props.team.length; i++) {
        let obj = {
          value: props.team[i].TeamName,
          label: props.team[i].TeamName,
        };
        arr.push(obj);
      }
      setSource(arr);
    }
  }, [props.team]);

  // const [body, setBody] = useState({
  //   role_id: null,
  //   teamid: null,
  // });

  // Data Filtration
  // Start
  //for add new employee state "bilal"

  // const [source2, setSource2] = useState("");
  const onChange = (val, name) => {
    setState({ ...state, [name]: val });
  };

  // const OnChangeTeam = (val) => {
  //   setBody({ ...body, teamid: parseInt(val) });
  // };
  // const OnChangeSoures = (val) => {
  //   let bodyVal = parseInt(val);
  //   setSource2(val);
  //   setBody({ ...body, teamid: bodyVal });
  // };
  // const OnChangeSouress = (val) => {
  //   let bodyVal = parseInt(val);
  //   setSource(val);
  //   setBody({ ...body, role_id: bodyVal });
  // };

  //modal open close code "bilal"
  const [isOpenModal, setIsOpenModal] = useState(false);
  const togglerModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  // const [clientId, setClientId] = useState("");
  // const [clientPhone, setClientPhone] = useState("");
  // const toggler = (val, phone) => {
  //     setClientId(val);
  //     setClientPhone(phone);
  //     setIsOpen(!isOpen);
  // };
  const [isOpenTeamModal, setIsOpenTeamModal] = useState(false);
  const togglerTeamModal = (props) => {
    setIsOpenTeamModal(!isOpenTeamModal);
    // setSendData(props.Data);
  };
  const [isOpenDelete, setIsOpenDelete] = useState({
    state: false,
    data: null,
  });
  const toggleDelete = (data) => {
    setIsOpenDelete({
      ...isOpenDelete,
      state: !isOpenDelete.state,
      data: data,
    });
  };
  const Delete = (data) => {
    setIsOpenDelete({
      ...isOpenDelete,
      state: !isOpenDelete.state,
      data: data,
    });
  };
  // const [information, setinformationOpen] = useState(false);

  // const infoToggle = () => setinformationOpen(!information);

  // const [tooltipOpen, setTooltipOpen] = useState(false);

  // const toggle = () => setTooltipOpen(!tooltipOpen);
  const onReset = () => {
    setState({ ...state, roleId: "", teamid: "" });
  };
  const getAllLeads = () => {
    let token = localStorage.getItem("auth");
    const AGENT_PATH = "showallDashboarduser";
    axios
      .get(`${BASEURL}${AGENT_PATH}?page=${1}&limit=${100000}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          if (res.data !== null && res.data !== undefined) {
            let arr = [];
            for (let i = 0; i < res.data.response.length; i++) {
              if (
                res.data.response[i].role_id == 3 &&
                res.data.response[i].TeamName === null
              ) {
                let obj = {
                  value: res.data.response[i].Dashboarduserid,
                  label: res.data.response[i].name,
                };
                arr.push(obj);
              }
            }
            setSourceData(arr);
          }
        } else {
          console.log("FAILURE", res.data.message);
        }
      })
      .catch((error) => console.log("ERORR", error));
  };
  useEffect(() => {
    getAllLeads();
  }, []);
  return (
    <CardBody>
      <OpenNewModal
        getlead_middleware={getAllLeads}
        modal={isOpenModal}
        toggle={togglerModal}
      />
      {isOpenTeamModal && (
        <TeamModal
          source_data={sourcedata}
          middleware={props.CheckAgent}
          modal={isOpenTeamModal}
          toggle={togglerTeamModal}
        />
      )}
      <Row>
        <Col lg="3" md="4" sm="6" xs="12">
          <Button size="lg" color="success" onClick={togglerModal}>
            Add New Employee &nbsp;{" "}
            <span>
              <i className="ni ni-fat-add" />
            </span>
          </Button>
        </Col>
        <Col lg="4" md="4" sm="6" xs="12">
          <Button size="lg" color="success" onClick={togglerTeamModal}>
            Add New Team &nbsp;{" "}
            <span>
              <i className="ni ni-fat-add" />
            </span>
          </Button>
        </Col>
      </Row>
      <br />

      {/* Data Filtration Work */}
      <Row>
        <Col lg="4" md="4" sm="6" xs="12">
          <label className="form-control-label" for="input-username">
            User Role
          </label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isSearchable={true}
            options={source2}
            id="exampleFormControlSelect1"
            type="select"
            placeholder="User Role Name"
            value={{ label: state.roleId }}
            // onChange={(e) => OnChangeSource(e.target.value)}
            onChange={(e) => onChange(e.value, "roleId")}
          />
        </Col>
        <Col lg="4" md="4" sm="6" xs="12">
          <label className="form-control-label" for="input-username">
            Team Name
          </label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isSearchable={true}
            options={source}
            id="exampleFormControlSelect1"
            type="select"
            placeholder="Team Name"
            value={{ label: state.teamid }}
            onChange={(e) => onChange(e.value, "teamid")}
          />
        </Col>
        <Col lg="4" md="4" sm="6" xs="12">
          <label className="form-control-label" for="input-username">
            {" "}
          </label>

          <Button color="danger" size="sm" id="reset" onClick={onReset}>
            <span className="btn-inner--text"></span>
            <span className="btn-inner--icon">
              <i className="fas fa-undo"></i>
            </span>
          </Button>
        </Col>

        <br />
      </Row>
      <AgentTable
        Data={props.Data}
        state={state}
        UserRole={props.UserRole}
        GetTeam={props.GetTeam}
        Role={props.Role}
        Team={props.Team}
        showUpdateEmployee={props.showUpdateEmployee}
        Update={props.Update}
        DeleteAgent={props.DeleteAgent}
        Delete={props.Delete}
        CheckAgent={props.CheckAgent}
        Response={props.Response}
        AssignResponse={props.AssignResponse}
      />
    </CardBody>
  );
};
