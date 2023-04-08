

import { PAYMENTDETAIL,
    PAYMENTDETAIL_SUCCESS,PAYMENTDETAIL_FAILURE,
    PAYMENTSTATUS,PAYMENTSTATUS_FAILURE,PAYMENTSTATUS_SUCCESS,
    PAYMENTERECIEPT,PAYMENTERECIEPT_FAILURE,PAYMENTERECIEPT_SUCCESS,
    PAYMENTERECIEPTCOUNT,PAYMENTERECIEPTCOUNT_FAILURE,PAYMENTERECIEPTCOUNT_SUCCESS

  } from "../constant.js";
  


  export class PaymentCounts {
    static PaymentCount() {
      return {
        type: PAYMENTERECIEPTCOUNT,
      };
    }
    static PaymentCount_Success(response) {
      return {
        type: PAYMENTERECIEPTCOUNT_SUCCESS,
        payload: response,
      };
    }
    static PaymentCount_Failure(error) {
      return {
        type: PAYMENTERECIEPTCOUNT_FAILURE,
        error,
      };
    }
   
  }
  export class PaymentDetails {
    static PaymentDetail() {
      return {
        type: PAYMENTDETAIL,
      };
    }
    static PaymentDetail_Success(response) {
      return {
        type: PAYMENTDETAIL_SUCCESS,
        payload: response,
      };
    }
    static PaymentDetail_Failure(error) {
      return {
        type: PAYMENTDETAIL_FAILURE,
        error,
      };
    }
   
  }

  export class PaymentStatusDetail {
    static PaymentStatus() {
      return {
        type: PAYMENTSTATUS,
      };
    }
    static PaymentStatus_Success(response) {
      return {
        type: PAYMENTSTATUS_SUCCESS,
        payload: response,
      };
    }
    static PaymentStatus_Failure(error) {
      return {
        type: PAYMENTSTATUS_FAILURE,
        error,
      };
    }
   
  }


  export class PaymentEReceiptDetail {
    static PaymentEReceipt() {
      return {
        type: PAYMENTERECIEPT,
      };
    }
    static PaymentEReceipt_Success(response) {
      return {
        type: PAYMENTERECIEPT_SUCCESS,
        payload: response,
      };
    }
    static PaymentEReceipt_Failure(error) {
      return {
        type: PAYMENTERECIEPT_FAILURE,
        error,
      };
    }
   
  }
  
  
  
  
  