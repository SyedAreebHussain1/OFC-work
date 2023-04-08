import axios from "axios";
import { AgentDetail, NotesStatus } from "../action/index";

import { REALSTATEAGENT_PATH, NOTES_STATUS_PATH } from "../constant";
import swal from "sweetalert";

import { BASEURL } from "config/api/URL";

export const InsertRealStateAgent =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(AgentDetail.realStateAgent());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${REALSTATEAGENT_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(AgentDetail.realStateAgent_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(AgentDetail.realStateAgent_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(AgentDetail.realStateAgent_Failure(error)));
  };



export const getNotesStats =
  (OnSuccess, OnFailure) => (dispatch) => {
    dispatch(NotesStatus.getNotesStatus());
    let token = localStorage.getItem("auth");
    axios
      .get(`${BASEURL}${NOTES_STATUS_PATH}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(NotesStatus.getNotesStatus_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(NotesStatus.getNotesStatus_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(NotesStatus.getNotesStatus_Failure(error)));
  };