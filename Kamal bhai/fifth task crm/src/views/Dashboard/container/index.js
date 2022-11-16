import  Dashboard  from "./Dashboard";
import { connect } from "react-redux";
import { showAgent} from "../middleware";
const mapStateToProps = (state) => ({
  isLoading: state.data.isLoading,
  isError: state.data.isError,
  Error: state.data.error,
  Response : state.data.Response,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showAgent: ( OnSuccess, OnFailure) =>
      dispatch(showAgent(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Dashboard);

