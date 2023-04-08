import axios from "axios";
import { FetchTeam } from "../action";
import {GET_TEAM_PATH } from "../constants";
import { BASEURL } from "config/api/URL";

export const GetTeam = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(FetchTeam.Fetch());
  let token = localStorage.getItem("auth");

  axios
    .get(`${BASEURL}${GET_TEAM_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FetchTeam.FetchSuccess(res.data.response));
        dispatch(OnSuccess(res.data.response));
      } else {
        dispatch(FetchTeam.FetchFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FetchTeam.FetchFailure(error)));
};
