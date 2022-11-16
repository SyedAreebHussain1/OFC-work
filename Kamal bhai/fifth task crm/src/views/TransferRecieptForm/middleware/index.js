import axios from "axios";
import {
  AmountDetail,
  PaymentThroughDetail,
  PaymentTypeDetail,
  PaymentRecipt,
  GetTransferDetail
  // UpdatePaymentStages,
} from "../action/index";

import {
  AMOUNT_PATH,
  PAYMENTTHROUGH_PATH,
  PAYMENTTYPE_PATH,
  PAYMENT_RECIPT_PATH,
  GETTRANSFERINFO_PATH
  // UPDATE_PAYMENT_STAGE_PATH,
} from "../constant";

import { BASEURL } from "config/api/URL";
import { URLPAYMENTRECEIPT, URL } from "config/api/URL";
import swal from "sweetalert";

export const showAmountMiddleware = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(AmountDetail.Amount());
  let token = localStorage.getItem("auth");
  axios
    .get(`${URL}${AMOUNT_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(AmountDetail.Amount_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(AmountDetail.Amount_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(AmountDetail.Amount_Failure(error)));
};

export const showPaymentThroughMiddleware =
  (OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PaymentThroughDetail.PaymentThrough());
    let token = localStorage.getItem("auth");
    axios
      .get(`${URL}${PAYMENTTHROUGH_PATH}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            PaymentThroughDetail.PaymentThrough_Success(res.data.response)
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(
            PaymentThroughDetail.PaymentThrough_Failure(res.data.message)
          );
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(PaymentThroughDetail.PaymentThrough_Failure(error))
      );
  };

export const showPaymentTypeMiddleware =
  (OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PaymentTypeDetail.PaymentType());
    let token = localStorage.getItem("auth");
    axios
      .get(`${URL}${PAYMENTTYPE_PATH}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(PaymentTypeDetail.PaymentType_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(PaymentTypeDetail.PaymentType_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(PaymentTypeDetail.PaymentType_Failure(error)));
  };

export const Insert_Payment_Recipt_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PaymentRecipt.PaymentInsert());
    let token = localStorage.getItem("auth");
    axios
      .post(`${URL}${PAYMENT_RECIPT_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(PaymentRecipt.PaymentInsert_Success(res.data.response));
          swal({
            title: "Successful!",
            text: "Successfully Saved",
            type: "success",
            icon: "success",
            // buttons: true,
            // dangerMode: true,
          });
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(PaymentRecipt.PaymentInsert_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(PaymentRecipt.PaymentInsert_Failure(error)));
  };

export const GetTransferInfoMiddleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(GetTransferDetail.GetTransferInfo());
    let token = localStorage.getItem("auth");
    axios
      .post(`${URL}${GETTRANSFERINFO_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            GetTransferDetail.GetTransferInfo_Success(res.data.response)
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetTransferDetail.GetTransferInfo_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(GetTransferDetail.GetTransferInfo_Failure(error))
      );
  };
