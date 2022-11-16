import {
  AllPROJECTSGRAPH, AllPROJECTSGRAPH_FAILURE, AllPROJECTSGRAPH_SUCCESS,
  PROJECTREPORT, PROJECTREPORT_SUCCESS, PROJECTREPORT_FAILURE,  
} from "../constant";

export class AllProjectsGraphDetail {
  static AllProjectsGraph() {
    return {
      type: AllPROJECTSGRAPH,
    };
  }
  static AllProjectsGraph_Success(response) {
    return {
      type: AllPROJECTSGRAPH_SUCCESS,
      payload: response,
    };
  }
  static AllProjectsGraph_Failure(error) {
    return {
      type: AllPROJECTSGRAPH_FAILURE,
      error,
    };
  }
}
export class AllReportDetails {
  static ProjectReport() {
    return {
      type: PROJECTREPORT,
    };
  }
  static ProjectReport_Success(response) {
    return {
      type: PROJECTREPORT_SUCCESS,
      payload: response,
    };
  }
  static ProjectReport_Failure(error) {
    return {
      type: PROJECTREPORT_FAILURE,
      error,
    };
  }
}
