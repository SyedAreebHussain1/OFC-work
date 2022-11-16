import { connect } from "react-redux";
import reset from "./ResetPassword";
import { ResetPassword } from "../middleware";
const mapStateToProps = (state) => ({
  isLoading: state.reset.isLoading,
  isError: state.reset.isError,
  Data: state.reset.Data,
  Error: state.reset.error,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    CheckUserLogin: (body, OnSuccess, OnFailure) =>
      dispatch(ResetPassword(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(reset);
