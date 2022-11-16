import { connect } from "react-redux";
import AllProjects from "./AllProjects";
import { showAllProjectsGraph, showReport } from "../middleware";

const mapStateToProps = (state) => ({
  isLoading: state.allProjectsGraph.isLoading,
  isError: state.allProjectsGraph.isError,
  Error: state.allProjectsGraph.error,
  AllProjects: state.allProjectsGraph.AllProjects,
  Report: state.allProjectsGraph.Report,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showAllProjectsGraph: (body, OnSuccess, OnFailure) =>
      dispatch(showAllProjectsGraph(body, OnSuccess, OnFailure)),
    showReport: (body, OnSuccess, OnFailure) =>
      dispatch(showReport(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(AllProjects);