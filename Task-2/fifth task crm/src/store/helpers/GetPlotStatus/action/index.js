import {
  
  PLOTSTATUS,PLOTSTATUS_FAILURE,PLOTSTATUS_SUCCESS,
   PLOTINFO,PLOTINFO_FAILURE,PLOTINFO_SUCCESS,

  } from "../constant.js";
 
  
  export class PlotStatusDetail {
    static PlotStatus() {
      return {
        type: PLOTSTATUS,
      };
    }
    static PlotStatus_Success(response) {
      return {
        type: PLOTSTATUS_SUCCESS,
        payload: response,
      };
    }
    static PlotStatus_Failure(error) {
      return {
        type: PLOTSTATUS_FAILURE,
        error,
      };
    }
    
   
  }
  export class PlotInfoDetail {
    static PlotInfo() {
      return {
        type: PLOTINFO,
      };
    }
    static PlotInfo_Success(response) {
      return {
        type: PLOTINFO_SUCCESS,
        payload: response,
      };
    }
    static PlotInfo_Failure(error) {
      return {
        type: PLOTINFO_FAILURE,
        error,
      };
    }
    
   
  }
 