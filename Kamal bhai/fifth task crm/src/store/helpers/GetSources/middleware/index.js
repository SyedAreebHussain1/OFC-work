import axios from "axios";
import { FetchSources } from "../action";
import { GET_ALL_SOURCES_PATH } from "../constants";
import { BASEURL } from "config/api/URL";

export const GetSources = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(FetchSources.Fetch());
  let token = localStorage.getItem("auth");

  axios
    .get(`${BASEURL}${GET_ALL_SOURCES_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 

      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FetchSources.FetchSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(FetchSources.FetchFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FetchSources.FetchFailure(error)));
};
