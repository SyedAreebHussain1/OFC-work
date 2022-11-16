import axios from "axios";
import {PlotReturnDetails, PlotInfoDetails, UpdatePlotRetuenReqDetail } from "../action/index";
import {PLOTRETURN_PATH,PLOTINFO_PATH,UPDATEPLOTRETURNREQ_PATH} from "../constant";
import { BASEURL,URL } from "config/api/URL";
import swal from "sweetalert";


export const UpdatePlotReturnStatus= ( body,OnSuccess, OnFailure) => (dispatch) => {

  dispatch(UpdatePlotRetuenReqDetail.UpdatePlotRetuenReq());
  let token = localStorage.getItem("auth");
  axios
    .put(`${URL}${UPDATEPLOTRETURNREQ_PATH}`, body,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(UpdatePlotRetuenReqDetail.UpdatePlotRetuenReq_Success(res.data.response));
        swal( "Successful","Action has been completed Successfully","success")
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(UpdatePlotRetuenReqDetail.UpdatePlotRetuenReq_Failure(res.data.message));
        swal( "Unsuccessful","Something went wrong please contact to admin","warning")
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(UpdatePlotRetuenReqDetail.UpdatePlotRetuenReq_Failure(error)));
};




export const ShowAllPlotReturn= ( page,limit,OnSuccess, OnFailure) => (dispatch) => {

  dispatch(PlotReturnDetails.PlotReturn());
  let token = localStorage.getItem("auth");
  axios
    .get(`${URL}${PLOTRETURN_PATH}?page=${page}&limit=${limit}`, 
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotReturnDetails.PlotReturn_Success(res.data));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotReturnDetails.PlotReturn_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotReturnDetails.PlotReturn_Failure(error)));
};

export const ShowPlotInfo= ( body, OnSuccess, OnFailure) => (dispatch) => {

  dispatch(PlotInfoDetails.PlotInfo());
  let token = localStorage.getItem("auth");
  axios
    .post(`${URL}${PLOTINFO_PATH}`, body,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotInfoDetails.PlotInfo_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotInfoDetails.PlotInfo_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotInfoDetails.PlotInfo_Failure(error)));
};

