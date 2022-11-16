import axios from "axios";
import {
  PlotDetails,
  PlotPosition,
  AddDetails,
  DeleteDetails,
} from "../action";
import {
  PLOT_POSITION_PATH,
  ADD_PLOT_PATH,
  DELETE_PLOT_PATH,
  PLOT_DETAILS_PATH,
} from "../constant";
import { BASEURL, URL } from "config/api/URL";

export const showPlotPosition = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotPosition.Plot_Position());

  let token = localStorage.getItem("auth");
  axios
    .get(`${URL}${PLOT_POSITION_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotPosition.Plot_Position_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotPosition.Plot_Position_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotPosition.Plot_Position_Failure(error)));
};

export const showAdd = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(AddDetails.AddPlot());
  let token = localStorage.getItem("auth");
  axios
    .post(`${URL}${ADD_PLOT_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(AddDetails.AddPlot_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(AddDetails.AddPlot_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(AddDetails.AddPlot_Failure(error)));
};

export const showDelete = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(DeleteDetails.DeletePlot());
  let token = localStorage.getItem("auth");
  axios
    .post(`${URL}${DELETE_PLOT_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(DeleteDetails.DeletePlot_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(DeleteDetails.DeletePlot_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(DeleteDetails.DeletePlot_Failure(error)));
};

export const showPlotDetails = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotDetails.Plot_Details());
  let token = localStorage.getItem("auth");
  axios
    .post(`${URL}${PLOT_DETAILS_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotDetails.Plot_Details_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotDetails.Plot_Details_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotDetails.Plot_Details_Failure(error)));
};
