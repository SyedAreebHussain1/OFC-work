import {
  
  
  UPDATE_PLOT_STATUS,UPDATE_PLOT_STATUS_SUCCESS,UPDATE_PLOT_STATUS_FAILURE,
   SALE_ORDER,SALE_ORDER_SUCCESS,SALE_ORDER_FAILURE,
  } from "../constant.js";
  
  
  
  


  export class UpdatePlotStatusDetails {
    static UpdatePlotStatus() {
      return {
        type: UPDATE_PLOT_STATUS,
      };
    }
    static UpdatePlotStatus_Success(response) {
      return {
        type: UPDATE_PLOT_STATUS_SUCCESS,
        payload: response,
      };
    }
    static UpdatePlotStatus_Failure(error) {
      return {
        type:UPDATE_PLOT_STATUS_FAILURE,
        error,
      };
    }
  }


  export class SaleOrderDetails {
    static SaleOrderStatus() {
      return {
        type: SALE_ORDER,
      };
    }
    static SaleOrderStatus_Success(response) {
      return {
        type:SALE_ORDER_SUCCESS,
        payload: response,
      };
    }
    static SaleOrderStatus_Failure(error) {
      return {
        type:SALE_ORDER_FAILURE,
        error,
      };
    }
  }






 