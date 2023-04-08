import axios from "axios";
import {
 
  UpdatePlotStatusDetails,
  SaleOrderDetails,
} from "../action";
import {
  
 
 
 
 
  
  UPDATE_PLOT_STATUS_PATH,
  SALE_ORDER_PATH,
} from "../constant";
import { BASEURL, URL } from "config/api/URL";








export const showUpdateStatus = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(UpdatePlotStatusDetails.UpdatePlotStatus());
  let token = localStorage.getItem("auth");
  axios
    .put(`${URL}${UPDATE_PLOT_STATUS_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(UpdatePlotStatusDetails.UpdatePlotStatus_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(UpdatePlotStatusDetails.UpdatePlotStatus_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(UpdatePlotStatusDetails.UpdatePlotStatus_Failure(error)));
};


export const showSaleOrder = (SaleOrderNo, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(SaleOrderDetails.SaleOrderStatus());
  let token = localStorage.getItem("auth");
  axios
    .get(`${URL}${SALE_ORDER_PATH}?page=1&limit=10&SaleOrderNo=${SaleOrderNo}`,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
     
      if (res.data.status === true) {
        dispatch(SaleOrderDetails.SaleOrderStatus_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(SaleOrderDetails.SaleOrderStatus_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(SaleOrderDetails.SaleOrderStatus_Failure(error)));
};






