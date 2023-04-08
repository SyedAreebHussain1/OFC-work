import {

   PLOTNO,PLOTNO_SUCCESS,PLOTNO_FAILURE,
  } from "../constant.js";
  
  
  export class PlotNoDetail {
    static PlotNo() {
      return {
        type: PLOTNO,
      };
    }
    static PlotNo_Success(response) {
      return {
        type: PLOTNO_SUCCESS,
        payload: response,
      };
    }
    static PlotNo_Failure(error) {
      return {
        type: PLOTNO_FAILURE,
        error,
      };
    }
  }


  