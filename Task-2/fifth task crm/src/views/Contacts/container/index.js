import { connect } from "react-redux";
import { Campaign } from "./contacts";
import { GetUser, AssignLead,DownloadAPI } from "../middleware";
import { NewUser } from "../middleware";
import { GetAgent } from "store/helpers/GetAllAgent/middleware";
import { GetSources } from "store/helpers/GetSources/middleware";
import { CheckOrderStatus } from "store/helpers/GetOrder/middleware";
const mapStateToProps = (state) => ({
  isLoading: state.fetchContacts.isLoading,
  isError: state.fetchContacts.isError,
  Users: state.fetchContacts.Users,
  Error: state.fetchContacts.error,
  AssignResponse: state.fetchContacts.AssignResponse,
  isError: state.agentHelper.isError,
  Agents: state.agentHelper.Agents,
  Error: state.agentHelper.error,
  Sources: state.sourceHelper.Sources,
  OrderReport: state.orderHelper.OrderReport,
  File:state.fetchContacts.File,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    DownloadAPI:(onsuccess,onFailure)=>
    dispatch(DownloadAPI(onsuccess,onFailure)),
    NewUser: (body, OnSuccess, OnFailure) =>
      dispatch(NewUser(body, OnSuccess, OnFailure)),
    GetUser: (page, limit,sourceid,orderstatus,OnSuccess, OnFailure) =>
     dispatch(GetUser(page, limit, sourceid,orderstatus,OnSuccess, OnFailure)),
    GetAgent: (OnSuccess, OnFailure) =>
      dispatch(GetAgent(OnSuccess, OnFailure)),
    Assign: (assigner, handledby, leads, OnSuccess, OnFailure) =>
      dispatch(AssignLead(assigner, handledby, leads, OnSuccess, OnFailure)),
    GetSources: (OnSuccess, OnFailure) =>
      dispatch(GetSources(OnSuccess, OnFailure)),
    GetOrder: (OnSuccess, OnFailure) =>
      dispatch(CheckOrderStatus(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Campaign);
