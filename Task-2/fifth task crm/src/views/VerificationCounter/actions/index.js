import {
  FETCH_AGENT_DETAILS,
  FETCH_AGENT_DETAILS_SUCCESS,
  FETCH_AGENT_DETAILS_FAILURE,
  FETCH_ALL_VERIFIED_CUSTOMER,
  FETCH_ALL_VERIFIED_CUSTOMER_SUCCESS,
  FETCH_ALL_VERIFIED_CUSTOMER_FAILURE,
 VERIFICATION_FORM,
 VERIFICATION_FORM_SUCCESS,
 VERIFICATION_FORM_FAILURE,
} from "../constants";

export class FetchAgentDetails {
  static Fetch() {
    return {
      type: FETCH_AGENT_DETAILS,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FETCH_AGENT_DETAILS_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FETCH_AGENT_DETAILS_FAILURE,
      error,
    };
  }
}

export class FetchAllVerifedCustomer {
  static Fetch() {
    return {
      type: FETCH_ALL_VERIFIED_CUSTOMER,
    };
  }
  static FetchSuccess(response) {
    return {
      type: FETCH_ALL_VERIFIED_CUSTOMER_SUCCESS,
      payload: response,
    };
  }
  static FetchFailure(error) {
    return {
      type: FETCH_ALL_VERIFIED_CUSTOMER_FAILURE,
      error,
    };
  }
}

export class VerificationForm {
  static Verification() {
    return {
      type:VERIFICATION_FORM,
    };
  }
  static VerificationSuccess(response) {
    return {
      type:VERIFICATION_FORM_SUCCESS,
      payload: response,
    };
  }
  static VerificationFailure(error) {
    return {
      type:VERIFICATION_FORM_FAILURE,
      error,
    };
  }
}
