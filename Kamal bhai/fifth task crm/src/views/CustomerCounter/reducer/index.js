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

const INITIAL_STATE = {
  Reports: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Response: null,
  AssignResponse: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case FETCH_AGENT_DETAILS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        AgentDetails: null,
        error: {},
      };
    case FETCH_AGENT_DETAILS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        AgentDetails: action.payload,
      };
    case FETCH_AGENT_DETAILS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case FETCH_ALL_VERIFIED_CUSTOMER:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        verifiedCustomers: null,
        error: {},
      };
    case FETCH_ALL_VERIFIED_CUSTOMER_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        verifiedCustomers: action.payload,
      };
    case FETCH_ALL_VERIFIED_CUSTOMER_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case UPGRADE_CUSTOMER:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case UPGRADE_CUSTOMER_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case UPGRADE_CUSTOMER_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
