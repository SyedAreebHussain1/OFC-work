import {
  GET_PAYMENT_BANK,
  GET_PAYMENT_BANK_SUCCESS,
  GET_PAYMENT_BANK_FAILURE,
  APPROVE_PAYMENT_BANK,
  APPROVE_PAYMENT_BANK_SUCCESS,
  APPROVE_PAYMENT_BANK_FAILURE,
  APPROVE_PAYMENT_BANK_PATH,
} from "../constant";

export class GetPaymentBank {
  static Fetch() {
    return {
      type: GET_PAYMENT_BANK,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PAYMENT_BANK_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PAYMENT_BANK_FAILURE,
      error,
    };
  }
}
export class ApproveBank {
  static Approve() {
    return {
      type: APPROVE_PAYMENT_BANK,
    };
  }
  static Approve_Success(response) {
    return {
      type: APPROVE_PAYMENT_BANK_SUCCESS,
      payload: response,
    };
  }
  static Approve_Failure(error) {
    return {
      type: APPROVE_PAYMENT_BANK_FAILURE,
      error,
    };
  }
}
