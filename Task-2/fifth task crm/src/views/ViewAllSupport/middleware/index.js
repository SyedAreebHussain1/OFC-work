import axios from "axios";
import { FetchAllSupport, FetchStatus, UpdateSupportStatus,FetchFiles } from "../actions";
import {
  FETCH_ALL_SUPPORT_PATH,
  FETCH_STATUS_PATH,
  UPDATE_SUPPORT_STATUS_PATH,FETCH_FILES_PATH
} from "../constants";
import { BASEURL } from "config/api/URL";

export const getAllSupport = (onSuccess, onFailure) => (dispatch) => {
  dispatch(FetchAllSupport.Fetch());
  let token = localStorage.getItem("auth");
  let body = {
    auth: null,
  };
  axios
    .post(`${BASEURL}${FETCH_ALL_SUPPORT_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FetchAllSupport.FetchSuccess(res.data.response));
        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(FetchAllSupport.FetchFailure(res.data.message));
        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FetchAllSupport.FetchFailure(error)));
};

export const getStatus = (onSuccess, onFailure) => (dispatch) => {
  dispatch(FetchStatus.Fetch());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${FETCH_STATUS_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FetchStatus.FetchSuccess(res.data.response));
        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(FetchStatus.FetchFailure(res.data.message));
        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FetchStatus.FetchFailure(error)));
};

export const updateSupportStatus =
  (body, onSuccess, onFailure) => (dispatch) => {
    dispatch(UpdateSupportStatus.Update());
    let token = localStorage.getItem("auth");
    axios
      .put(`${BASEURL}${UPDATE_SUPPORT_STATUS_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
         
          dispatch(UpdateSupportStatus.UpdateSuccess(res.data.response));
          dispatch(onSuccess(res.data.message));
        } else {
          dispatch(UpdateSupportStatus.UpdateFailure(res.data.message));
          dispatch(onFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(UpdateSupportStatus.UpdateFailure(error)));
  };

  export const getSupportFiles = (body, onSuccess, onFailure) => (dispatch) => {
  dispatch(FetchFiles.Fetch());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${FETCH_FILES_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FetchFiles.FetchSuccess(res.data.response));
        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(FetchFiles.FetchFailure(res.data.message));
        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FetchFiles.FetchFailure(error)));
};