import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  TRANSACTION_HISTORY,
  TRANSACTION_HISTORY_SUCCESS,
  TRANSACTION_HISTORY_FAILURE
} from "../constant";

export class GetTransactionHistory {
  static Fetch() {
    return {
      type: TRANSACTION_HISTORY,
    };
  }
  static Fetch_Success(response) {
    return {
      type: TRANSACTION_HISTORY_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: TRANSACTION_HISTORY_FAILURE,
      error,
    };
  }
}
export class GetUserInfo {
  static Fetch() {
    return {
      type: GET_USER_INFO,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_USER_INFO_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_USER_INFO_FAILURE,
      error,
    };
  }
}
