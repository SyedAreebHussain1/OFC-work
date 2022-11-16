import React, { useState, useRef, useEffect } from "react";
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
  Form,
} from "reactstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import swal from "sweetalert";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import axios from "axios";
import { connect } from "react-redux";
// import { NewUser } from "../middleware";
import { SaveAgent, CheckAgent } from "../middleware/index";
import { GetUserRole } from "store/helpers/GetUserRole/middleware";
import { GetTeam } from "store/helpers/GetTeam/middleware";
import NotificationAlert from "react-notification-alert";
import Select from "react-select";
import { setRef } from "@material-ui/core";

const AddEmployee = (props) => {
  const selectRefRoleID = useRef();
  const selectRefTeamId = useRef();

  const notify = useRef(null);
  const ResetBTN = () => {
    selectRefRoleID.current.select.clearValue();
    selectRefTeamId.current.select.clearValue();
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("option")).forEach(
      (option) => (option.value = null)
    );
    setState({
      name: "",
      email: "",
      password: randPwd,
      phoneNo: "",
      Description: "",
      role_id: "",
      teamid: "",
    });
    // setSource2({...source2,role_id:""})
    // setSource2({...source2,role_id:""})
    setError({
      nameError: "",
      emailError: "",
      phoneError: "",
      userRoleError: "",
    });
  };
  const cancel = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setState({
      name: "",
      email: "",
      password: randPwd,
      phoneNo: "",
      Description: "",
      role_id: "",
      teamid: "",
    });
    setError({
      nameError: "",
      emailError: "",
      phoneError: "",
      userRoleError: "",
    });
    props.toggle();
  };

  //for user role "bilal"
  useEffect(() => {
    props.UserRole(onSuccessRole, onFailureRole);
  }, [true]);
  useEffect(() => {
    if (props.Role !== null && props.Role !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Role.length; i++) {
        let obj = {
          value: props.Role[i].role_id,
          label: props.Role[i].user_role_name,
        };
        arr.push(obj);
      }
      setSource2(arr);
    }
  }, [props.Role]);
  const onSuccessRole = () => {};
  const onFailureRole = () => {};

  //for team name "bilal"
  useEffect(() => {
    props.TeamName(OnSuccessTeam, onFailureTeam);
  }, [true]);
  useEffect(() => {
    if (props.Team !== null && props.Team !== undefined) {
      let arr = [];
      for (let i = 0; i < props.Team.length; i++) {
        let obj = {
          value: props.Team[i].teamid,
          label: props.Team[i].TeamName,
        };
        arr.push(obj);
      }
      setSource(arr);
    }
  }, [props.Team]);
  const OnSuccessTeam = () => {};
  const onFailureTeam = () => {};

  //validation state "bilal"
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    userRoleError: "",
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
        nameError: validate("fullName", state.name),
      });
    } else if (name === "email") {
      setError({
        ...error,
        emailError: validate("email", state.email),
      });
    } else if (name === "phoneNumber") {
      setError({
        ...error,
        phoneError: validate("phoneNumber", state.phoneNo),
      });
    } else if (name === "required") {
      setError({
        ...error,
        userRoleError: validate("required", state.role_id),
      });
    }
  };
  //for generate random password "bilal"
  var chars = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "012",
  ];
  var randPwd = [5, 3, 2]
    .map(function (len, i) {
      return Array(len)
        .fill(chars[i])
        .map(function (x) {
          return x[Math.floor(Math.random() * x.length)];
        })
        .join("");
    })
    .concat()
    .join("")
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  // console.log("RANDOMGENERATOR", randPwd);
  //for add new employee state "bilal"
  const [state, setState] = useState({
    name: "",
    email: "",
    password: randPwd,
    phoneNo: "",
    Description: "",
    role_id: "",
    teamid: "",
  });

  //function add employee "bilal"

  const AddUser = () => {
    if (
      state?.phoneNo?.trim().length <= 6 ||
      state?.phoneNo?.trim().length > 29
    ) {
      setError({
        ...error,
        phoneError: validate("phoneNumber", state.phoneNo),
      });
    }
    // console.log("PHONE ERROR",error.phoneError)
    if (state.role_id == 2) {
      // console.log("INSIDE IF OF ROLE ID")
      setError({
        ...error,
        nameError: validate("fullName", state.name),
        emailError: validate("email", state.email),
        phoneError: validate("phoneNumber", state.phoneNo),
        userRoleError: validate("required", state.role_id),
        teamNameError: validate("required", state.teamid),
      });
      if (
        state.name !== "" &&
        state.email !== "" &&
        (error?.phoneError?.trim().length <= 0 || error?.phoneError == null) &&
        state.role_id !== "" &&
        state.teamid !== "" &&
        state.teamid !== null &&
        error.emailError == null
      ) {
        // console.log("INNER INSIDE IF OF ROLE ID WHEW MIDDLEWARE IS HIT")
        props.AddEmployee(state, onSuccessUser, OnFailureUser);
      }
    } else {
      // console.log("ELSE OF ROLE ID")
      setError({
        ...error,
        nameError: validate("fullName", state.name),
        emailError: validate("email", state.email),
        phoneError: validate("phoneNumber", state.phoneNo),
        userRoleError: validate("required", state.role_id),
      });
      if (
        state.name !== "" &&
        state.email !== "" &&
        (error?.phoneError?.trim().length <= 0 || error?.phoneError == null) &&
        state.role_id !== "" &&
        error.emailError == null
      ) {
        // console.log("ELSE INNER IF BEFORE API HIT")
        props.AddEmployee(state, onSuccessUser, OnFailureUser);
      }
    }
    // if (error.nameError !== null || error.emailError !== null || error.phoneError !== null || error.userRoleError !== null) {

    // }

    // else {

    //  props.showUpdateEmployee(state, onSuccessUser, OnFailureUser);

    // setState({
    //   name: "",
    //   email: "",
    //   phoneNo: "",
    //    role_id: '',
    //   teamid: null
    // });
    // setError({
    //   nameError: "",
    //   emailError: "",
    //   phoneError: "",
    //   userRoleError: "",
    // })
    //  }
  };

  // const AddUser = () => {
  //   if (
  //     error.nameError !== null ||
  //     error.emailError !== null ||
  //     error.phoneError !== null ||
  //     error.userRoleError !== null
  //   ) {
  //     setError({
  //       ...Error,
  //       nameError: validate("fullName", state.name),
  //       emailError: validate("email", state.email),
  //       phoneError: validate("phoneNumber", state.phoneNo),
  //       userRoleError: validate("required", state.role_id),
  //     });
  //   }
  //   // if(state.name == '' || state.email == '' || state.phoneNo == '' || state.role_id == ''
  //   // || state.teamid ){
  //   //   swal("Sorry!",
  //   //   "Please Fill all required Enteries",
  //   //   "error");
  //   // }
  //   // else{
  //   //  else{
  //   else {
  //     // if (state.role_id === 3 || state.role_id === 5 || state.role_id === 1 ) {
  //     //   setState({ ...state, teamid: null })
  //     // }
  //     props.AddEmployee(state, onSuccessUser, OnFailureUser);

  //     Array.from(document.querySelectorAll("input")).forEach(
  //       (input) => (input.value = "")
  //     );

  //     setState({
  //       name: "",
  //       email: "",
  //       password: randPwd,
  //       phoneNo: "",
  //       Description: "",
  //       role_id: "",
  //       teamid: null,
  //     });
  //     setError({
  //       nameError: "",
  //       emailError: "",
  //       phoneError: "",
  //       userRoleError: "",
  //     });
  //   }
  // };

  // const onError = () => {
  //   swal('error', props.error)
  // }
  const onSuccessUser = () => {
    props.getlead_middleware();
    // swal("Congratulations!", "Your Employee is inserted successfully", "success");

    swal({
      title: "Congratulations!",
      text: "Your Employee is inserted successfully",
      type: "success",
      icon: "success",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        setState({
          name: "",
          email: "",
          password: randPwd,
          phoneNo: "",
          Description: "",
          role_id: "",
          teamid: "",
        });
        setError({
          nameError: "",
          emailError: "",
          phoneError: "",
          userRoleError: "",
        });
        props.toggle(false);
      } else {
      }
    });
    // props.CheckAgent(OnSuccessAgent, onFailureAgent);
    props.TeamName(OnSuccessTeam, onFailureTeam);
  };
  const OnSuccessAgent = () => {};
  const onFailureAgent = () => {
    // window.alert("Fail");
  };
  const OnFailureUser = (e) => {
    // swal("Error!", "User already Exists", "error");
    swal({
      title: "Error!",
      text: e.message,
      type: "error",
      icon: "error",
      // buttons: true,
      // dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        setState({
          name: "",
          email: "",
          password: randPwd,
          phoneNo: "",
          Description: "",
          role_id: "",
          teamid: "",
        });
        setError({
          nameError: "",
          emailError: "",
          phoneError: "",
          userRoleError: "",
        });
        props.toggle(false);
      } else {
      }
    });
  };

  //two sources(for changing id) one for role and second for team "bilal"
  const [source, setSource] = useState("");
  const [source2, setSource2] = useState("");
  const OnChangeTeam = (val) => {
    let bodyVal = parseInt(val);
    setSource(val);
    setState({ ...state, teamid: bodyVal });
  };
  const OnChangeRole = (val) => {
    let bodyVal = parseInt(val);
    setSource2(val);
    setState({ ...state, role_id: bodyVal });
  };

  //disable if user select sales represntative "bilal"
  const [isDisable, setIsDisable] = useState(true);
  useEffect(() => {
    if (state.role_id === 2) {
      setIsDisable(false);
      // setCheck(!check)
    } else {
      setIsDisable(true);
      if (state.teamid !== "") {
        setState({ ...state, teamid: "" });
      }
    }
  }, [state]);

  useEffect(() => {
    setState({ ...state, teamid: null });
  }, [check]);

  const [check, setCheck] = useState(true);
  const onChange = (val, name) => {
    if (val !== null && val !== undefined) {
      if (name === "roleId") {
        setState({ ...state, role_id: val.value });
      } else if (name === "teamId") {
        setState({ ...state, teamid: val.value });
      }
    }
  };
  //const [SelectRef, setSelectRef] = useState(null)
  return (
    <>
      <NotificationAlert ref={notify} />
      <Modal isOpen={props.modal} toggle={props.toggle}>
        {/* <Form> */}
        <ModalHeader>Add Employee </ModalHeader>
        <ModalBody>
          <InputGroup className="form-control-muted">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-single-02" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Name"
              type="text"
              value={state.name}
              onBlur={() => CheckFields("fullName")}
              onChange={(e) => OnChange(e.target.value, "name")}
              required
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
                <i className="ni ni-email-83" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Email"
              type="email"
              value={state.email}
              onBlur={() => CheckFields("email")}
              onChange={(e) => OnChange(e.target.value, "email")}
              required
            />
          </InputGroup>
          {error.emailError !== "" && error.emailError !== null && (
            <small>
              <span style={{ color: "red" }}>{error.emailError}</span>
            </small>
          )}

          <br />
          <Row>
            <Col lg="6" md="6" sm="6">
              <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable={true}
                options={source2}
                id="exampleFormControlSelect1"
                type="select"
                placeholder="Agent Lead Name"
                ref={selectRefRoleID}
                // value={source2.value}
                // onChange={(e) => OnChangeSource(e.target.value)}
                onBlur={() => CheckFields("required")}
                onChange={
                  (e) => onChange(e, "roleId")

                  // ,(e)=> selectRef.current=e.label
                }
              />
              {error.userRoleError !== "" && error.userRoleError !== null && (
                <small>
                  <span style={{ color: "red" }}>{error.userRoleError}</span>
                </small>
              )}
            </Col>
            {/* <Col lg="6" md="6" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="select"
                value={source2.user_role_name}
                onChange={(e) => OnChangeRole(e.target.value)}
                required
                onBlur={() => CheckFields("required")}
              >
                <option value={null} key={null}>User Roles</option>
                {props.Role !== null &&
                  props.Role !== undefined &&
                  props.Role.map((source2) => {
                    return (
                      <option key={source2.role_id} value={source2.role_id}>
                        {source2.user_role_name}
                      </option>
                    );
                  })}
              </Input>
              {error.userRoleError !== "" && error.userRoleError !== null && (
                <small>
                  <span style={{ color: "red" }}>{error.userRoleError}</span>
                </small>
              )}
            </Col> */}
            <Col lg="6" md="6" sm="6">
              <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable={true}
                options={source}
                isDisabled={isDisable}
                id="exampleFormControlSelect1"
                type="select"
                placeholder="Team Lead"
                ref={selectRefTeamId}
                // value={state.teamid}
                // onChange={(e) => OnChangeSource(e.target.value)}
                onBlur={() => CheckFields("required")}
                onChange={(e) => onChange(e, "teamId")}
              />
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
                disabled={isDisable}
                value={source.TeamName}
                onChange={(e) => OnChangeTeam(e.target.value)}
              // required
              >
                <option value={null} key={null}>Team Lead</option>
                {props.Team !== null &&
                  props.Team !== undefined &&
                  props.Team.map((source) => {
                    return (
                      <option key={source.teamid} value={source.teamid}>
                        {source.TeamName}
                      </option>
                    );
                  })}
              </Input>

            </Col> */}
          </Row>

          <br />

          <PhoneInput
            className="input-group-alternative"
            onBlur={() => CheckFields("phoneNumber")}
            value={state.phoneNo ? state.phoneNo : ""}
            // onChange={(e) => OnChange(e, "phone")}
            onChange={(e, value, country, formattedValue) => {
              // console.log("EEEEEE", value);
              let val = `+${e}`;

              OnChange(val, "phoneNo");
            }}
            inputStyle={{
              width: "100%",
              border: "solid 1px lightgrey",
              // border: "none",
            }}
            inputExtraProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            fullWidth="true"
            //  containerStyle={{border:"none"}}
            countryCodeEditable={false}
            country={"pk"}
            // value={state.phone}
          />

          {/* <InputGroup className="form-control-muted">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fa fa-phone" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Phone No"
              type="text"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={state.phoneNo}
              onBlur={() => CheckFields("phoneNumber")}
              onChange={(e) => OnChange(e.target.value, "phoneNo")}
              // required
              maxLength={11}
            />
          </InputGroup> */}
          {error.phoneError !== "" && error.phoneError !== null && (
            <small>
              <span style={{ color: "red" }}>{error.phoneError}</span>
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
              // onBlur={() => CheckFields("description")}
              onChange={(e) => OnChange(e.target.value, "Description")}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={AddUser}>
            <i className="ni ni-fat-add" /> Save
          </Button>

          <Button color="info" onClick={ResetBTN}>
            <i className="fas fa-undo" /> &nbsp; Reset
          </Button>
          <Button color="danger" onClick={cancel}>
            <i className="ni ni-fat-remove" /> &nbsp; Cancel
          </Button>
        </ModalFooter>
        {/* </Form> */}
      </Modal>
    </>
  );
};

// export default AddNew

const mapStateToProps = (state) => ({
  Role: state.roleHelper.Users,
  Team: state.getTeam.Agents,
  isLoading: state.agent.isLoading,
  isError: state.agent.isError,
  Data: state.agent.Data,
  Error: state.agent.error,
  Response: state.agent.Response,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    AddEmployee: (body, OnSuccess, OnFailure) =>
      dispatch(SaveAgent(body, OnSuccess, OnFailure)),
    UserRole: (OnSuccess, OnFailure) =>
      dispatch(GetUserRole(OnSuccess, OnFailure)),
    TeamName: (OnSuccess, OnFailure) => dispatch(GetTeam(OnSuccess, OnFailure)),
    // CheckAgent: (OnSuccess, OnFailure) =>
    //   dispatch(CheckAgent(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(AddEmployee);
