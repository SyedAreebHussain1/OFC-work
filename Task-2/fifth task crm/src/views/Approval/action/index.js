import { 
    APPROVAL,
    APPROVAL_SUCCESS,
    APPROVAL_FAILURE
}from "../constant"

export class ApprovalPlot {
    static Approval() {
      return {
        type: APPROVAL,
      };
    }
    static ApprovalSuccess(response) {
      return {
        type: APPROVAL_SUCCESS,
        payload: response,
      };
    }
    static ApprovalFailure(error) {
      return {
        type: APPROVAL_FAILURE,
        error,
      };
    }
  }