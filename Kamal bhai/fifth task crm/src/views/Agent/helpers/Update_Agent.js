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
  Form
} from "reactstrap";
import swal from "sweetalert"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validate from "../../../components/Utilities Component/ValidationWrapper";
import axios from 'axios';
import { connect } from "react-redux";
// import { NewUser } from "../middleware";
import { SaveAgent, CheckAgent } from "../middleware/index"
import { GetUserRole } from "store/helpers/GetUserRole/middleware";
import { GetTeam } from "store/helpers/GetTeam/middleware";
import NotificationAlert from "react-notification-alert";

import Select from 'react-select';

const Update_Agent = (props) => {
    const notify = useRef(null);
    const ResetBTN = () => {
      // Array.from(document.querySelectorAll("input")).forEach(
      //   input => (input.value = "")
      // );
      // Array.from(document.querySelectorAll("option")).forEach(
      //   option => (option.value = null)
      // );
      if(props.detail!==null && props.detail!== undefined)
      {
     
          setState({...state,
    
       name: props.detail.name,
       email: props.detail.email,
       phoneNo: props.detail.phoneNo,
      role_id: props.detail.role_id,
       teamid: props.detail.teamid,
       Dashboarduserid:props.detail.Dashboarduserid,
   })
      }
      // setState({
      //   name: "",
      //   email: "",
      //   // password: randPwd,
      //   phoneNo: "",
      //   role_id: '',
      //   teamid: null
      // });
      setError({
        nameError: "",
        emailError: "",
        phoneError: "",
        userRoleError: "",
        teamNameError:"",
      })
    };




    const cancel = () => {
    //   Array.from(document.querySelectorAll("input")).forEach(
    //     input => (input.value = "")
    //   );
      setState({
        name: "",
        email: "",
        // password: randPwd,
        phoneNo: "",
     
        role_id: '',
        teamid: "",
      });
      setError({
        nameError: "",
        emailError: "",
        phoneError: "",
        userRoleError: "",
        teamNameError:""
      })
      props.toggle(false);
    }
  
    //for user role "bilal"
    // useEffect(() => {
    //  
    // }, [true]);
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
    const onSuccessRole = () => { };
    const onFailureRole = () => { };
  
    //for team name "bilal"
    useEffect(() => {
        props.UserRole(onSuccessRole, onFailureRole);
       props.GetTeam(OnSuccessTeam, onFailureTeam);
    
      
    }, [true]);


useEffect(() => {
    if(props.detail!==null && props.detail!== undefined)
       {
      
           setState({...state,
     
        name: props.detail.name,
        email: props.detail.email,
        phoneNo: props.detail.phoneNo,
       role_id: props.detail.role_id,
        teamid: props.detail.teamid,
        Dashboarduserid:props.detail.Dashboarduserid,
    })
       }
      
}, [props.detail])

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
    const OnSuccessTeam = () => { };
    const onFailureTeam = () => { };
  
  
    //validation state "bilal"
    const [error, setError] = useState({
      nameError: null,
      emailError: null,
      phoneError: null,
      userRoleError: null,
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
      }
      else if (name === "phoneNumber") {
        setError({
          ...error,
          phoneError: validate("phoneNumber", state.phoneNo),
        });
      }
      else if (name === "required") {
        setError({
          ...error,
          userRoleError: validate("required", state.role_id),
        });
      }
    };
    //for generate random password "bilal"
    // var chars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", "0123456789", ")(*&^%$#@!"];
    // var randPwd = [5, 3, 2].map(function (len, i) { return Array(len).fill(chars[i]).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('') }).concat().join('').split('').sort(function () { return 0.5 - Math.random() }).join('');
  
    //for add new employee state "bilal"
    const [state, setState] = useState({
      name: "",
      email: "",
    //   password: randPwd,
      phoneNo: "",
 
      role_id: '',
      teamid: ""
    });
  
  
   
  
    //function add employee "bilal"
    const EditUser = () => {
      if(state?.phoneNo?.trim().length <= 6 || state?.phoneNo?.trim().length > 29 ){
        setError({
          ...error,
          phoneError: validate("phoneNumber", state.phoneNo),
        });
      }
      if(state.role_id==2)
      {
        setError({
          ...error,
          nameError: validate("fullName", state.name),
          emailError: validate("email", state.email),
          phoneError: validate("phoneNumber", state.phoneNo),
          userRoleError: validate("required", state.role_id),
          teamNameError:validate("required",state.teamid)

        });
     if(state.name!=="" && state.email!=="" && (error?.phoneError?.trim().length <= 0 || error?.phoneError == null) && state.role_id!=="" && state.teamid!=="" && state.teamid!==null && error.emailError==null)
     {
      props.showUpdateEmployee(state, onSuccessUser, OnFailureUser);
     }
      }
      else{
        setError({
          ...error,
          nameError: validate("fullName", state.name),
          emailError: validate("email", state.email),
          phoneError: validate("phoneNumber", state.phoneNo),
          userRoleError: validate("required", state.role_id),
        })
        if(state.name!=="" && state.email!=="" && (error?.phoneError?.trim().length <= 0 || error?.phoneError == null) && state.role_id!=="" && error.emailError==null)
        {
         props.showUpdateEmployee(state, onSuccessUser, OnFailureUser);
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
  
    // const onError = () => {
    //   swal('error', props.error)
    // }
    const onSuccessUser = () => {
      // swal("Congratulations!", "Your Employee is inserted successfully", "success");
  
      swal({
        title: "Congratulations!",
        text: "Your Employee is updated successfully",
        type: "success",
        icon:"success"
        // buttons: true,
        // dangerMode: true,
      }).then(function (isConfirm) {
        if (isConfirm) {
       
          props.toggle(false)
        } else {
  
  
        }
      });
      props.CheckAgent(OnSuccessAgent, onFailureAgent);
      props.TeamName(OnSuccessTeam, onFailureTeam);
      
    };
    const OnSuccessAgent = () => { };
    const onFailureAgent = () => {
      // window.alert("Fail");
    };
    const OnFailureUser = () => {
      // swal("Error!", "User already Exists", "error");
      swal({
        title: "Error!",
        text: "Employee not Updated",
        type: "error",
        icon:"error"
        // buttons: true,
        // dangerMode: true,
      }).then(function (isConfirm) {
        if (isConfirm) {
       
          props.toggle(false)
        } else {
  
  
        }
      });
    };
  
    //two sources(for changing id) one for role and second for team "bilal"
    const [source, setSource] = useState("");
    const [source2, setSource2] = useState("");
    const OnChangeTeam = (val) => {
    //  let bodyVal = parseInt(val);
      setSource(val);
      setState({ ...state, teamid: val });
      //setState({ ...state, teamid: bodyVal });
    };
    const OnChangeRole = (val) => {
      let bodyVal = parseInt(val);
      setSource2(val);
      setState({ ...state, role_id: bodyVal });
    };
  
    //disable if user select sales represntative "bilal"
    const [isDisable, setIsDisable] = useState(true)
    useEffect(() => {
      if (state.role_id === 2) {
        setIsDisable(false);
        // setCheck(!check)
      } else {
        setIsDisable(true);
       if (state.teamid !== "") {
          setState({ ...state, teamid: "" })
        }
      }
    }, [state])
  
    // useEffect(() => {
    //   setState({ ...state, teamid: null })
    // }, [check])
  
    // const [check, setCheck] = useState(true);
    const onChange = (val, name) => {
      if (name === "roleId") {
        setState({ ...state, role_id: val })
      } else if (name === "teamId") {
        setState({ ...state, teamid: val })
      }
    };
    return (
        <>
        <Modal isOpen={props.modal} toggle={props.toggle}>
        {/* <Form> */}
        <ModalHeader>Edit Employee </ModalHeader>
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
           

              {/* <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable={true}
                options={source2}
                id="exampleFormControlSelect1"
                type="select"
                placeholder="Agent Lead Name"
                value={source2.role_id}
                // onChange={(e) => OnChangeSource(e.target.value)}
                onBlur={() => CheckFields("required")}
                onChange={(e) =>
                  onChange(e.value, "roleId")
                } 
              />
             
            </Col>  */}
            <Col lg="6" md="6" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="select"
                value={state.role_id}
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
            </Col>
            {/* <Col lg="6" md="6" sm="6">

              <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable={true}
                options={source}
                isDisabled={isDisable}
                id="exampleFormControlSelect1"
                type="select"
                placeholder="Team Lead"
                value={source.TeamName}
                // onChange={(e) => OnChangeSource(e.target.value)}
                onBlur={() => CheckFields("required")}
                onChange={(e) =>
                  onChange(e.value, "teamId")
                }
              />
              {error.teamNameError !== "" && error.teamNameError !== null && (
                <small>
                  <span style={{ color: "red" }}>{error.teamNameError}</span>
                </small>
              )}
            </Col> */}
            <Col lg="6" md="6" sm="6" xs="12">
              <Input
                id="exampleFormControlSelect1"
                type="select"
                disabled={isDisable}
                value={state.teamid}
                onChange={(e) => OnChangeTeam(e.target.value)}
              // required
              >
                <option value={""} key={""}>Team Lead</option>
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
              {error.teamNameError !== "" && error.teamNameError !== null && (
                <small>
                  <span style={{ color: "red" }}>{error.teamNameError}</span>
                </small>
              )}

            </Col>
          </Row>

          <br />
          <PhoneInput
                    className="input-group-alternative"
                    onBlur={() => CheckFields("phoneNumber")}
                    value={state.phoneNo ? state.phoneNo : ""}
                    // onChange={(e) => OnChange(e, "phone")}
                    onChange={(e, value, country, formattedValue) => {
                      let val = `+${e}`;
                     
                      OnChange(val, "phoneNo")
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

      
          
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={EditUser}>
            <i className="ni ni-fat-add" /> &nbsp; Save
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
export default Update_Agent
