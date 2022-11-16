import { connect } from "react-redux";

import PlotChangeApproval from "./PlotChangeApproval";
import { ShowAllChangeRequest, ShowUpdateApprovalStatus,ShowAllStatus } from "../middleware";


const mapStateToProps = (state) => ({

    ChangeRequest:state.plotChangeApproval.ChangeRequest,
    Update:state.plotChangeApproval.Update,
    AllStatus:state.plotChangeApproval.AllStatus,

});
const mapDispatchToPrpos = (dispatch) => {
  return {
    ShowAllChangeRequest: (page,limit,OnSuccess, OnFailure) =>
    dispatch(ShowAllChangeRequest(page,limit,OnSuccess, OnFailure)),
    ShowUpdateApprovalStatus: (body,OnSuccess, OnFailure) =>
    dispatch(ShowUpdateApprovalStatus(body,OnSuccess, OnFailure)),
    ShowAllStatus: (OnSuccess, OnFailure) =>
    dispatch(ShowAllStatus(OnSuccess, OnFailure)),
    
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(PlotChangeApproval);
