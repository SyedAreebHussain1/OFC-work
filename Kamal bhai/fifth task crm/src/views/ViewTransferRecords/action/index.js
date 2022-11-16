import {
  GET_PLOT_TRANSFER_REQ,
  GET_PLOT_TRANSFER_REQ_SUCCESS,
  GET_PLOT_TRANSFER_REQ_FAILURE,
  GET_PLOT_TRANSFER_REQ_BY_ID,
  GET_PLOT_TRANSFER_REQ_BY_ID_SUCCESS,
  GET_PLOT_TRANSFER_REQ_BY_ID_FAILURE,
} from "../constant";

export class PlotTransReqDetail {
  static Fetch() {
    return {
      type: GET_PLOT_TRANSFER_REQ,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PLOT_TRANSFER_REQ_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PLOT_TRANSFER_REQ_FAILURE,
      error,
    };
  }
}

export class PlotTransReqDetailById {
  static Fetch() {
    return {
      type: GET_PLOT_TRANSFER_REQ_BY_ID,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PLOT_TRANSFER_REQ_BY_ID_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PLOT_TRANSFER_REQ_BY_ID_FAILURE,
      error,
    };
  }
}
