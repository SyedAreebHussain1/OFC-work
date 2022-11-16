import axios from "axios";
import {
  PlotTransReqApproval,
  PlotTransReqDetailFinance,
  PlotTransReqPlotInfoById,
} from "../action/index";
import {
  GET_PLOT_TRANSFER_REQ_FINANCE_PATH,
  PLOT_TRANSFER_REQ_APPROVAL_PATH,
  GET_PLOT_TRANSFER_PLOTINFO_BY_ID_PATH,
} from "../constant";
import { BASEURL } from "config/api/URL";

export const plotTransReqFinanceMiddleware =
  (pageNumber, noOfRows, searching, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotTransReqDetailFinance.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_PLOT_TRANSFER_REQ_FINANCE_PATH}?page=${pageNumber}&limit=${noOfRows}${
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
          dispatch(PlotTransReqDetailFinance.Fetch_Success(res.data));

          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(PlotTransReqDetailFinance.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(PlotTransReqDetailFinance.Fetch_Failure(error))
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

export const _plotTransReqPlotInfoByIdMiddleware =
  (id, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotTransReqPlotInfoById.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(`${BASEURL}${GET_PLOT_TRANSFER_PLOTINFO_BY_ID_PATH}?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(PlotTransReqPlotInfoById.Fetch_Success(res.data));
          dispatch(OnSuccess(res.data.response));
        } else {
          dispatch(PlotTransReqPlotInfoById.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(PlotTransReqPlotInfoById.Fetch_Failure(error))
      );
  };
