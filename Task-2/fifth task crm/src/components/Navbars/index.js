import { Dashboard } from "../../views/Dashboard";
import { connect } from "react-redux";
import { CheckDATA } from "../../views/Login/middleware";
import { GetSources } from "../../store/helpers/GetSources/middleware";

const mapStateToProps = (state) => ({
  isLoading: state.data.isLoading,
  isError: state.data.isError,
  Data: state.data.Data,
  Error: state.data.error,

  Sources: state.sourceHelper.Sources,

});
const mapDispatchToPrpos = (dispatch) => {
  return {
    CheckDATA: (body, OnSuccess, OnFailure) =>
      dispatch(CheckDATA(body, OnSuccess, OnFailure)),
      GetSources: (OnSuccess, OnFailure) =>
      dispatch(GetSources(OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Dashboard);