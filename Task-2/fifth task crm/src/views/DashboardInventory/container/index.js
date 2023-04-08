import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { showProject } from "../middleware";

const mapStateToProps = (state) => ({
    isLoading: state.dashboardInventory.isLoading,
    isError: state.dashboardInventory.isError,
    Error: state.dashboardInventory.error,
   ProjectsName:state.dashboardInventory.ProjectsName,
  });
  const mapDispatchToPrpos = (dispatch) => {
    return {
      showProject: ( OnSuccess, OnFailure) =>
      dispatch(showProject(OnSuccess, OnFailure)),
    };
  };
  export default connect(mapStateToProps, mapDispatchToPrpos)(Dashboard);
  