import {
  GET_PLOT_CANCEL_REQUEST_MANAGER,
  GET_PLOT_CANCEL_REQUEST_MANAGER_SUCCESS,
  GET_PLOT_CANCEL_REQUEST_MANAGER_FAILURE,
  GET_PLOT_CANCEL_REQUEST_MANAGER_PATH,
  GET_PLOT_CANCEL_REQUEST_MANAGER_ID,
  GET_PLOT_CANCEL_REQUEST_MANAGER_ID_SUCCESS,
  GET_PLOT_CANCEL_REQUEST_MANAGER_ID_FAILURE,
  GET_PLOT_CANCEL_REQUEST_MANAGER_ID_PATH,
  PLOT_CANCEL_REQ_APPROVAL,
  PLOT_CANCEL_REQ_APPROVAL_SUCCESS,
  PLOT_CANCEL_REQ_APPROVAL_FAILURE,
} from "../constant";

export class PlotCancelReqDetail {
  static Fetch() {
    return {
      type: GET_PLOT_CANCEL_REQUEST_MANAGER,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PLOT_CANCEL_REQUEST_MANAGER_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PLOT_CANCEL_REQUEST_MANAGER_FAILURE,
      error,
    };
  }
}

export class PlotCancelReqDetailById {
  static Fetch() {
    return {
      type: GET_PLOT_CANCEL_REQUEST_MANAGER_ID,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PLOT_CANCEL_REQUEST_MANAGER_ID_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PLOT_CANCEL_REQUEST_MANAGER_ID_FAILURE,
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
