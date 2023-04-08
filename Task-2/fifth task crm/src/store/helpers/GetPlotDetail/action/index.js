import {
  
  PLOT_DETAILS,PLOT_DETAILS_SUCCESS,PLOT_DETAILS_FAILURE,
  
  } from "../constant.js";
 
  
  
  
  
  

  export class PlotDetails {
    static Plot_Details() {
      return {
        type: PLOT_DETAILS,
      };
    }
    static Plot_Details_Success(response) {
      return {
        type: PLOT_DETAILS_SUCCESS,
        payload: response,
      };
    }
    static Plot_Details_Failure(error) {
      return {
        type:PLOT_DETAILS_FAILURE,
        error,
      };
    }
  }



 