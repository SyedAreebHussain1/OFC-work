import {
  PLOT_DETAILS,
  PLOT_DETAILS_SUCCESS,
  PLOT_DETAILS_FAILURE,
  PLOT_POSITION,
  PLOT_POSITION_SUCCESS,
  PLOT_POSITION_FAILURE,
  ADD_PLOT,
  ADD_PLOT_SUCCESS,
  ADD_PLOT_FAILURE,
  DELETE_PLOT,
  DELETE_PLOT_SUCCESS,
  DELETE_PLOT_FAILURE,
} from "../constant.js";

export class PlotPosition {
  static Plot_Position() {
    return {
      type: PLOT_POSITION,
    };
  }
  static Plot_Position_Success(response) {
    return {
      type: PLOT_POSITION_SUCCESS,
      payload: response,
    };
  }
  static Plot_Position_Failure(error) {
    return {
      type: PLOT_POSITION_FAILURE,
      error,
    };
  }
}

export class AddDetails {
  static AddPlot() {
    return {
      type: ADD_PLOT,
    };
  }
  static AddPlot_Success(response) {
    return {
      type: ADD_PLOT_SUCCESS,
      payload: response,
    };
  }
  static AddPlot_Failure(error) {
    return {
      type: ADD_PLOT_FAILURE,
      error,
    };
  }
}

export class DeleteDetails {
  static DeletePlot() {
    return {
      type: DELETE_PLOT,
    };
  }
  static DeletePlot_Success(response) {
    return {
      type: DELETE_PLOT_SUCCESS,
      payload: response,
    };
  }
  static DeletePlot_Failure(error) {
    return {
      type: DELETE_PLOT_FAILURE,
      error,
    };
  }
}

export class PlotDetails {
  static Plot_Details() {
    return {
      type: PLOT_DETAILS,
    };
  }
  static Plot_Details_Success(response) {
    return {
      type: PLOT_DETAILS_SUCCESS,
      payload: response,
    };
  }
  static Plot_Details_Failure(error) {
    return {
      type: PLOT_DETAILS_FAILURE,
      error,
    };
  }
}
