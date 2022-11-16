import axios from "axios";
import {
  AmountDetail,
  PaymentThroughDetail,
  PaymentTypeDetail,
  PaymentRecipt,
  UpdatePaymentStages,
  WalletDetail,
  WalletRequest,
  FileSend,
  BankDetail,
} from "../action/index";

import {
  AMOUNT_PATH,
  PAYMENTTHROUGH_PATH,
  PAYMENTTYPE_PATH,
  PAYMENT_RECIPT_PATH,
  UPDATE_PAYMENT_STAGE_PATH,
  WALLET_PATH,
  WALLET_REQUEST_PATH,
  FILE_PATH,
  BANK_PATH,
} from "../constant";

import { BASEURL } from "config/api/URL";
import { URLPAYMENTRECEIPT, URL } from "config/api/URL";
import swal from "sweetalert";

export const bankMiddleware = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(BankDetail.Bank());
  let token = localStorage.getItem("auth");
  axios
    .get(`${URL}${BANK_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(BankDetail.Bank_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(BankDetail.Bank_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(BankDetail.Bank_Failure(error)));
};

export const wallet_Middleware = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(WalletDetail.Wallet());
  let token = localStorage.getItem("auth");

  axios
    .post(`${URL}${WALLET_PATH}`, body, {
      // mode: "no-cors",
      headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(WalletDetail.Wallet_Success(res.data.response));

        dispatch(OnSuccess(res.data.response));
      } else {
        dispatch(WalletDetail.Wallet_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(WalletDetail.Wallet_Failure(error)));
};
export const file_Middleware = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(FileSend.File());
  let token = localStorage.getItem("auth");
  axios
    .post(
      `http://295d-2400-adc1-1d0-cc00-7167-d8be-6a66-2bbd.ngrok.io/CRM/${FILE_PATH}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      }
    )
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FileSend.file_Success(res.data.response));

        dispatch(OnSuccess(res.data));
      } else {
        dispatch(FileSend.file_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FileSend.file_Failure(error)));
};
export const wallet_request_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(WalletRequest.Request());
    let token = localStorage.getItem("auth");
    axios
      .post(`${URL}${WALLET_REQUEST_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(WalletRequest.Walle_Request_Success(res.data.response));

          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(WalletRequest.Wallet_Request_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => {
        dispatch(WalletRequest.Wallet_Request_Failure(error));
      });
  };

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

export const Update_Payment_Stages_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(UpdatePaymentStages.UpdatePayment());
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
          dispatch(
            UpdatePaymentStages.UpdatePayment_Success(res.data.response)
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(UpdatePaymentStages.UpdatePayment_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(UpdatePaymentStages.UpdatePayment_Failure(error))
      );
  };
