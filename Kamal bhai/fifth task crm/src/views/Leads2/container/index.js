import { Leads } from "./leads2";
import { connect } from "react-redux";
import { Checklead, CheckUserInsert, CheckOrderStatus } from "../middleware";
import { GetSources } from "store/helpers/GetSources/middleware";
import { GetAgent} from "store/helpers/GetAllAgent/middleware";
const mapStateToProps = (state) => ({
  isLoading: state.lead.isLoading,
  isError: state.lead.isError,
  Data: state.lead.Data,
  Error: state.lead.error,

  OrderReport: state.lead.OrderReport,

  // from store/helpers global
  Sources: state.sourceHelper.Sources,
  Agents: state.agentHelper.Agents,


});
const mapDispatchToPrpos = (dispatch) => {
  return {
    Checklead: (body, OnSuccess, OnFailure) =>
      dispatch(Checklead(body, OnSuccess, OnFailure)),

      CheckUserInsert: (body, OnSuccess, OnFailure) =>
      dispatch(CheckUserInsert(body, OnSuccess, OnFailure)),
      
      CheckOrderStatus: (body, OnSuccess, OnFailure) =>
      dispatch(CheckOrderStatus(body, OnSuccess, OnFailure)),


      GetSources: (OnSuccess, OnFailure) =>
      dispatch(GetSources(OnSuccess, OnFailure)),
      GetAgent: (OnSuccess, OnFailure) =>
      dispatch(GetAgent(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Leads);
