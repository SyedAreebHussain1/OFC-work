import axios from "axios";
import { AllProjectsGraphDetail, AllReportDetails } from "../action/index";
import { AllPROJECTSGRAPH_PATH, PROJECTREPORT_PATH } from "../constant";
// import { BASEURL } from "config/api/URL";
import { BASEURL, LOCALBASEURL } from "../../../../config/api/URL";

export const showAllProjectsGraph = (body, OnSuccess, OnFailure) => (dispatch) => {

  dispatch(AllProjectsGraphDetail.AllProjectsGraph());


  let token = localStorage.getItem("auth");

  axios
    .post(`${LOCALBASEURL}${AllPROJECTSGRAPH_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 

      },
    })
    .then((res) => {
 
      if (res.data.status === true) {
        dispatch(AllProjectsGraphDetail.AllProjectsGraph_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));

      } else {
        dispatch(AllProjectsGraphDetail.AllProjectsGraph_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
       
      }
    })
    .catch((error) => dispatch(AllProjectsGraphDetail.AllProjectsGraph_Failure(error)));
};

export const showReport = (body, OnSuccess, OnFailure) => (dispatch) => {

  dispatch(AllReportDetails.ProjectReport());


  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${PROJECTREPORT_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
  
      if (res.data.status === true) {
        dispatch(AllReportDetails.ProjectReport_Success(res.data.response));
      
        dispatch(OnSuccess(res.data.response));
      } else {
        dispatch(AllReportDetails.ProjectReport_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
       
      }
    })
    .catch((error) => dispatch(AllReportDetails.ProjectReport_Failure(error)));
};
