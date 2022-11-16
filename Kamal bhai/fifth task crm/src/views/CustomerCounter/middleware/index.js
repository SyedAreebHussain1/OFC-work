import axios from "axios";
import {
  FetchAgentDetails,
  UpgradeCustomer,
  FetchAllVerifedCustomer,
} from "../actions";
import {
  FETCH_AGENT_DETAILS_PATH,
  UPGRADE_CUSTOMER_PATH,
  FETCH_ALL_VERIFIED_CUSTOMER_PATH,
} from "../constants";
import { BASEURL } from "config/api/URL";

export const getRealStateAgentDetails =
  (body, onSuccess, onFailure) => (dispatch) => {
    dispatch(FetchAgentDetails.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${FETCH_AGENT_DETAILS_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(FetchAgentDetails.FetchSuccess(res.data.response));
          dispatch(onSuccess(res.data));
        } else {
          dispatch(FetchAgentDetails.FetchFailure(res.data.message));
          dispatch(onFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(FetchAgentDetails.FetchFailure(error)));
  };

export const getAllVerifedCustomer =
  (body, onSuccess, onFailure) => (dispatch) => {
    dispatch(FetchAllVerifedCustomer.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${FETCH_ALL_VERIFIED_CUSTOMER_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(FetchAllVerifedCustomer.FetchSuccess(res.data.response));
          dispatch(onSuccess(res.data));
        } else {
          dispatch(FetchAllVerifedCustomer.FetchFailure(res.data.message));
          dispatch(onFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(FetchAllVerifedCustomer.FetchFailure(error)));
  };

export const upgradeCustomer = (body, onSuccess, onFailure) => (dispatch) => {
  dispatch(UpgradeCustomer.Upgrade());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${UPGRADE_CUSTOMER_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(UpgradeCustomer.UpgradeSuccess(res.data.response));
        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(UpgradeCustomer.UpgradeFailure(res.data.message));
        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(UpgradeCustomer.UpgradeFailure(error)));
};
