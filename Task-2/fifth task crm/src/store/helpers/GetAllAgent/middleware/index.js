import axios from "axios";
import { FetchAgent } from "../action";
import { GET_ALL_AGENT_PATH } from "../constants";
import { BASEURL } from "config/api/URL";

export const GetAgent = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(FetchAgent.Fetch());
  let token = localStorage.getItem("auth");

  axios
    .get(`${BASEURL}${GET_ALL_AGENT_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 

      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FetchAgent.FetchSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(FetchAgent.FetchFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FetchAgent.FetchFailure(error)));
};
