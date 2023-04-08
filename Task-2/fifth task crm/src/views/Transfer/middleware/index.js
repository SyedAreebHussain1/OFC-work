import axios from "axios";

import { userDetail, plotTransferDetail, getPaymentDetails } from "../actions";

import {
  USER_PATH,
  PLOTTRANSFER_PATH,
  GET_PAYMENT_DETAILS_PATH,
} from "../constant";
import swal from "sweetalert";

import { BASEURL } from "config/api/URL";

export const ShowPlotTransfer = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(plotTransferDetail.PlotTransfer());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${PLOTTRANSFER_PATH}`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(plotTransferDetail.PlotTransfer_Success(res.data.response));
        // swal("Successful","Successfully Initiated","success")
        dispatch(OnSuccess(res.data.response));
      } else {
        dispatch(plotTransferDetail.PlotTransfer_Failure(res.data.message));
        swal("Unsuccessful", "Request Not Initiated", "warning");
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(plotTransferDetail.PlotTransfer_Failure(error)));
};
export const ShowUserInfo = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(userDetail.user());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${USER_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(userDetail.user_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(userDetail.user_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(userDetail.user_Failure(error)));
};

export const getPaymentDetailsMiddleware =
  (id, OnSuccess, OnFailure) => (dispatch) => {
    // console.log("USER SALE ORDER ID", id);
    dispatch(getPaymentDetails.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(`${BASEURL}${GET_PAYMENT_DETAILS_PATH}?SaleOrderId=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          // console.log("RESPOSE OF PAYMENT DETAILS", res.data);
          dispatch(getPaymentDetails.Fetch_Success(res.data.response));
          dispatch(OnSuccess(res.data.response));
        } else {
          dispatch(getPaymentDetails.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(getPaymentDetails.Fetch_Failure(error)));
  };
