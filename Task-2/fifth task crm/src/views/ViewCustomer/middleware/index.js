import axios from "axios";
import { LeadUser, AgentUser } from "../action/index";
import { LEAD_PATH, AGENT_PATH } from "../constant";
import { BASEURL } from "config/api/URL";

export const LeadUserMiddleware = (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(LeadUser.Lead());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${LEAD_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(LeadUser.LeadSuccess(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(LeadUser.LeadFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(LeadUser.LeadFailure(error)));
  };

export const AgentUserMiddleware = (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(AgentUser.Add());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${AGENT_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(AgentUser.AgentSuccess(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(AgentUser.AgentFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(AgentUser.AgentFailure(error)));
  };
