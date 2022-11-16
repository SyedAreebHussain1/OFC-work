import axios from "axios";
import { AgentDetail } from "../action/index";
import {AGENT_PATH } from "../constants";
import { BASEURL } from "config/api/URL";

export const showAgent = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(AgentDetail.Agent());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${AGENT_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(AgentDetail.Agent_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(AgentDetail.Agent_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(AgentDetail.Agent_Failure(error)));
};
