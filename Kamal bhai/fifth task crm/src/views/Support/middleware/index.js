import axios from "axios";
import {
  AddReport,
  FetchSupportType,
  FetchSupportByToken,
  FetchSupportImages,
} from "../actions";
import {
  FETCH_SUPPORT_TYPE_PATH,
  ADD_NEW_SUPPORT_PATH,
  FETCH_SUPPORT_BY_TOKEN_PATH,
  FETCH_SUPPORT_IMAGES_PATH,
} from "../constants";
import { BASEURL } from "config/api/URL";
// import swal from "sweetalert";

export const send_Support = (body, onSuccess, onFailure) => (dispatch) => {
  dispatch(AddReport.Add());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${ADD_NEW_SUPPORT_PATH}`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(AddReport.AddReportSuccess(res.data.response));
        // swal("Congratulations!", "Submit Report successfully", "success");
        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(AddReport.AddReportFailure(res.data.message));
        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => {
   
      dispatch(AddReport.AddReportFailure(error));
    });
};

export const getSupportType = (onSuccess, onFailure) => (dispatch) => {
  dispatch(FetchSupportType.Fetch());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${FETCH_SUPPORT_TYPE_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FetchSupportType.FetchSuccess(res.data.response));
        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(FetchSupportType.FetchFailure(res.data.message));
        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FetchSupportType.FetchFailure(error)));
};

export const getSupportByToken = (onSuccess, onFailure) => (dispatch) => {
  dispatch(FetchSupportByToken.Fetch());
  let token = localStorage.getItem("auth");
  let body = {
    auth: token,
  };
  axios
    .post(`${BASEURL}${FETCH_SUPPORT_BY_TOKEN_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FetchSupportByToken.FetchSuccess(res.data.response));
        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(FetchSupportByToken.FetchFailure(res.data.message));
        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FetchSupportByToken.FetchFailure(error)));
};

export const getSupportImages = (body, onSuccess, onFailure) => (dispatch) => {
  dispatch(FetchSupportImages.Fetch());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${FETCH_SUPPORT_IMAGES_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FetchSupportImages.FetchSuccess(res.data.response));
        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(FetchSupportImages.FetchFailure(res.data.message));
        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FetchSupportImages.FetchFailure(error)));
};
