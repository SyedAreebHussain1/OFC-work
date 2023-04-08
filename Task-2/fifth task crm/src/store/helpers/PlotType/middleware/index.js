import axios from "axios";
import { PlotTypeDetail, PlotSizeDetail } from "../action";
import { PLOTTYPE_PATH, PLOTSIZE_PATH } from "../constant";
import { BASEURL, URL } from "config/api/URL";

export const showPlotType = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotTypeDetail.PlotType());
  let token = localStorage.getItem("auth");
  axios
    .get(`${URL}${PLOTTYPE_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotTypeDetail.PlotType_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotTypeDetail.PlotType_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotTypeDetail.PlotType_Failure(error)));
};
export const showPlotSize = (OnSuccess, OnFailure, id) => (dispatch) => {
  // .get(`${URL}${PLOTSIZE_PATH}?Plottypeid=${id}`, {
  dispatch(PlotSizeDetail.PlotSize());
  let token = localStorage.getItem("auth");
  axios
    .get(`${URL}${PLOTSIZE_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotSizeDetail.PlotSize_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotSizeDetail.PlotSize_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotSizeDetail.PlotSize_Failure(error)));
};
