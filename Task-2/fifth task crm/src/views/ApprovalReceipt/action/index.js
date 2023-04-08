import {
  APPROVALRECEIPT, APPROVALRECEIPT_FAILURE, APPROVALRECEIPT_SUCCESS, UPDATEAPPROVALSTATUS, UPDATEAPPROVALSTATUS_FAILURE,
  UPDATEAPPROVALSTATUS_SUCCESS,
  UPDATEPAYMENT, UPDATEPAYMENT_FAILURE, UPDATEPAYMENT_SUCCESS,
  UPDATEPAYMENTSTAGESTATUS, UPDATEPAYMENTSTAGESTATUS_SUCCESS, UPDATEPAYMENTSTAGESTATUS_FAILURE,


} from "../constant.js";

export class ApprovalReceiptDetails {
  static ApprovalReceipt() {
    return {
      type: APPROVALRECEIPT,
    };
  }
  static ApprovalReceipt_Success(response) {
    return {
      type: APPROVALRECEIPT_SUCCESS,
      payload: response,
    };
  }
  static ApprovalReceipt_Failure(error) {
    return {
      type: APPROVALRECEIPT_FAILURE,
      error,
    };
  }
}



export class UpdatePaymentStageStatus {
  static Update() {
    return {
      type: UPDATEPAYMENTSTAGESTATUS,
    };
  }
  static Update_Success(response) {
    return {
      type: UPDATEPAYMENTSTAGESTATUS_SUCCESS,
      payload: response,
    };
  }
  static Update_Failure(error) {
    return {
      type: UPDATEPAYMENTSTAGESTATUS_FAILURE,
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

export class UpdatePaymentStatusDetails {
  static UpdatePaymentDetail() {
    return {
      type: UPDATEPAYMENT,
    };
  }
  static UpdatePaymentDetail_Success(response) {
    return {
      type: UPDATEPAYMENT_SUCCESS,
      payload: response,
    };
  }
  static UpdatePaymentDetail_Failure(error) {
    return {
      type: UPDATEPAYMENT_FAILURE,
      error,
    };
  }

}

