import {
  GET_DASHBOARD_WALLET,
  GET_DASHBOARD_WALLET_SUCCESS,
  GET_DASHBOARD_WALLET_FAILURE,
  GET_WALLET_HISTORY,
  GET_WALLET_HISTORY_SUCCESS,
  GET_WALLET_HISTORY_FAILURE,
  UPDATEREQUEST,
  UPDATEREQUEST_SUCCESS,
  UPDATEREQUEST_FAILURE,
} from "../constant";

export class GetDashboardWallet {
  static Fetch() {
    return {
      type: GET_DASHBOARD_WALLET,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_DASHBOARD_WALLET_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_DASHBOARD_WALLET_FAILURE,
      error,
    };
  }
}

// HISTORY WALLET ACTION

export class GetWalletHistory {
  static Fetch() {
    return {
      type: GET_WALLET_HISTORY,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_WALLET_HISTORY_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_WALLET_HISTORY_FAILURE,
      error,
    };
  }
}

// Apporve or reject

export class UpdateRequest {
  static Update() {
    return {
      type: UPDATEREQUEST,
    };
  }
  static UpdateRequest_Success(response) {
    return {
      type: UPDATEREQUEST_SUCCESS,
      payload: response,
    };
  }
  static UpdateRequest_Failure(error) {
    return {
      type: UPDATEREQUEST_FAILURE,
      error,
    };
  }
}
