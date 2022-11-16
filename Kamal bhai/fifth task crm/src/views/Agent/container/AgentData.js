import React from "react";
import Headers from "components/Headers/Header1";
// import Mod from "views/Contacts/helpers/Mod";
import { useState, useEffect, useRef } from "react";
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
import { connect } from "react-redux";
import {JwtDashboard} from "../../../store/helpers/JwtTimer/middleware";
// import AddNew from "../helpers/add_new";

import Loader from "react-loader-spinner";
import DeleteAgent from "../helpers/delete_agent";
import { Form } from "./Form";
const AgentForm = (props) => {


  // useEffect(() => {

  //   props.CheckAgent(body, OnSuccess, onFailure);
  // }, [props.Response,props.Update]);
  const OnSuccess = () => { };
  const onFailure = () => {
    // window.alert("Fail");
  };


  const [data, setData] = useState(null);
  const [showdata, setShowData] = useState(null);

  let arrayForCheck = [];

  useEffect(() => {
    props.GetTeam(OnSuccess, onFailure);
    props.UserRole(OnSuccess, onFailure);
    props.JwtDashboard( OnSuccessJwt, OnFailureJwt)
  }, [true]);


  // const [agentData, setAgentData] = useState(null);
  // useEffect(() => {
  //   if (props.Data !== null && props.Data !== undefined) {
  //     let reverseArray= props.Data?.reverse()
  //     setAgentData(reverseArray);
  //   }
  // }, [props.Data]);

  const [roleData, setRoleData] = useState(null);
  useEffect(() => {
    if (props.Role !== null && props.Role !== undefined) {
   
      setRoleData(props.Role);
    }
  }, [props.Role]);

  const [teamData, setTeamData] = useState(null);
  useEffect(() => {
    if (props.Agent !== null && props.Agent !== undefined) {
      
      setTeamData(props.Agent);
    }
  }, [props.Agent]);

  // const [selected, setSelected] = useState([]);
  // const [state, setState] = useState({
  //   id: "",
  //   agentName: "",
  //   phone: "",
  //   date: "",
  //   ClientPhone: "",
  //   ClientEmail: "",
  //   ClientName: "",
  // });

  const AddInArray = (check, value) => {

    if (check === true) {
      arrayForCheck.push(value.teamid);
    } else {
      arrayForCheck.pop(value.teamid);
    }

  };


  // const [body, setBody] = useState({
  //   role_id: null,
  //   teamid: null,
  // });


  
  const OnSuccessJwt = ()=>{}
  const OnFailureJwt = ()=>{}

  useEffect(()=>{
    if(props.GetUserJWTLogin === false){
      localStorage.removeItem("auth")
      window.location.href="/auth/login"
    }
  })


  return (
    <>
      <Headers />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Create Employee</h3>
              </CardHeader>
              <Form
              // middleware={props}
              role={roleData}  Data={props.Data} team={teamData}  UserRole={props.UserRole} GetTeam={props.GetTeam} Role={props.Role} Team={props.Team} 
              showUpdateEmployee={props.showUpdateEmployee} Update={props.Update} DeleteAgent={props.DeleteAgent} Delete={props.Delete} Response={props.Response}
              CheckAgent={props.CheckAgent} AssignResponse={props.AssignResponse}
              />

            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

// export default AgentForm;

const mapStateToProps = (state) => ({
  GetUserJWTLogin: state.JwtCredential.GetUserJWTLogin
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    JwtDashboard: (OnSuccess, OnFailure) =>
      dispatch(JwtDashboard( OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(AgentForm);
