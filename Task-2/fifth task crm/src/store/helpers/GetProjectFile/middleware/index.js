import axios from "axios";
import { ProjectFileDetail } from "../action";
import { PROJECTFILE_PATH } from "../constant";
import { BASEURL, URL } from "config/api/URL";

export const showProjectFile = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(ProjectFileDetail.ProjectFile());
  let token = localStorage.getItem("auth");
  axios
    .post(`${URL}${PROJECTFILE_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(ProjectFileDetail.ProjectFile_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(ProjectFileDetail.ProjectFile_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(ProjectFileDetail.ProjectFile_Failure(error)));
};
