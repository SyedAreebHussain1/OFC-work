import axios from "axios";
import {
  stateAgentDetails,
  StatusDetails,
  UpgradeFormStatus,
  UploadCurrency,
} from "../action/index";

import {
  REALSTATEAGENTDETAIL_PATH,
  BOOKINGFORMSTATUS_PATH,
  UPGRADE_FORM_STATUS_PATH,
  UPLOAD_CURRENCY_PATH,
} from "../constant";
import swal from "sweetalert";

import { BASEURL } from "config/api/URL";

export const GetRealStateAgent = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(stateAgentDetails.realStateAgentDetail);
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${REALSTATEAGENTDETAIL_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(
          stateAgentDetails.realStateAgentDetail_Success(res.data.response)
        );
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(
          stateAgentDetails.realStateAgentDetail_Failure(res.data.message)
        );
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) =>
      dispatch(stateAgentDetails.realStateAgentDetail_Failure(error))
    );
};

export const upgradeFormStatus = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(UpgradeFormStatus.Upgrade());
  let token = localStorage.getItem("auth");
  axios
    .put(`${BASEURL}${UPGRADE_FORM_STATUS_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(UpgradeFormStatus.UpgradeSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(UpgradeFormStatus.UpgradeFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(UpgradeFormStatus.UpgradeFailure(error)));
};

export const ShowBookingStatusFormStatus =
  (OnSuccess, OnFailure) => (dispatch) => {
    dispatch(StatusDetails.BookingFormStatusDetail);
    let token = localStorage.getItem("auth");
    axios
      .get(`${BASEURL}${BOOKINGFORMSTATUS_PATH}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            StatusDetails.BookingFormStattusDetail_Success(res.data.response)
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(
            StatusDetails.BookingFormStatusDetail_Failure(res.data.message)
          );
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(StatusDetails.BookingFormStatusDetail_Failure(error))
      );
  };

export const uploadCurrrencyNotes =
  (body, onSuccess, onFailure) => (dispatch) => {
    dispatch(UploadCurrency.Upload);
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${UPLOAD_CURRENCY_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(UploadCurrency.UploadSuccess(res.data.response));
          dispatch(onSuccess(res.data.message));
        } else {
          dispatch(UploadCurrency.UploadFailure(res.data.message));
          dispatch(onFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(UploadCurrency.UploadFailure(error)));
  };
