import { PLOTRETURN,PLOTRETURN_SUCCESS,PLOTRETURN_FAILURE,
  PLOTINFO_SUCCESS,PLOTINFO_FAILURE,PLOTINFO,
  UPDATEPLOTRETURNREQ_SUCCESS,UPDATEPLOTRETURNREQ,UPDATEPLOTRETURNREQ_FAILURE
} from "../constant.js";
  

export class UpdatePlotRetuenReqDetail {
  static UpdatePlotRetuenReq() {
    return {
      type: UPDATEPLOTRETURNREQ,
    };
  }
  static UpdatePlotRetuenReq_Success(response) {
    return {
      type: UPDATEPLOTRETURNREQ_SUCCESS,
      payload: response,
    };
  }
  static UpdatePlotRetuenReq_Failure(error) {
    return {
      type: UPDATEPLOTRETURNREQ_FAILURE,
      error,
    };
  }
 
}
  export class PlotReturnDetails {
    static PlotReturn() {
      return {
        type: PLOTRETURN,
      };
    }
    static PlotReturn_Success(response) {
      return {
        type: PLOTRETURN_SUCCESS,
        payload: response,
      };
    }
    static PlotReturn_Failure(error) {
      return {
        type: PLOTRETURN_FAILURE,
        error,
      };
    }
   
  }
  export class PlotInfoDetails {
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