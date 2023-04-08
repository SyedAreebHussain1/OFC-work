import {
    GET_NEW_REPORT,
    GET_NEW_REPORT_SUCESS,
    GET_NEW_REPORT_FALURE,
  } from "../constants";


export class GetDataAct {
    static Get() {
      return {
        type: GET_NEW_REPORT,
      };
    }
    static GetSuccess(response) {
      return {
        type: GET_NEW_REPORT_SUCESS,
        payload: response,
      };
    }
    static GetFailure(error) {
      return {
        type: GET_NEW_REPORT_FALURE,
        error,
      };
    }
  }
