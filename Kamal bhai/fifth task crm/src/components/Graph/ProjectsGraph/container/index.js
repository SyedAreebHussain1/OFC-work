import { connect } from "react-redux";

import Projects from "./Projects";
import { showProjectsGraph } from "../middleware";

const mapStateToProps = (state) => ({
    isLoading: state.projectGraph.isLoading,
    isError: state.projectGraph.isError,
    Error: state.projectGraph.error,
   Project:state.projectGraph.Project,
   
  
  
  
  });
  const mapDispatchToPrpos = (dispatch) => {
    return {
      showProjectsGraph: ( OnSuccess, OnFailure) =>
      dispatch(showProjectsGraph(OnSuccess, OnFailure)),
     
    };
  };
  export default connect(mapStateToProps, mapDispatchToPrpos)(Projects);
  