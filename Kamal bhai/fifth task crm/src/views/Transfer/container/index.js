import { connect } from "react-redux";

import Transfer from "./Transfer";
import {
  ShowUserInfo,
  ShowPlotTransfer,
  getPaymentDetailsMiddleware,
} from "../middleware";

const mapStateToProps = (state) => ({
  isLoading: state.transfer.isLoading,
  isError: state.transfer.isError,
  Users: state.transfer.Users,
  TransferReq: state.transfer.TransferReq,
  PaymentDetails: state.transfer.PaymentDetails,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    ShowUserInfo: (body, OnSuccess, OnFailure) =>
      dispatch(ShowUserInfo(body, OnSuccess, OnFailure)),
    ShowPlotTransfer: (body, OnSuccess, OnFailure) =>
      dispatch(ShowPlotTransfer(body, OnSuccess, OnFailure)),
    _getPaymentDetailsMiddleware: (id, OnSuccess, OnFailure) =>
      dispatch(getPaymentDetailsMiddleware(id, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Transfer);
