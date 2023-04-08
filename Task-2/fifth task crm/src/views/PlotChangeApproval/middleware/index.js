import axios from "axios";
import {AllChangeRequestDetails, UpdateApprovalStatusDetails,StatusDetails } from "../action/index";
import { AllCHANGEREQUEST_PATH,UPDATEAPPROVALSTATUS_PATH,STATUS_PATH} from "../constant";
import { BASEURL,URL,URLLOCAL } from "config/api/URL";


export const ShowAllChangeRequest = ( page, limit,status_name,OnSuccess, OnFailure) => (dispatch) => {

  dispatch(AllChangeRequestDetails.AllChangeRequest());
  
  let token = localStorage.getItem("auth");
  axios
    .get(`${URL}${AllCHANGEREQUEST_PATH}?page=${page}&limit=${limit}${status_name!=="" && status_name!==null?`&status_name=${status_name}`:""}`
    , 
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
       
      },
    }
    )
    .then((res) => {
     
      if (res.data.status === true) {
        dispatch(AllChangeRequestDetails.AllChangeRequest_Success(res.data));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(AllChangeRequestDetails.AllChangeRequest_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(AllChangeRequestDetails.AllChangeRequest_Failure(error)));
};

export const ShowUpdateApprovalStatus = (body, OnSuccess, OnFailure) => (dispatch) => {

  dispatch(UpdateApprovalStatusDetails.UpdateApprovalStatus());
  
  let token = localStorage.getItem("auth");
  axios
    .post(`${URL}${UPDATEAPPROVALSTATUS_PATH}`,body, {
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




export const ShowAllStatus = ( OnSuccess, OnFailure) => (dispatch) => {

  dispatch(StatusDetails.Status);
  
  let token = localStorage.getItem("auth");
  axios
    .get(`${URL}${STATUS_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
      },
    })
    .then((res) => {
   
      if (res.data.status === true) {
       
        dispatch(StatusDetails.Status_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
  
        dispatch(StatusDetails.Status_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(StatusDetails.Status_Failure(error)));
};