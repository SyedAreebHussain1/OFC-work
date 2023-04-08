import axios from "axios";
import {
  PlotCancelReqDetail,
  PlotCancelReqDetailById,
  PlotCancleReqApproval,
} from "../action/index";
import {
  GET_PLOT_CANCEL_REQUEST_ACCOUNTS_PATH,
  GET_PLOT_CANCEL_REQUEST_ACCOUNTS_ID_PATH,
  PLOT_CANCEL_REQ_APPROVAL_PATH,
} from "../constant";
import { BASEURL } from "config/api/URL";

export const plotCancelReqMiddleware =
  (pageNumber, noOfRows, searching, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotCancelReqDetail.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_PLOT_CANCEL_REQUEST_ACCOUNTS_PATH}?page=${pageNumber}&limit=${noOfRows}${
          searching.user_name !== "" ? `&user_name=${searching.user_name}` : ""
        }${searching.CNIC !== "" ? `&CNIC=${searching.CNIC}` : ""}${
          searching.SaleOrderNo !== ""
            ? `&SaleOrderNo=${searching.SaleOrderNo}`
            : ""
        } `,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(PlotCancelReqDetail.Fetch_Success(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(PlotCancelReqDetail.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(PlotCancelReqDetail.Fetch_Failure(error)));
  };

export const plotCancelReqByIdMiddleware =
  (id, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotCancelReqDetailById.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(`${BASEURL}${GET_PLOT_CANCEL_REQUEST_ACCOUNTS_ID_PATH}?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(PlotCancelReqDetailById.Fetch_Success(res.data));
          dispatch(OnSuccess(res.data.response));
        } else {
          dispatch(PlotCancelReqDetailById.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(PlotCancelReqDetailById.Fetch_Failure(error)));
  };

export const plotCancleReqApproval =
  (id, body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotCancleReqApproval.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .put(`${BASEURL}${PLOT_CANCEL_REQ_APPROVAL_PATH}/${id}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(PlotCancleReqApproval.Fetch_Success(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(PlotCancleReqApproval.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(PlotCancleReqApproval.Fetch_Failure(error)));
  };
