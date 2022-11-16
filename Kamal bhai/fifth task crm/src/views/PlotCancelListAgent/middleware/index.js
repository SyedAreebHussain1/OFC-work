import axios from "axios";
import {
  PlotCancelReqDetail,
  PlotCancelReqDetailById,
  RefundListAgent,
  RefundUpdate,
} from "../action/index";
import {
  GET_PLOT_CANCEL_REQUEST_AGENT_PATH,
  GET_PLOT_CANCEL_REQUEST_AGENT_ID_PATH,
  GET_REFUND_LIST_AGENT_PATH,
  UPDATE_REFUND_LIST_AGENT_PATH,
} from "../constant";
import { BASEURL } from "config/api/URL";

export const plotCancelReqMiddleware =
  (pageNumber, noOfRows, searching, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotCancelReqDetail.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_PLOT_CANCEL_REQUEST_AGENT_PATH}?page=${pageNumber}&limit=${noOfRows}${
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
      .get(`${BASEURL}${GET_PLOT_CANCEL_REQUEST_AGENT_ID_PATH}?id=${id}`, {
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
export const getRefundMiddleware =
  (id, pageNumber, noOfRows, searching, onSuccess, onFailure) => (dispatch) => {
    dispatch(RefundListAgent.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_REFUND_LIST_AGENT_PATH}?returnReqId=${id}&page=${pageNumber}&limit=${noOfRows}${
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
          dispatch(RefundListAgent.Fetch_Success(res.data));
          dispatch(onSuccess(res.data.response));
        } else {
          dispatch(RefundListAgent.Fetch_Failure(res.data.message));
          dispatch(onFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(RefundListAgent.Fetch_Failure(error)));
  };

export const updateRefundMiddleware =
  (id, body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(RefundUpdate.Update());
    let token = localStorage.getItem("auth");
    axios
      .put(`${BASEURL}${UPDATE_REFUND_LIST_AGENT_PATH}/${id}`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(RefundUpdate.Update_Success(res.data));
          dispatch(OnSuccess(res.data.response));
        } else {
          dispatch(RefundUpdate.Update_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(RefundUpdate.Update_Failure(error)));
  };
