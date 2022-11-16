import {
  GET_PLOT_TRANSFER_REQ_FINANCE,
  GET_PLOT_TRANSFER_REQ_FINANCE_SUCCESS,
  GET_PLOT_TRANSFER_REQ_FINANCE_FAILURE,
  PLOT_TRANSFER_REQ_APPROVAL,
  PLOT_TRANSFER_REQ_APPROVAL_SUCCESS,
  PLOT_TRANSFER_REQ_APPROVAL_FAILURE,
  GET_PLOT_TRANSFER_PLOTINFO_BY_ID,
  GET_PLOT_TRANSFER_PLOTINFO_BY_ID_PATH,
  GET_PLOT_TRANSFER_PLOTINFO_BY_ID_SUCCESS,
  GET_PLOT_TRANSFER_PLOTINFO_BY_ID_FAILURE,
} from "../constant";

export class PlotTransReqDetailFinance {
  static Fetch() {
    return {
      type: GET_PLOT_TRANSFER_REQ_FINANCE,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PLOT_TRANSFER_REQ_FINANCE_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PLOT_TRANSFER_REQ_FINANCE_FAILURE,
      error,
    };
  }
}

export class PlotTransReqApproval {
  static Fetch() {
    return {
      type: PLOT_TRANSFER_REQ_APPROVAL,
    };
  }
  static Fetch_Success(response) {
    return {
      type: PLOT_TRANSFER_REQ_APPROVAL_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: PLOT_TRANSFER_REQ_APPROVAL_FAILURE,
      error,
    };
  }
}

export class PlotTransReqPlotInfoById {
  static Fetch() {
    return {
      type: GET_PLOT_TRANSFER_PLOTINFO_BY_ID,
    };
  }
  static Fetch_Success(response) {
    return {
      type: GET_PLOT_TRANSFER_PLOTINFO_BY_ID_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: GET_PLOT_TRANSFER_PLOTINFO_BY_ID_FAILURE,
      error,
    };
  }
}
