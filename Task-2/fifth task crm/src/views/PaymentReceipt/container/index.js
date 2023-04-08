import { connect } from "react-redux";
import { PaymentReceipt } from "./PaymentReceipt";
//import FormOfPaymentReceipt from "./FormOfPaymentReceipt";
import {
  showAmountMiddleware,
  showPaymentThroughMiddleware,
  showPaymentTypeMiddleware,
  Insert_Payment_Recipt_Middleware,
  Update_Payment_Stages_Middleware,
  wallet_Middleware,
  wallet_request_Middleware,
  file_Middleware,
  bankMiddleware,
} from "../middleware";

const mapStateToProps = (state) => ({
  PaymentAmount: state.paymentreceipt.PaymentAmount,
  PaymentThrough: state.paymentreceipt.PaymentThrough,
  PaymentType: state.paymentreceipt.PaymentType,

  Insert_Payment_Recipt: state.paymentreceipt.Insert_Payment_Recipt,
  Update_Payment_stages: state.paymentreceipt.Update_Payment_Stages,
  walletData: state.paymentreceipt.walletData,
  fileData: state.paymentreceipt.fileData,
  banks: state.paymentreceipt.banks,
});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showAmountMiddleware: (OnSuccess, OnFailure) =>
      dispatch(showAmountMiddleware(OnSuccess, OnFailure)),
    showPaymentThroughMiddleware: (OnSuccess, OnFailure) =>
      dispatch(showPaymentThroughMiddleware(OnSuccess, OnFailure)),
    showPaymentTypeMiddleware: (OnSuccess, OnFailure) =>
      dispatch(showPaymentTypeMiddleware(OnSuccess, OnFailure)),

    Insert_Payment_Recipt_Middleware: (body, OnSuccess, OnFailure) =>
      dispatch(Insert_Payment_Recipt_Middleware(body, OnSuccess, OnFailure)),
    wallet_Middleware: (body, onSuccess, onFailure) =>
      dispatch(wallet_Middleware(body, onSuccess, onFailure)),
    wallet_request_Middleware: (body, onSuccess, onFailure) =>
      dispatch(wallet_request_Middleware(body, onSuccess, onFailure)),
    file_Middleware: (body, onSuccess, onFailure) =>
      dispatch(file_Middleware(body, onSuccess, onFailure)),

    Update_Payment_Stages_Middleware: (OnSuccess, OnFailure) =>
      dispatch(Update_Payment_Stages_Middleware(OnSuccess, OnFailure)),
    bankMiddleware: (onSuccess, onFailure) =>
      dispatch(bankMiddleware(onSuccess, onFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(PaymentReceipt);
