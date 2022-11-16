import {
  AMOUNT,
  AMOUNT_SUCCESS,
  AMOUNT_FAILURE,
  PAYMENTTHROUGH,PAYMENTTHROUGH_SUCCESS,PAYMENTTHROUGH_FAILURE,
  PAYMENTTYPE,PAYMENTTYPE_SUCCESS,PAYMENTTYPE_FAILURE,

  PAYMENT_RECIPT,
    PAYMENT_RECIPT_SUCCESS,
    PAYMENT_RECIPT_FAILURE,

    GETTRANSFERINFO,GETTRANSFERINFO_FAILURE,GETTRANSFERINFO_SUCCESS
    // UPDATE_PAYMENT_STAGE,
    // UPDATE_PAYMENT_STAGE_SUCCESS,
    // UPDATE_PAYMENT_STAGE_FAILURE

  } from "../constant";   // done 
  export class AmountDetail {
    static Amount() {
      return {
        type: AMOUNT,
      };
    }
    static Amount_Success(response) {
      return {
        type: AMOUNT_SUCCESS,
        payload: response,
      };
    }
    static Amount_Failure(error) {
      return {
        type: AMOUNT_FAILURE,
        error,
      };
    }
  }
  export class PaymentThroughDetail {
    static PaymentThrough() {
      return {
        type: PAYMENTTHROUGH,
      };
    }
    static PaymentThrough_Success(response) {
      return {
        type: PAYMENTTHROUGH_SUCCESS,
        payload: response,
      };
    }
    static PaymentThrough_Failure(error) {
      return {
        type: PAYMENTTHROUGH_FAILURE,
        error,
      };
    }
  }

  export class PaymentTypeDetail {
    static PaymentType() {
      return {
        type: PAYMENTTYPE,
      };
    }
    static PaymentType_Success(response) {
      return {
        type: PAYMENTTYPE_SUCCESS,
        payload: response,
      };
    }
    static PaymentType_Failure(error) {
      return {
        type: PAYMENTTYPE_FAILURE,
        error,
      };
    }
  }

  export class PaymentRecipt {
    static PaymentInsert() {
      return {
        type: PAYMENT_RECIPT,
      };
    }
    static PaymentInsert_Success(response) {
      return {
        type: PAYMENT_RECIPT_SUCCESS,
        payload: response,
      };
    }
    static PaymentInsert_Failure(error) {
      return {
        type: PAYMENT_RECIPT_FAILURE,
        error,
      };
    }
  }

  export class GetTransferDetail{
    static GetTransferInfo() {
      return {
        type: GETTRANSFERINFO,
      };
    }
    static GetTransferInfo_Success(response) {
      return {
        type: GETTRANSFERINFO_SUCCESS,
        payload: response,
      };
    }
    static GetTransferInfo_Failure(error) {
      return {
        type: GETTRANSFERINFO_FAILURE,
        error,
      };
    }
  }
  