import axios from "axios";
import { FetchUser, AddUser, AssignAgent, DownloadTemplate } from "../actions";
import {
  FETCH_CONTACTS_PATH,
  ADD_NEW_CONTACTS_PATH,
  ASSIGN_LEADS_PATH,
  DOWNLOAD_FILE_PATH,
} from "../constants";
import { BASEURL } from "config/api/URL";
import swal from "sweetalert";

export const DownloadAPI = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(DownloadTemplate.Download());
  let token = localStorage.getItem("auth");

  axios

    .get(`${BASEURL}${DOWNLOAD_FILE_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(DownloadTemplate.DownloadSuccess(res.data));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(DownloadTemplate.DownloadFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(DownloadTemplate.DownloadFailure(error)));
};

//new api with pagination by iqra
export const GetUser =
  (page, limit, sourceid, orderstatus, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(FetchUser.Fetch());
    let token = localStorage.getItem("auth");

    axios

      .get(
        `${BASEURL}${FETCH_CONTACTS_PATH}?page=${page}&limit=${limit}${
          sourceid !== null && sourceid !== "" && sourceid !== undefined
            ? `&sourceid=${sourceid}`
            : ""
        }${
          orderstatus !== null &&
          orderstatus !== "" &&
          orderstatus !== undefined
            ? `&orderstatus=${orderstatus}`
            : ""
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
          dispatch(FetchUser.FetchSuccess(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(FetchUser.FetchFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(FetchUser.FetchFailure(error)));
  };

//old Api without pagination comment by iqra
// export const GetUser = (body, OnSuccess, OnFailure) => (dispatch) => {
//   dispatch(FetchUser.Fetch());
//   let token = localStorage.getItem("auth");
//   axios
//     .post(`${BASEURL}${FETCH_CONTACTS_PATH}`, body, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       if (res.data.status === true) {
//         dispatch(FetchUser.FetchSuccess(res.data.response));
//         dispatch(OnSuccess(res.data.message));
//       } else {
//         dispatch(FetchUser.FetchFailure(res.data.message));
//         dispatch(OnFailure(res.data.message));
//       }
//     })
//     .catch((error) => dispatch(FetchUser.FetchFailure(error)));
// };

export const NewUser = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(AddUser.Add());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${ADD_NEW_CONTACTS_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(AddUser.AddSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(AddUser.AddFailure(res?.data?.message));
        dispatch(OnFailure(res?.data?.message));
      }
    })
    .catch((error) => {
      dispatch(AddUser.AddFailure(error));
      if (error?.response) {
        OnFailure(error?.response?.data?.message);
      }
    });
};

export const AssignLead =
  (handledby, leads, OnSuccess, OnFailure) => async (dispatch) => {
    let body;

    body = {
      handled_by: parseInt(handledby),
      Taskid: parseInt(leads.Taskid),
      LeadStageStatus: parseInt(leads.LeadStageStatus),
      // teamid: parseInt(leads.teamid),
    };
    let token = localStorage.getItem("auth");
    await axios
      .put(`${BASEURL}${ASSIGN_LEADS_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(AssignAgent.AssignSuccess(res.data.response));
          swal("Assigned!", "Lead Assigned Successfully", "success");

          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(AssignAgent.AssignFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(AssignAgent.AssignFailure(error)));
  };
