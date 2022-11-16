
import axios from "axios";
import { ProjectDetail } from "../action/index";
import { PROJECT_PATH } from "../constant";
// import { BASEURL } from "config/api/URL";
import { BASEURL, LOCALBASEURL } from "../../../../config/api/URL";

export const showProjectsGraph = (OnSuccess, OnFailure) => (dispatch) => {

  dispatch(ProjectDetail.Project());

  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${PROJECT_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
      },
    })
    .then((res) => {
  
      if (res.data.status === true) {
        dispatch(ProjectDetail.Project_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
        
      } else {
        dispatch(ProjectDetail.Project_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
        
      }
    })
    .catch((error) => dispatch(ProjectDetail.Project_Failure(error)));
};