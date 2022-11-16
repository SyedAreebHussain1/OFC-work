import {
  GET_PLOT_CANCEL_REQUEST_ACCOUNTS,
  GET_PLOT_CANCEL_REQUEST_ACCOUNTS_SUCCESS,
  GET_PLOT_CANCEL_REQUEST_ACCOUNTS_FAILURE,
  GET_PLOT_CANCEL_REQUEST_ACCOUNTS_PATH,
  GET_PLOT_CANCEL_REQUEST_ACCOUNTS_ID,
  GET_PLOT_CANCEL_REQUEST_ACCOUNTS_ID_SUCCESS,
  GET_PLOT_CANCEL_REQUEST_ACCOUNTS_ID_FAILURE,
  GET_PLOT_CANCEL_REQUEST_ACCOUNTS_ID_PATH,
  PLOT_CANCEL_REQ_APPROVAL,
  PLOT_CANCEL_REQ_APPROVAL_SUCCESS,
  PLOT_CANCEL_REQ_APPROVAL_FAILURE,
} from "../constant";

export class PlotCancelReqDetail {
  static Fetch() {
    return {
      type: GET_PLOT_CANCEL_REQUEST_ACCOUNTS,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PLOT_CANCEL_REQUEST_ACCOUNTS_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PLOT_CANCEL_REQUEST_ACCOUNTS_FAILURE,
      error,
    };
  }
}

export class PlotCancelReqDetailById {
  static Fetch() {
    return {
      type: GET_PLOT_CANCEL_REQUEST_ACCOUNTS_ID,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PLOT_CANCEL_REQUEST_ACCOUNTS_ID_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PLOT_CANCEL_REQUEST_ACCOUNTS_ID_FAILURE,
      error,
    };
  }
}

export class PlotCancleReqApproval {
  static Fetch() {
    return {
      type: PLOT_CANCEL_REQ_APPROVAL,
    };
  }
  static Fetch_Success(response) {
    return {
      type: PLOT_CANCEL_REQ_APPROVAL_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: PLOT_CANCEL_REQ_APPROVAL_FAILURE,
      error,
    };
  }
}
// PlotCancleReqApproval
