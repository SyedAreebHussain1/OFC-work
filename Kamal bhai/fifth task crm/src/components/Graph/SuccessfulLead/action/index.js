import { SuccessfullLead,SuccessfullLead_SUCCESS,SuccessfullLead_FAILURE } from "../constant";

export class AllSuccessfullLead {
    static SuccessfullLeadGraph() {
      return {
        type: SuccessfullLead,
      };
    }
    static SuccessfullLeadGraph_Success(response) {
      return {
        type: SuccessfullLead_SUCCESS,
        payload: response,
      };
    }
    static SuccessfullLeadGraph_Failure(error) {
      return {
        type: SuccessfullLead_FAILURE,
        error,
      };
    }
  }
