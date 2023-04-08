import {
  USER,
  USER_FAILURE,
  USER_SUCCESS,
  GET_PAYMENT_DETAILS,
  GET_PAYMENT_DETAILS_FAILURE,
  GET_PAYMENT_DETAILS_SUCCESS,
  PLOTTRANSFER_SUCCESS,
  PLOTTRANSFER_FAILURE,
  PLOTTRANSFER,
} from "../constant.js";

export class userDetail {
  static user() {
    return {
      type: USER,
    };
  }
  static user_Success(response) {
    return {
      type: USER_SUCCESS,
      payload: response,
    };
  }
  static user_Failure(error) {
    return {
      type: USER_FAILURE,
      error,
    };
  }
}
export class plotTransferDetail {
  static PlotTransfer() {
    return {
      type: PLOTTRANSFER,
    };
  }
  static PlotTransfer_Success(response) {
    return {
      type: PLOTTRANSFER_SUCCESS,
      payload: response,
    };
  }
  static PlotTransfer_Failure(error) {
    return {
      type: PLOTTRANSFER_FAILURE,
      error,
    };
  }
}
export class getPaymentDetails {
  static Fetch() {
    return {
      type: GET_PAYMENT_DETAILS,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PAYMENT_DETAILS_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PAYMENT_DETAILS_FAILURE,
      error,
    };
  }
}
