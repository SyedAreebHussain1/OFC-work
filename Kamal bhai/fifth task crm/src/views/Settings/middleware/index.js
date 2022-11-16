import axios from "axios";
import {
  GetPaymentSchedule,
  AddSchedule,
  UpdateSchedule,
  GetProjects,
  AddProject,
  UpdateProject,
  GetSectors,
  AddSector,
  UpdateSector,
  GetStreets,
  AddStreet,
  UpdateStreet,
} from "../action/index";
import {
  GET_PAYMENT_SCHEDULE_PATH,
  ADD_PAYMENT_SCHEDULE_PATH,
  UPDATE_SCHEDULE_PATH,
  GET_PROJECT_PATH,
  ADD_PROJECT_PATH,
  UPDATE_PROJECT_PATH,
  GET_STREETS_PATH,
  GET_SECTORS_PATH,
  ADD_SECTORS_PATH,
  UPDATE_SECTORS_PATH,
  ADD_STREETS_PATH,
  UPDATE_STREETS_PATH,
} from "../constant";
import { BASEURL } from "config/api/URL";

export const getPaymentScheduleMiddleware =
  (noOfRows, pageNumber, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(GetPaymentSchedule.Fetch());

    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_PAYMENT_SCHEDULE_PATH}?limit=${noOfRows}&page=${pageNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // console.log("SCHEDULTE GET DATA", res.data);
        if (res.data.status === true) {
          dispatch(GetPaymentSchedule.Fetch_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetPaymentSchedule.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetPaymentSchedule.Fetch_Failure(error)));
  };

export const AddSchedule_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    // console.log("BODY", body);
    dispatch(AddSchedule.Add());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${ADD_PAYMENT_SCHEDULE_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("ADDED", res.data);
        if (res.data.status === true) {
          // console.log(" IF BLOCK STATUS", res.data.status);
          dispatch(AddSchedule.Add_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          // console.log("ELSE BLOCK STATUS", res.data.status);
          dispatch(AddSchedule.Add_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(AddSchedule.Add_Failure(error)));
  };

export const UpdateSchedule_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(UpdateSchedule.Update());
    let token = localStorage.getItem("auth");
    axios
      .put(`${BASEURL}${UPDATE_SCHEDULE_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("Update response before if block", res.data);
        if (res.data.status === true) {
          // console.log(" IF BLOCK STATUS", res.data.status);
          dispatch(UpdateSchedule.Update_Success(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          // console.log("ELSE BLOCK STATUS", res.data);
          dispatch(UpdateSchedule.Update_Failure(res.data));
          dispatch(OnFailure(res.data));
        }
      })
      .catch((error) => {
        // console.log("ERORROR", error);
        dispatch(UpdateSchedule.Update_Failure(error));
      });
  };

// Projects

export const getProject_Middleware =
  (noOfRows, pageNumber, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(GetProjects.Fetch());

    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_PROJECT_PATH}?limit=${noOfRows}&page=${pageNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // console.log("PROJECTS DATA", res.data);
        if (res.data.status === true) {
          dispatch(GetProjects.Fetch_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetProjects.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetProjects.Fetch_Failure(error)));
  };

export const addProject_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    // console.log("BODY", body);
    dispatch(AddProject.Add());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${ADD_PROJECT_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("ADDED", res.data);
        if (res.data.status === true) {
          // console.log(" IF BLOCK STATUS", res.data.status);
          dispatch(AddProject.Add_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          // console.log("ELSE BLOCK STATUS", res.data.status);
          dispatch(AddProject.Add_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(AddProject.Add_Failure(error)));
  };

export const updateProject_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    // console.log("BODY", body);
    dispatch(UpdateProject.Update());
    let token = localStorage.getItem("auth");
    axios
      .put(`${BASEURL}${UPDATE_PROJECT_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("ADDED", res.data);
        if (res.data.status === true) {
          // console.log(" IF BLOCK STATUS", res.data.status);
          dispatch(UpdateProject.Update_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          // console.log("ELSE BLOCK STATUS", res.data.status);
          dispatch(UpdateProject.Update_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(UpdateProject.Update_Failure(error)));
  };

// Sectors

export const getSector_Middleware =
  (noOfRows, pageNumber, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(GetSectors.Fetch());

    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_SECTORS_PATH}?limit=${noOfRows}&page=${pageNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // console.log("PROJECTS DATA", res.data);
        if (res.data.status === true) {
          dispatch(GetSectors.Fetch_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetSectors.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetSectors.Fetch_Failure(error)));
  };

export const addSector_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    // console.log("BODY", body);
    dispatch(AddSector.Add());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${ADD_SECTORS_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("ADDED", res.data);
        if (res.data.status === true) {
          // console.log(" IF BLOCK STATUS", res.data.status);
          dispatch(AddSector.Add_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          // console.log("ELSE BLOCK STATUS", res.data.status);
          dispatch(AddSector.Add_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(AddSector.Add_Failure(error)));
  };

export const updateSector_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    // console.log("BODY", body);
    dispatch(UpdateSector.Update());
    let token = localStorage.getItem("auth");
    axios
      .put(`${BASEURL}${UPDATE_SECTORS_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("ADDED", res.data);
        if (res.data.status === true) {
          // console.log(" IF BLOCK STATUS", res.data.status);
          dispatch(UpdateSector.Update_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          // console.log("ELSE BLOCK STATUS", res.data.status);
          dispatch(UpdateSector.Update_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(UpdateSector.Update_Failure(error)));
  };

// Streets

export const getStreets_Middleware =
  (noOfRows, pageNumber, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(GetStreets.Fetch());

    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_STREETS_PATH}?limit=${noOfRows}&page=${pageNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // console.log("PROJECTS DATA", res.data);
        if (res.data.status === true) {
          dispatch(GetStreets.Fetch_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetStreets.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetStreets.Fetch_Failure(error)));
  };

export const addStreet_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    // console.log("BODY", body);
    dispatch(AddStreet.Add());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${ADD_STREETS_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("ADDED", res.data);
        if (res.data.status === true) {
          // console.log(" IF BLOCK STATUS", res.data.status);
          dispatch(AddStreet.Add_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          // console.log("ELSE BLOCK STATUS", res.data.status);
          dispatch(AddStreet.Add_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(AddStreet.Add_Failure(error)));
  };

export const updateStreet_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(UpdateStreet.Update());
    let token = localStorage.getItem("auth");
    axios
      .put(`${BASEURL}${UPDATE_STREETS_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          // console.log(" IF BLOCK STATUS", res.data.status);
          dispatch(UpdateStreet.Update_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          // console.log("ELSE BLOCK STATUS", res.data.status);
          dispatch(UpdateStreet.Update_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(UpdateStreet.Update_Failure(error)));
  };
