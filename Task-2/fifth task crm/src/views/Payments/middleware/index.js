import axios from "axios";
import {PaymentDetails,PaymentEReceiptDetail,PaymentStatusDetail,PaymentCounts } from "../action/index";
import { PAYMENTDETAIL_PATH,PAYMENTERECIEPT_PATH,PAYMENTSTATUS_PATH,PAYMENTERECIEPTCOUNT_PATH} from "../constant";
import { BASEURL,URL } from "config/api/URL";
export const showPaymentCount = (status_name,OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PaymentCounts.PaymentCount());
  
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${PAYMENTERECIEPTCOUNT_PATH}?status_name=${status_name}`,  {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PaymentCounts.PaymentCount_Success(res.data));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PaymentCounts.PaymentCount_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PaymentCounts.PaymentCount_Failure(error)));
};

export const showPaymentDetail = (page,limit,DateR1,DateR2,CNIC,SaleOrderNo,Project_name,status_name,OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PaymentDetails.PaymentDetail());
  
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${PAYMENTDETAIL_PATH}?page=${page}&limit=${limit}${DateR1!==null && DateR1!==""?`&DateR1=${DateR1}`:""}${DateR2!==null && DateR2!==""?`&DateR2=${DateR2}`:""}${CNIC!==null && CNIC!==""?`&CNIC=${CNIC}`:""}${SaleOrderNo!==null && SaleOrderNo!==""?`&SaleOrderNo=${SaleOrderNo}`:""}${Project_name!==null && Project_name!==""?`&Project_name=${Project_name}`:""}${status_name!==null && status_name!==""?`&status_name=${status_name}`:""}`,  {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PaymentDetails.PaymentDetail_Success(res.data));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PaymentDetails.PaymentDetail_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PaymentDetails.PaymentDetail_Failure(error)));
};

export const showPaymentStatus = ( OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PaymentStatusDetail.PaymentStatus());
  
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${PAYMENTSTATUS_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PaymentStatusDetail.PaymentStatus_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PaymentStatusDetail.PaymentStatus_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PaymentStatusDetail.PaymentStatus_Failure(error)));
};

export const showPaymentEReciept = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PaymentEReceiptDetail.PaymentEReceipt());
  
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${PAYMENTERECIEPT_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PaymentEReceiptDetail.PaymentEReceipt_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PaymentEReceiptDetail.PaymentEReceipt_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PaymentEReceiptDetail.PaymentEReceipt_Failure(error)));
};