import axios from "axios";
import { PlotTransReqDetail, PlotTransReqDetailById } from "../action/index";
import {
  GET_PLOT_TRANSFER_REQ_PATH,
  GET_PLOT_TRANSFER_REQ_BY_ID_PATH,
} from "../constant";
import { BASEURL } from "config/api/URL";

export const plotTransReqMiddleware =
  (pageNumber, noOfRows, searching, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotTransReqDetail.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_PLOT_TRANSFER_REQ_PATH}?page=${pageNumber}&limit=${noOfRows}${
          searching.Transferfrom !== ""
            ? `&Transferfrom=${searching.Transferfrom}`
            : ""
        }${
          searching.Transferto !== ""
            ? `&Transferto=${searching.Transferto}`
            : ""
        }`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(PlotTransReqDetail.Fetch_Success(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(PlotTransReqDetail.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(PlotTransReqDetail.Fetch_Failure(error)));
  };

export const plotTransReqByIdMiddleware =
  (id, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotTransReqDetailById.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(`${BASEURL}${GET_PLOT_TRANSFER_REQ_BY_ID_PATH}?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(PlotTransReqDetailById.Fetch_Success(res.data));
          dispatch(OnSuccess(res.data.response));
        } else {
          dispatch(PlotTransReqDetailById.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(PlotTransReqDetailById.Fetch_Failure(error)));
  };
