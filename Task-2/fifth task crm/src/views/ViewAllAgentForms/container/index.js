import { connect } from "react-redux";
import ViewAllAgentForms from "./ViewAllAgentForms";

import {
  GetRealStateAgent,
  upgradeFormStatus,
  ShowBookingStatusFormStatus,
  uploadCurrrencyNotes,
} from "../middleware";

const mapStateToProps = (state) => ({
  AgentDetail: state.viewAllAgentForms.AgentDetail,
  Response: state.viewAllAgentForms.Response,
  Status: state.viewAllAgentForms.Status,
});

const mapDispatchToPrpos = (dispatch) => {
  return {
    GetRealStateAgent: (body, OnSuccess, OnFailure) =>
      dispatch(GetRealStateAgent(body, OnSuccess, OnFailure)),
    upgradeFormStatus: (body, OnSuccess, OnFailure) =>
      dispatch(upgradeFormStatus(body, OnSuccess, OnFailure)),
    uploadCurrrencyNotes: (body, OnSuccess, OnFailure) =>
      dispatch(uploadCurrrencyNotes(body, OnSuccess, OnFailure)),
    ShowBookingStatusFormStatus: (OnSuccess, OnFailure) =>
      dispatch(ShowBookingStatusFormStatus(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(ViewAllAgentForms);
