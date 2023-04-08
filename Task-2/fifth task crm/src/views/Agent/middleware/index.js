import axios from "axios";
import {
  UserAgent,
  UserAgentData,
  TeamData,
  UpdateEmployeeDetail,
  DeleteEmployeeDetail,
} from "../action"; //done
import {
  AGENT_PATH,
  SAVE_AGENT_PATH,
  SAVE_TEAM_PATH,
  UPDATEEMPLOYEE_PATH,
  DELETEEMPLOYEE_PATH,
} from "../constant"; //done
import { URL, BASEURL } from "config/api/URL"; //done
import swal from "sweetalert";

export const DeleteAgent = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(DeleteEmployeeDetail.DeleteEmployee());

  let token = localStorage.getItem("auth");

  axios
    .post(`${BASEURL}${DELETEEMPLOYEE_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(DeleteEmployeeDetail.DeleteEmployeeSuccess(res.data.response));
        swal({
          title: "Successfully Remove",
          text: "Employee Remove successfully",
          icon: "success",
          type: "success",
        });
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(DeleteEmployeeDetail.DeleteEmployeeFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) =>
      dispatch(DeleteEmployeeDetail.DeleteEmployeeFailure(error))
    );
};

export const showUpdateEmployee =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(UpdateEmployeeDetail.UpdateEmployee());

    let token = localStorage.getItem("auth");

    axios
      .put(`${BASEURL}${UPDATEEMPLOYEE_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            UpdateEmployeeDetail.UpdateEmployeeSuccess(res.data.response)
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(
            UpdateEmployeeDetail.UpdateEmployeeFailure(res.data.message)
          );
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(UpdateEmployeeDetail.UpdateEmployeeFailure(error))
      );
  };

export const CheckAgent =
  (page, limit, user_role_name, TeamName, OnSuccess, OnFailure) =>
  (dispatch) => {
    dispatch(UserAgent.Agent());

    let token = localStorage.getItem("auth");

    axios
      .get(
        `${BASEURL}${AGENT_PATH}?page=${page}&limit=${limit}${
          user_role_name !== null && user_role_name !== ""
            ? `&user_role_name=${user_role_name}`
            : ""
        }${
          TeamName !== "" && TeamName !== null ? `&TeamName=${TeamName}` : ""
        }`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(UserAgent.AgentSuccess(res.data));

          dispatch(OnSuccess(res.data));
        } else {
          dispatch(UserAgent.AgentFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(UserAgent.AgentFailure(error)));
  };

export const SaveAgent = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(UserAgentData.SaveAgentData());

  let token = localStorage.getItem("auth");

  axios
    .post(`${BASEURL}${SAVE_AGENT_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(UserAgentData.SaveAgentSuccess(res.data.response));

        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(UserAgentData.SaveAgentFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch(function (error) {
      if (error.response) {
        OnFailure(error.response.data);
      }
    });
};

export const SaveTeam = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(TeamData.SaveTeamData());
  let token = localStorage.getItem("auth");

  axios
    .post(`${BASEURL}${SAVE_TEAM_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(TeamData.SaveTeamSuccess(res.data.response));

        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(TeamData.SaveTeamFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(TeamData.SaveTeamFailure(error)));
};
