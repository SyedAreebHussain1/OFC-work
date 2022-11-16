import  AgentForm from "./AgentData";
          //done
 import { connect } from "react-redux";        //done
import { CheckAgent,SaveAgent, SaveTeam ,showUpdateEmployee, DeleteAgent } from "../middleware"; 
import { GetTeam } from "store/helpers/GetTeam/middleware";
import { GetUserRole } from "store/helpers/GetUserRole/middleware";  //done
const mapStateToProps = (state) => ({
  isLoading: state.agent.isLoading,
  isError: state.agent.isError,
  Data: state.agent.Data,
  Error: state.agent.error,

  isLoading: state.getTeam.isLoading,
  isError: state.getTeam.isError,
  Agent: state.getTeam.Agents,
  Error: state.getTeam.error,

  Role: state.roleHelper.Users,
  Team: state.getTeam.Agents,
  Update:state.agent.Update,
  Delete:state.agent.Delete,

  Response:state.agent.Response,
  AssignResponse: state.agent.AssignResponse,


});
const mapDispatchToPrpos = (dispatch) => {
  return {
    SaveTeam: (body, OnSuccess, OnFailure) =>
    dispatch(SaveTeam(body, OnSuccess, OnFailure)),
    CheckAgent: (page,limit,user_role_name,TeamName, OnSuccess, OnFailure) =>
      dispatch(CheckAgent(page,limit,user_role_name,TeamName,OnSuccess, OnFailure)),
      SaveAgent: (body, OnSuccess, OnFailure) =>
      dispatch(SaveAgent(body, OnSuccess, OnFailure)),
      SaveTeam: (body, OnSuccess, OnFailure) =>
      dispatch(SaveTeam(body, OnSuccess, OnFailure)),
      GetTeam: ( OnSuccess, OnFailure) =>
      dispatch(GetTeam(OnSuccess, OnFailure)),
      UserRole: (OnSuccess, OnFailure) =>
      dispatch(GetUserRole(OnSuccess, OnFailure)),
      showUpdateEmployee: (body,OnSuccess, OnFailure) =>
      dispatch(showUpdateEmployee(body,OnSuccess, OnFailure)),
      DeleteAgent: (body,OnSuccess, OnFailure) =>
      dispatch(DeleteAgent(body,OnSuccess, OnFailure)),
    
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(AgentForm);

