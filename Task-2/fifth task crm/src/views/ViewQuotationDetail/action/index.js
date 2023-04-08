import { 
    GET_ALL_QUOTATION,
    GET_ALL_QUOTATION_SUCCESS,
    GET_ALL_QUOTATION_FAILURE,

    QUOTATION_DETAILS,
    QUOTATION_DETAILS_SUCCESS,
    QUOTATION_DETAILS_FAILURE,

    UPDATE_DETAILS,
    UPDATE_DETAILS_SUCCESS,
    UPDATE_DETAILS_FAILURE
} from "../constant.js"

export class ViewQuotationDetail {
    static ViewQuotation() {
      return {
        type: GET_ALL_QUOTATION,
      };
    }
    static ViewQuotationSuccess(response) {
      return {
        type: GET_ALL_QUOTATION_SUCCESS,
        payload: response,
      };
    }
    static ViewQuotationFailure(error) {
      return {
        type: GET_ALL_QUOTATION_FAILURE,
        error,
      };
    }
  }

  export class ViewQuotationStatus {
    static ViewQuotationStatus() {
      return {
        type: QUOTATION_DETAILS,
      };
    }
    static ViewQuotationStatusSuccess(response) {
      return {
        type: QUOTATION_DETAILS_SUCCESS,
        payload: response,
      };
    }
    static ViewQuotationStatusFailure(error) {
      return {
        type: QUOTATION_DETAILS_FAILURE,
        error,
      };
    }
  }


  export class ViewUpdateStatus {
    static ViewUpdateStatus() {
      return {
        type: UPDATE_DETAILS,
      };
    }
    static ViewUpdateStatusSuccess(response) {
      return {
        type: UPDATE_DETAILS_SUCCESS,
        payload: response,
      };
    }
    static ViewUpdateStatusFailure(error) {
      return {
        type: UPDATE_DETAILS_FAILURE,
        error,
      };
    }
  }