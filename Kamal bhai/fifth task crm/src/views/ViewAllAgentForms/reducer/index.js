import {
  REALSTATEAGENTDETAIL,
  REALSTATEAGENTDETAIL_FAILURE,
  REALSTATEAGENTDETAIL_SUCCESS,
  BOOKINGFORMSTATUS_SUCCESS,
  BOOKINGFORMSTATUS_FAILURE,
  BOOKINGFORMSTATUS,
  UPGRADE_FORM_STATUS,
  UPGRADE_FORM_STATUS_SUCCESS,
  UPGRADE_FORM_STATUS_FAILURE,
  UPLOAD_CURRENCY,
  UPLOAD_CURRENCY_SUCCESS,
  UPLOAD_CURRENCY_FAILURE,
} from "../constant.js";

const INITIAL_STATE = {
  AgentDetail: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Status: null,
  Response: null,
  CurrencyResponse: null,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case BOOKINGFORMSTATUS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Status: null,
        error: {},
      };
    case BOOKINGFORMSTATUS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Status: action.payload,
      };
    case BOOKINGFORMSTATUS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case REALSTATEAGENTDETAIL:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        AgentDetail: null,
        error: {},
      };
    case REALSTATEAGENTDETAIL_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        AgentDetail: action.payload,
      };
    case REALSTATEAGENTDETAIL_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case UPGRADE_FORM_STATUS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case UPGRADE_FORM_STATUS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case UPGRADE_FORM_STATUS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case UPLOAD_CURRENCY:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        CurrencyResponse: null,
        error: {},
      };
    case UPLOAD_CURRENCY_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        CurrencyResponse: action.payload,
      };
    case UPLOAD_CURRENCY_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
