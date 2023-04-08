import {
  GET_PLOT_CANCEL_REQUEST_AGENT,
  GET_PLOT_CANCEL_REQUEST_AGENT_SUCCESS,
  GET_PLOT_CANCEL_REQUEST_AGENT_FAILURE,
  GET_PLOT_CANCEL_REQUEST_AGENT_PATH,
  GET_PLOT_CANCEL_REQUEST_AGENT_ID,
  GET_PLOT_CANCEL_REQUEST_AGENT_ID_SUCCESS,
  GET_PLOT_CANCEL_REQUEST_AGENT_ID_FAILURE,
  GET_PLOT_CANCEL_REQUEST_AGENT_ID_PATH,
  GET_REFUND_LIST_AGENT,
  GET_REFUND_LIST_AGENT_SUCCESS,
  GET_REFUND_LIST_AGENT_FAILURE,
  UPDATE_REFUND_LIST_AGENT,
  UPDATE_REFUND_LIST_AGENT_SUCCESS,
  UPDATE_REFUND_LIST_AGENT_FAILURE,
} from "../constant";

export class PlotCancelReqDetail {
  static Fetch() {
    return {
      type: GET_PLOT_CANCEL_REQUEST_AGENT,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PLOT_CANCEL_REQUEST_AGENT_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PLOT_CANCEL_REQUEST_AGENT_FAILURE,
      error,
    };
  }
}

export class PlotCancelReqDetailById {
  static Fetch() {
    return {
      type: GET_PLOT_CANCEL_REQUEST_AGENT_ID,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PLOT_CANCEL_REQUEST_AGENT_ID_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PLOT_CANCEL_REQUEST_AGENT_ID_FAILURE,
      error,
    };
  }
}
export class RefundListAgent {
  static Fetch() {
    return {
      type: GET_REFUND_LIST_AGENT,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_REFUND_LIST_AGENT_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_REFUND_LIST_AGENT_FAILURE,
      error,
    };
  }
}
export class RefundUpdate {
  static Update() {
    return {
      type: UPDATE_REFUND_LIST_AGENT,
    };
  }
  static Update_Success(response) {
    return {
      type: UPDATE_REFUND_LIST_AGENT_SUCCESS,
      payload: response,
    };
  }
  static Update_Failure(error) {
    return {
      type: UPDATE_REFUND_LIST_AGENT_FAILURE,
      error,
    };
  }
}
