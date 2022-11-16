import { connect } from "react-redux";
import { TransferReceipt } from "./TransferReceipt";
import {showAmountMiddleware,showPaymentThroughMiddleware,showPaymentTypeMiddleware,
  Insert_Payment_Recipt_Middleware,GetTransferInfoMiddleware

  // Update_Payment_Stages_Middleware
} from "../middleware"

const mapStateToProps = (state) => ({
    PaymentAmount: state.paymentreceipt.PaymentAmount,
    PaymentThrough:state.paymentreceipt.PaymentThrough,
    PaymentType:state.paymentreceipt.PaymentType,
    TransferInfo:state.transferReceipt.TransferInfo,

    Insert_Payment_Recipt:state.paymentreceipt.Insert_Payment_Recipt,
    // Update_Payment_stages:state.paymentreceipt.Update_Payment_Stages,
    
  });
  const mapDispatchToPrpos = (dispatch) => {
    return {
      showAmountMiddleware: (OnSuccess, OnFailure) =>
        dispatch(showAmountMiddleware(OnSuccess, OnFailure)),
        showPaymentThroughMiddleware: (OnSuccess, OnFailure) =>
        dispatch(showPaymentThroughMiddleware(OnSuccess, OnFailure)),
        showPaymentTypeMiddleware: (OnSuccess, OnFailure) =>
        dispatch(showPaymentTypeMiddleware(OnSuccess, OnFailure)),

        Insert_Payment_Recipt_Middleware: (body,OnSuccess, OnFailure) =>
        dispatch(Insert_Payment_Recipt_Middleware(body,OnSuccess, OnFailure)),

        GetTransferInfoMiddleware: (body,OnSuccess, OnFailure) =>
        dispatch(GetTransferInfoMiddleware(body,OnSuccess, OnFailure)),
        


    };
  };
export default connect(mapStateToProps, mapDispatchToPrpos)(TransferReceipt);
