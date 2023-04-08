import { connect } from "react-redux";
import Forget from "./Forget";
import { CheckForget } from "../middleware";
const mapStateToProps = (state) => ({
  isLoading: state.forget.isLoading,
  isError: state.forget.isError,
  Data: state.forget.Data,
  Error: state.forget.error,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    CheckUserForget: (body, OnSuccess, OnFailure) =>
      dispatch(CheckForget(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Forget);