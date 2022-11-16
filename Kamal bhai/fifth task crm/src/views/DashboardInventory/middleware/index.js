import axios from "axios";


import { ProjectsDetail } from "../action/index";
import { PROJECTS_PATH } from "../constant";
import { BASEURL } from "config/api/URL";

export const showProject = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(ProjectsDetail.Projects());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${PROJECTS_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
      },
    })
    .then((res) => {

      if (res.data.status === true) {
        dispatch(ProjectsDetail.Projects_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(ProjectsDetail.Projects_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(ProjectsDetail.Projects_Failure(error)));
};