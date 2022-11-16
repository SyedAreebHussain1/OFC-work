import axios from "axios";
import {
  AddRole,
  FetchRoles,
  FetchAppModules,
  FetchAssignModules,
  UpdateCreateAssignModules,
} from "../actions";
import {
  ADD_NEW_ROLE_PATH,
  FETCH_ROLES_PATH,
  FETCH_ALL_APP_MODULES_PATH,
  FETCH_ALL_ASSIGN_MODULES_PATH,
  UPDATE_CREATE_ASSIGN_MODULE_PATH,
} from "../constants";
import { BASEURL } from "config/api/URL";

export const addRoleMiddleware = (body, onSuccess, onFailure) => (dispatch) => {
  dispatch(AddRole.Add());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${ADD_NEW_ROLE_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(AddRole.AddRoleSuccess(res.data.response));
        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(AddRole.AddRoleFailure(res.data.message));
        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => {
      if (error.response) {
        onFailure(error.response.data.message);
      }
    });
};

export const fetchRolesMiddleware =
  (pageNumber, noOfRows, onSuccess, onFailure) => (dispatch) => {
    dispatch(FetchRoles.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${FETCH_ROLES_PATH}?page=${pageNumber}&limit=${noOfRows}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(FetchRoles.FetchSuccess(res.data));
          dispatch(onSuccess(res.data.message));
        } else {
          dispatch(FetchRoles.FetchFailure(res.data.message));
          dispatch(onFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(FetchRoles.FetchFailure(error)));
  };

export const fetchAppModulesMiddleware =
  (onSuccess, onFailure) => (dispatch) => {
    dispatch(FetchAppModules.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(`${BASEURL}${FETCH_ALL_APP_MODULES_PATH}?page=1&limit=500`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(FetchAppModules.FetchSuccess(res.data));
          dispatch(onSuccess(res.data.message));
        } else {
          dispatch(FetchAppModules.FetchFailure(res.data.message));
          dispatch(onFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(FetchAppModules.FetchFailure(error)));
  };

export const fetchAssignModulesMiddleware =
  (roleId, onSuccess, onFailure) => (dispatch) => {
    dispatch(FetchAssignModules.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(`${BASEURL}${FETCH_ALL_ASSIGN_MODULES_PATH}?roleId=${roleId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(FetchAssignModules.FetchSuccess(res.data.response));
          dispatch(onSuccess(res.data.message));
        } else {
          dispatch(FetchAssignModules.FetchFailure(res.data.message));
          dispatch(onFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(FetchAssignModules.FetchFailure(error)));
  };

export const updateCreateAssignModulesMiddleware =
  (body, onSuccess, onFailure) => (dispatch) => {
    dispatch(UpdateCreateAssignModules.Create());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${UPDATE_CREATE_ASSIGN_MODULE_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(UpdateCreateAssignModules.CreateSuccess(res.data.response));
          dispatch(onSuccess(res.data.message));
        } else {
          dispatch(UpdateCreateAssignModules.CreateFailure(res.data.message));
          dispatch(onFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(UpdateCreateAssignModules.CreateFailure(error))
      );
  };
