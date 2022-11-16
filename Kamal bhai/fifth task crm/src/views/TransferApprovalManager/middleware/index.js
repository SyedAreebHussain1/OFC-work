import axios from "axios";
import {
  PlotTransReqApproval,
  PlotTransReqDetailManager,
  PlotTransReqDetailById,
} from "../action/index";
import {
  GET_PLOT_TRANSFER_REQ_MANAGER_PATH,
  PLOT_TRANSFER_REQ_APPROVAL_PATH,
  GET_PLOT_TRANSFER_REQ_BY_ID_PATH,
} from "../constant";
import { BASEURL } from "config/api/URL";

export const plotTransReqManagerMiddleware =
  (pageNumber, noOfRows, searching, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotTransReqDetailManager.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_PLOT_TRANSFER_REQ_MANAGER_PATH}?page=${pageNumber}&limit=${noOfRows}${
          searching.Transferfrom !== ""
            ? `&Transferfrom=${searching.Transferfrom}`
            : ""
        }${
          searching.Transferto !== ""
            ? `&Transferto=${searching.Transferto}`
            : ""
        }${searching.Request !== "" ? `&Request=${searching.Request}` : ""}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(PlotTransReqDetailManager.Fetch_Success(res.data));

          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(PlotTransReqDetailManager.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(PlotTransReqDetailManager.Fetch_Failure(error))
      );
  };

export const plotTransReqApproval =
  (id, request, remarks, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotTransReqApproval.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${PLOT_TRANSFER_REQ_APPROVAL_PATH}?id=${id}&Request=${request}&Remarks=${remarks}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(PlotTransReqApproval.Fetch_Success(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(PlotTransReqApproval.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(PlotTransReqApproval.Fetch_Failure(error)));
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
