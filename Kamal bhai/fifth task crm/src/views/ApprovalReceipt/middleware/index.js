import axios from "axios";
import {ApprovalReceiptDetails,UpdateApprovalStatusDetails,UpdatePaymentStatusDetails , UpdatePaymentStageStatus } from "../action/index";
import { APPROVALRECEIPT_PATH, UPDATEAPPROVALSTATUS_PATH,UPDATEPAYMENT_PATH , UPDATEPAYMENTSTAGESTATUS_PATH} from "../constant";
import { BASEURL,URL } from "config/api/URL";
import swal from "sweetalert";


export const ShowApprovalReceipt = (page,limit, OnSuccess, OnFailure) => (dispatch) => {

  dispatch(ApprovalReceiptDetails.ApprovalReceipt());
  
  let token = localStorage.getItem("auth");
  axios
    .get(`${URL}${APPROVALRECEIPT_PATH}?page=${page}&limit=${limit}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
        //'Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGVfaWQiOjcsIkRhc2hib2FyZHVzZXJpZCI6MywiZW1haWwiOiJtLWZhcmF6LmlxYmFsQGhvdG1haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsIm5hbWUiOiJmYXJheiIsInBob25lTm8iOiIwMzAwMjE0MTI1OCIsInN0YXR1c19pZCI6NCwiRGVzY3JpcHRpb24iOiIiLCJEYXRldGltZSI6IjIwMjEtMDUtMTJUMDY6NTk6MDAuMDAwWiIsInRlYW1pZCI6bnVsbH0sImlhdCI6MTYzMjMwMTc5OX0.rn-55Zt6VK9_zXFxS_YeE_tPSDTycKWsJCs1ihT7AWc'
        //`bearer ${token}`, 
      },
    })
    .then((res) => {
      if (res.data.status === true) {
   
        dispatch(ApprovalReceiptDetails.ApprovalReceipt_Success(res.data));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(ApprovalReceiptDetails.ApprovalReceipt_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(ApprovalReceiptDetails.ApprovalReceipt_Failure(error)));
};



export const ShowUpdateApprovalStatus = (body, OnSuccess, OnFailure) => (dispatch) => {
  
  dispatch(UpdateApprovalStatusDetails.UpdateApprovalStatus());
  
  let token = localStorage.getItem("auth");
  axios
    .put(`${URL}${UPDATEAPPROVALSTATUS_PATH}`,body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
      },
    })
    .then((res) => {
      if (res.data.status === true) {
       
        dispatch(UpdateApprovalStatusDetails.UpdateApprovalStatus_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
       
        dispatch(UpdateApprovalStatusDetails.UpdateApprovalStatus_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(UpdateApprovalStatusDetails.UpdateApprovalStatus_Failure(error)));
};




export const ShowUpdatePayment = (body, OnSuccess, OnFailure) => (dispatch) => {
dispatch(UpdatePaymentStatusDetails.UpdatePaymentDetail());

let token = localStorage.getItem("auth");
axios
  .put(`${URL}${UPDATEPAYMENT_PATH}`,body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`, 
    },
  })
  .then((res) => {
    if (res.data.status === true) {
      // swal("Successful","Successfully Updated","success")
      dispatch(UpdatePaymentStatusDetails.UpdatePaymentDetail_Success(res.data.message));
      dispatch(OnSuccess(res.data.message));
    } else {
      // swal("Unsuccessful","something went wrong please contact to the admin","warning")
      dispatch(UpdatePaymentStatusDetails.UpdatePaymentDetail_Failure(res.data.message));
      dispatch(OnFailure(res.data.message));
    }
  })
  .catch((error) => dispatch(UpdatePaymentStatusDetails.UpdatePaymentDetail_Failure(error)));
};



export const UpdatePaymentStage = (body, OnSuccess, OnFailure) => (dispatch) => {
  
dispatch(UpdatePaymentStageStatus.Update());

let token = localStorage.getItem("auth");
axios
  .put(`${URL}${UPDATEPAYMENTSTAGESTATUS_PATH}`,body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`, 
    },
  })
  .then((res) => {
  
    if (res.data.status === true) {
      dispatch(UpdatePaymentStageStatus.Update_Success(res.data.response));
      dispatch(OnSuccess(res.data.message));
    } else {
      dispatch(UpdatePaymentStageStatus.Update_Failure(res.data.message));
      dispatch(OnFailure(res.data.message));
    }
  })
  .catch((error) => dispatch(UpdatePaymentStageStatus.Update_Failure(error)));
};