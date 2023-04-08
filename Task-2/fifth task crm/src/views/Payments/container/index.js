import { connect } from "react-redux";

import Payments from "./Payments";

import { showPaymentDetail,showPaymentEReciept,showPaymentStatus,showPaymentCount } from "../middleware";
import { showProject } from "store/helpers/GetProjects/middleware";
const mapStateToProps = (state) => ({
 
  PaymentResponse : state.payments.PaymentResponse,
  Status:state.payments.Status,
  ReceiptResponse:state.payments.ReceiptResponse,
  Project:state.invent.Project,
  Count:state.payments.Count,



});
const mapDispatchToPrpos = (dispatch) => {
  return {
    showPaymentCount: (status_name, OnSuccess, OnFailure) =>
    dispatch(showPaymentCount(status_name, OnSuccess, OnFailure)),
    showPaymentDetail: (page,limit,DateR1,DateR2,CNIC,SaleOrderNo,Project_name,status_name, OnSuccess, OnFailure) =>
    dispatch(showPaymentDetail(page,limit,DateR1,DateR2,CNIC,SaleOrderNo,Project_name,status_name, OnSuccess, OnFailure)),
    showPaymentStatus: ( OnSuccess, OnFailure) =>
    dispatch(showPaymentStatus( OnSuccess, OnFailure)),
    showProject: ( OnSuccess, OnFailure) =>
    dispatch(showProject( OnSuccess, OnFailure)),
    

  };
};
export default connect(mapStateToProps, mapDispatchToPrpos)(Payments);
