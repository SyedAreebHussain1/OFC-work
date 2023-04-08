import {
  FETCH_AGENT_DETAILS,
  FETCH_AGENT_DETAILS_SUCCESS,
  FETCH_AGENT_DETAILS_FAILURE,
  FETCH_ALL_VERIFIED_CUSTOMER,
  FETCH_ALL_VERIFIED_CUSTOMER_SUCCESS,
  FETCH_ALL_VERIFIED_CUSTOMER_FAILURE,
  UPGRADE_CUSTOMER,
  UPGRADE_CUSTOMER_SUCCESS,
  UPGRADE_CUSTOMER_FAILURE,
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

export class UpgradeCustomer {
  static Upgrade() {
    return {
      type: UPGRADE_CUSTOMER,
    };
  }
  static UpgradeSuccess(response) {
    return {
      type: UPGRADE_CUSTOMER_SUCCESS,
      payload: response,
    };
  }
  static UpgradeFailure(error) {
    return {
      type: UPGRADE_CUSTOMER_FAILURE,
      error,
    };
  }
}
