import { connect } from "react-redux";
import ApprovalReceipt from "./ApprovalReceipt";
import { GetAllRequests_Middleware } from "../middleware";

const mapStateToProps = (state) => ({
  Response: state.WalletRequestsFinance?.Response,
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
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(ApprovalReceipt);
