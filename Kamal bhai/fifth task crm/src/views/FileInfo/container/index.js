import { connect } from "react-redux";

import FileInfo from "./FileInfo";
import { showAgent, showLead, deleteLead, showClientDetail, CallRecording } from "views/ViewCustomerDetail/middleware";
import { showDetailsOfClient } from "../middleware";

const mapStateToProps = (state) => ({
  
  Response : state.viewCustomerDetail.Response,
  Detail:state.fileInfo.Detail,

});
const mapDispatchToPrpos = (dispatch) => {
  return {
   
      showAgent: ( OnSuccess, OnFailure) =>
      dispatch(showAgent(OnSuccess, OnFailure)),
      showDetailsOfClient: (page,limit, Taskid,Agentname,OnSuccess, OnFailure) =>
      dispatch(showDetailsOfClient(page,limit,Taskid,Agentname,OnSuccess, OnFailure)),
  
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(FileInfo);
