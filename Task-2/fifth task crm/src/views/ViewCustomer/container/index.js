import { connect } from "react-redux";
import  ViewCustomer  from "./ViewDetail";
import { LeadUserMiddleware } from "../middleware";
import { GetAgent } from "store/helpers/GetAllAgent/middleware";
const mapStateToProps = (state) => ({
  isLoading: state.customer.isLoading,
  isError: state.customer.isError,
  Users: state.customer.Users,
  Error: state.customer.error,

  isError: state.agentHelper.isError,
  Agents: state.agentHelper.Agents,
  Error: state.agentHelper.error,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    LeadUserMiddleware: (OnSuccess, OnFailure) =>
      dispatch(LeadUserMiddleware(OnSuccess, OnFailure)),
    AgentUserMiddleware: (OnSuccess, OnFailure) =>
      dispatch(GetAgent(OnSuccess, OnFailure)),
      
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(ViewCustomer);
