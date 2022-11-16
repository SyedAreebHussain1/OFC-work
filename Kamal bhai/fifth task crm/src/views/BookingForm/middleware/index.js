import axios from "axios";
import {  AgentDetail,FetchUser,FetchData,leaduserData,InsertNomineeDetail,ShowAllPositionDetail,
  PlotPositionDetail, FormDetail,IntegrateCRMDetail } from "../action/index";
import {  AGENT_PATH,FETCH_CONTACTS_PATH,ALL_LEAD_USER_PATH,INSERTNOMINEE_PATH,ALLPOSITION_PATH,
  PLOTPOSITION_PATH,
FORM_PATH,INTEGRATECRM_PATH } from "../constant";
import { BASEURL } from "config/api/URL";


export const  InsertIntegrateCRM = (body,OnSuccess, OnFailure) => (dispatch) => {
  dispatch(IntegrateCRMDetail.IntegrateCRM());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${INTEGRATECRM_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(IntegrateCRMDetail.IntegrateCRM_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(IntegrateCRMDetail.IntegrateCRM_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(IntegrateCRMDetail.IntegrateCRM_Failure(error)));
};

export const ShowAllForms = (body,OnSuccess, OnFailure) => (dispatch) => {

  dispatch(FormDetail.Form());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${FORM_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
     
      if (res.data.status === true) {
        dispatch(FormDetail.Form_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(FormDetail.Form_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FormDetail.Form_Failure(error)));
};





export const ShowPlotPositions = (body,OnSuccess, OnFailure) => (dispatch) => {

  dispatch(PlotPositionDetail.PlotPosition());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${PLOTPOSITION_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
     
      if (res.data.status === true) {
        dispatch(PlotPositionDetail.PlotPosition_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotPositionDetail.PlotPosition_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotPositionDetail.PlotPosition_Failure(error)));
};



export const ShowAllPositions = (OnSuccess, OnFailure) => (dispatch) => {

  dispatch(ShowAllPositionDetail.AllPosition());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${ALLPOSITION_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
 
      if (res.data.status === true) {
        dispatch(ShowAllPositionDetail.AllPosition_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(ShowAllPositionDetail.AllPosition_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(ShowAllPositionDetail.AllPosition_Failure(error)));
};







export const ShowNominee = (body, OnSuccess, OnFailure) => (dispatch) => {

  dispatch(InsertNomineeDetail.InsertNominee());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${INSERTNOMINEE_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {

      if (res.data.status === true) {
        dispatch(InsertNomineeDetail.InsertNominee_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(InsertNomineeDetail.InsertNominee_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(InsertNomineeDetail.InsertNominee_Failure(error)));
};




export const showAgent = (body,OnSuccess, OnFailure) => (dispatch) => {

  dispatch(AgentDetail.Agent());
  let token = localStorage.getItem("auth");
  axios
    .put(`${BASEURL}${AGENT_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
    
      if (res.data.status === true) {
        dispatch(AgentDetail.Agent_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
    
       
      } else {
        dispatch(AgentDetail.Agent_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(AgentDetail.Agent_Failure(error)));
};


export const GetUser = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(FetchUser.Fetch());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${FETCH_CONTACTS_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FetchUser.FetchSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(FetchUser.FetchFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FetchUser.FetchFailure(error)));
};

export const GetData = (body,OnSuccess, OnFailure) => (dispatch) => {

  dispatch(FetchData.FData());

  if(body !== null){

    FetchData.DataSuccess(body)
  } else{

   FetchData.DataFailure('Error')
  }
};

export const LeadId = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(leaduserData.leadData());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${ALL_LEAD_USER_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(leaduserData.leadDataSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(leaduserData.leadDataFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(leaduserData.leadDataFailure(error)));
};