import {

 
   PLOTTYPE,PLOTTYPE_FAILURE,PLOTTYPE_SUCCESS,
   PLOTSIZE,PLOTSIZE_SUCCESS,PLOTSIZE_FAILURE,
  } from "../constant.js";
  
  
  export class PlotTypeDetail {
    static PlotType() {
      return {
        type: PLOTTYPE,
      };
    }
    static PlotType_Success(response) {
      return {
        type: PLOTTYPE_SUCCESS,
        payload: response,
      };
    }
    static PlotType_Failure(error) {
      return {
        type: PLOTTYPE_FAILURE,
        error,
      };
    }
  }

  export class PlotSizeDetail {
    static PlotSize() {
      return {
        type: PLOTSIZE,
      };
    }
    static PlotSize_Success(response) {
      return {
        type: PLOTSIZE_SUCCESS,
        payload: response,
      };
    }
    static PlotSize_Failure(error) {
      return {
        type: PLOTSIZE_FAILURE,
        error,
      };
    }
    
   
  }

  