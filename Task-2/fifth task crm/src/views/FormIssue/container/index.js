import { connect } from "react-redux";
import FormIssue from "./FormIssue";
import { InsertRealStateAgent, getNotesStats } from "../middleware";

const mapStateToProps = (state) => ({
  Agent: state.formIssue.Agent,
  status: state.formIssue.status,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    InsertRealStateAgent: (body, OnSuccess, OnFailure) =>
      dispatch(InsertRealStateAgent(body, OnSuccess, OnFailure)),
    getNotesStats: (body, OnSuccess, OnFailure) =>
      dispatch(getNotesStats(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(FormIssue);
