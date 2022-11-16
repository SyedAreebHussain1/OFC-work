import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Col,
  Row,
  Table,
} from "reactstrap";
import swal from "sweetalert";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import axios from "axios";
import { connect } from "react-redux";
import { URL, BASEURL } from "config/api/URL";
// import { NewUser } from "../middleware";
import { CheckAgent, SaveTeam, TeamName } from "../middleware";
// import { CheckAgent } from "../middleware";
// import { GetUserRole } from "store/helpers/GetUserRole/middleware";
import { GetTeam } from "store/helpers/GetTeam/middleware";
import Select from "react-select";


const AddTeam = (props) => {
  const selectRefManager = useRef();
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
                res.data.response[i].role_id === 3 &&
                res.data.response[i].teamid === null
              ) {
                let obj = {
                  value: res.data.response[i].Dashboarduserid,
                  label: res.data.response[i].name,
                };
                arr.push(obj);
              }
            }
            setSource(arr);
          }
        } else {
          console.log("FAILURE", res.data.message);
        }
      })
      .catch((error) => console.log("ERORR", error));
  };

  //reset and canel button "bilal"
  const ResetBTN = () => {
   selectRefManager.current.select.clearValue();
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("select")).forEach(
      (select) => (select.placeholder = "Agent Name")
    );
    setState({
      TeamName: "",
      Description: null,
      Dashboarduserid: "",
     

    });
    setError({
      nameError: "",
      teamNameError: "",
    });
  };
  const cancel = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("option")).forEach(
      (option) => (option.value = "Agent Name")
    );
    setState({
      TeamName: "",
      Description: null,
      Dashboarduserid: "",
    });
    setError({
      nameError: "",
      teamNameError: "",
    });
    props.toggle();
  };

  //agent name "bilal"
  // useEffect(() => {
  //     props.CheckAgent(OnSuccess, onFailure);

  // }, [true]);

  //   useEffect(() => {
  //     if (props.Data !== null && props.Data !== undefined) {
  //       let arr = [];
  //       for (let i = 0; i < props.Data.response.length; i++) {
  //         if (
  //           props.Data.response[i].role_id === 3 &&
  //           props.Data.response[i].teamid === null
  //         ) {
  //           let obj = {
  //             value: props.Data.response[i].Dashboarduserid,
  //             label: props.Data.response[i].name,
  //           };
  //           arr.push(obj);
  //         }
  //       }
  //       setSource(arr);
  //     }
  //   }, [props.Data]);
  const OnSuccess = () => {};
  const onFailure = () => {};

  //validation code "bilal"
  const [error, setError] = useState({
    nameError: "",
    teamNameError: "",
  });
  const OnChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const CheckFields = (name) => {
    if (name === "fullName") {
      setError({
        ...error,
        nameError: validate("fullName", state.TeamName),
      });
    } else if (name === "required") {
      setError({
        ...error,
        teamNameError: validate("required", state.Dashboarduserid),
      });
    }
  };

  // state for team add "bilal"
  const [state, setState] = useState({
    TeamName: "",
    Description: null,
    Dashboarduserid: "",
  });

  const OnSuccessTeam = () => {};
  const onFailureTeam = () => {};

  //for add new team success and failure "bilal"
  const AddUser = () => {
    if (error.nameError !== null || error.teamNameError !== null) {
      setError({
        ...Error,
        nameError: validate("fullName", state.TeamName),
        teamNameError: validate("required", state.Dashboarduserid),
      });
    }
    // if (state.TeamName == '' || state.Dashboarduserid == '') {
    //     swal("Sorry!",
    //         "Team already exists",
    //         "error");
    // }
    else {
      // if (props.Error !== null) {

      props.SaveTeam(state, onSuccess, OnFailure);

      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
      setState({
        TeamName: "",
        Description: null,
      });
      setError({
        nameError: "",
        teamNameError: "",
      });
      // }
      // else {
      //     OnFailure();
      // }
    }
  };

  const onSuccess = () => {
    swal("Congratulations!", "Your Team is inserted successfully", "success");
    props.toggle();
    props.TeamName(OnSuccessTeam, onFailureTeam);
   // props.CheckAgent(OnSuccess, onFailure);
  };
  const OnFailure = () => {
    swal("Error!", "Team already Exists", "error");
  };

  //dropdown values for team name "bilal"
  const [source, setSource] = useState("");
  const OnChangeSource = (val) => {
    let bodyVal = parseInt(val);
    setSource(val);
    setState({ ...state, Dashboarduserid: bodyVal });
  };
  const onChange = (val, name) => {
    if (val !== null && val !== undefined) {
    if (name === "user_name") {
      setState({ ...state, Dashboarduserid: val.value });
    }
  }
  };
  useEffect(() => {
    getAllLeads();
  }, []);
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader>Add Team </ModalHeader>
      <ModalBody>
        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-single-02" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Team Name"
            type="text"
            value={state.TeamName}
            onBlur={() => CheckFields("fullName")}
            onChange={(e) => OnChange(e.target.value, "TeamName")}
          />
        </InputGroup>
        {error.nameError !== "" && error.nameError !== null && (
          <small>
            <span style={{ color: "red" }}>{error.nameError}</span>
          </small>
        )}
        <br />

        <InputGroup className="form-control-muted">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fa fa-info" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Description"
            type="text"
            value={state.Description}
            onBlur={() => CheckFields("description")}
            onChange={(e) => OnChange(e.target.value, "Description")}
          />
        </InputGroup>
        {/* {error.descriptionError !== "" && error.descriptionError !== null && (
                    <small>
                        <span style={{ color: "red" }}>{error.descriptionError}</span>
                    </small>
                )} */}
        <br />

        <Row>
          <Col lg="6" md="6" sm="6">
            <Select
              isDisabled={
                props.source_data == undefined && props.source_data == null
              }
              className="basic-single"
              classNamePrefix="select"
              isSearchable={true}
              options={props.source_data}
              id="exampleFormControlSelect1"
              type="select"
              placeholder="Agent Lead Name"
             ref={selectRefManager}
              //value={state.Dashboarduserid}
           // value={props.source_data.id}
              onBlur={() => CheckFields("required")}
              onChange={(e) => onChange(e, "user_name")}
            />
            {props.source_data == null && props.source_data == undefined && (
              <small>
                <span style={{ color: "red" }}>No Manager Found</span>
              </small>
            )}
            {error.teamNameError !== "" && error.teamNameError !== null && (
              <small>
                <span style={{ color: "red" }}>{error.teamNameError}</span>
              </small>
            )}
          </Col>
          {/* <Col lg="6" md="6" sm="6" xs="12">
                        <Input
                            id="exampleFormControlSelect1"
                            type="select"
                            value={props.source_data}
                            onChange={(e) => OnChangeSource(e.target.value)}
                            onBlur={() => CheckFields("required")}
                        >
                            <option value={null} key={null}>Agent Lead Name</option>
                            {props.Data !== null &&
                                props.Data !== undefined &&
                                props.Data.map((source) => {
                                    if (source.role_id === 3 && source.teamid === null && source.teamid !== undefined) {
                                        return (
                                            <option key={source.Dashboarduserid} value={source.Dashboarduserid}>
                                                {source.name}
                                            </option>
                                        );
                                    }

                                })}
                        </Input>
                        {error.teamNameError !== "" && error.teamNameError !== null && (
                            <small>
                                <span style={{ color: "red" }}>{error.teamNameError}</span>
                            </small>
                        )}
                    </Col> */}
        </Row>
        {/* <Col>
                        <Button color="success" size="sm" onClick={AddUser}>
                            <i className="fas fa-plus"></i>
                        </Button>

                        <Button color="info" size="sm" onClick={ResetBTN}>
                            <i className="fas fa-undo"></i>
                        </Button>
                        <Button color="danger" size="sm" onClick={props.toggle}>
                        <i className="fas fa-times"></i>
                        </Button>
                    </Col> */}
        <br />
        {/* 
                <Row>
                <Table className="align-items-center" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Team Name</th>
                        <th scope="col">Lead</th>
                        <th scope="col">Members</th>
                        <th scope="col" >Modal</th>
                      </tr>
                    </thead>
                    
                  </Table>
                </Row> */}
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={AddUser}>
          <i className="ni ni-fat-add" /> &nbsp; Add Team
        </Button>
        <Button 
        //className="btn btn-primary customcolor" 
        color="info"
         onClick={ResetBTN}>
          <i className="fas fa-undo" /> &nbsp; Reset
        </Button>
        <Button color="danger" onClick={cancel}>
          <i className="ni ni-fat-remove" /> &nbsp; Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

// export default AddNew

const mapStateToProps = (state) => ({
  Team: state.getTeam.Agents,

  // Data

  // isLoading: state.agent.isLoading,
  // isError: state.agent.isError,
  // Data: state.agent.Data,
  // Error: state.agent.error,

  isLoading: state.agent.isLoading,
  isError: state.agent.isError,
  Data: state.agent.Data,
  Error: state.agent.Error,
  AssignResponse: state.agent.AssignResponse,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    SaveTeam: (body, OnSuccess, OnFailure) =>
      dispatch(SaveTeam(body, OnSuccess, OnFailure)),
    // UserRole: (OnSuccess, OnFailure) =>
    //     dispatch(GetUserRole(OnSuccess, OnFailure)),
    TeamName: (body, OnSuccess, OnFailure) =>
      dispatch(GetTeam(body, OnSuccess, OnFailure)),
    // CheckAgent: (body, OnSuccess, OnFailure) =>
    //   dispatch(CheckAgent(body, OnSuccess, OnFailure)),
    // CheckAgent: (OnSuccess, OnFailure) =>
    //   dispatch(CheckAgent(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(AddTeam);
