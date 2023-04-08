import { connect } from "react-redux";
import ApprovalReceipt from "./ApprovalReceipt";
import {
  GetAllRequests_Middleware,
  UpdateRequest_Middleware,
} from "../middleware";

const mapStateToProps = (state) => ({
  Response: state.WalletRequestsFinance?.Response,
  Responseupdate: state.WalletRequestsFinance?.Responseupdate,
  Update: state.WalletRequestsFinance?.Update,
  UpdatePayment: state.WalletRequestsFinance?.UpdatePayment,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    GetAllRequests_Middleware: (
      OnSuccess,
      OnFailure,
      amount,
      date,
      noOfRows,
      pageNumber
    ) =>
      dispatch(
        GetAllRequests_Middleware(
          OnSuccess,
          OnFailure,
          amount,
          date,
          noOfRows,
          pageNumber
        )
      ),
    UpdateRequest_Middleware: (body, OnSuccess, OnFailure) =>
      dispatch(UpdateRequest_Middleware(body, OnSuccess, OnFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(ApprovalReceipt);
