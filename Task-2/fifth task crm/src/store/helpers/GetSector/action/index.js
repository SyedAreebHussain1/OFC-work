import {
  
  PLOTSECTOR,PLOTSECTOR_SUCCESS,PLOTSECTOR_FAILURE,
   
  } from "../constant.js";
  
  export class PlotSectorDetail {
    static PlotSector() {
      return {
        type: PLOTSECTOR,
      };
    }
    static PlotSector_Success(response) {
      return {
        type: PLOTSECTOR_SUCCESS,
        payload: response,
      };
    }
    static PlotSector_Failure(error) {
      return {
        type: PLOTSECTOR_FAILURE,
        error,
      };
    }
  }
 