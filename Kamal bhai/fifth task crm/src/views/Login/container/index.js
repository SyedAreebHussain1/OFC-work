import { connect } from "react-redux";
import Login from "./Login";
import { CheckLogin, navMenuMiddleware } from "../middleware";
const mapStateToProps = (state) => ({
  isLoading: state.login.isLoading,
  isError: state.login.isError,
  Data: state.login.Data,
  Error: state.login.error,
  navMenuList: state.login.navMenuList,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    CheckUserLogin: (body, OnSuccess, OnFailure) =>
      dispatch(CheckLogin(body, OnSuccess, OnFailure)),
    navMenuMiddleware: (token, OnSuccess, OnFailure) =>
      dispatch(navMenuMiddleware(token, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Login);
