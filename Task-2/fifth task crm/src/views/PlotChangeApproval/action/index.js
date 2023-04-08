import {
AllCHANGEREQUEST,AllCHANGEREQUEST_FAILURE,AllCHANGEREQUEST_SUCCESS,UPDATEAPPROVALSTATUS, UPDATEAPPROVALSTATUS_FAILURE,
UPDATEAPPROVALSTATUS_SUCCESS,STATUS_FAILURE,STATUS_SUCCESS,STATUS
  
  } from "../constant.js";
  
  export class StatusDetails {
    static Status() {
      return {
        type: STATUS,
      };
    }
    static Status_Success(response) {
      return {
        type: STATUS_SUCCESS,
        payload: response,
      };
    }
    static Status_Failure(error) {
      return {
        type: STATUS_FAILURE,
        error,
      };
    }
  }
  export class AllChangeRequestDetails {
    static AllChangeRequest() {
      return {
        type: AllCHANGEREQUEST,
      };
    }
    static AllChangeRequest_Success(response) {
      return {
        type: AllCHANGEREQUEST_SUCCESS,
        payload: response,
      };
    }
    static AllChangeRequest_Failure(error) {
      return {
        type: AllCHANGEREQUEST_FAILURE,
        error,
      };
    }
  }

  export class UpdateApprovalStatusDetails {
    static UpdateApprovalStatus() {
      return {
        type: UPDATEAPPROVALSTATUS,
      };
    }
    static UpdateApprovalStatus_Success(response) {
      return {
        type: UPDATEAPPROVALSTATUS_SUCCESS,
        payload: response,
      };
    }
    static UpdateApprovalStatus_Failure(error) {
      return {
        type: UPDATEAPPROVALSTATUS_FAILURE,
        error,
      };
    }
  
  }
  