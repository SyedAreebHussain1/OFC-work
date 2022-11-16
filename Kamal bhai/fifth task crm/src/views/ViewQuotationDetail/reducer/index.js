import {
  GET_ALL_QUOTATION,
  GET_ALL_QUOTATION_SUCCESS,
  GET_ALL_QUOTATION_FAILURE,
  QUOTATION_DETAILS,
  QUOTATION_DETAILS_SUCCESS,
  QUOTATION_DETAILS_FAILURE,
  UPDATE_DETAILS,
  UPDATE_DETAILS_SUCCESS,
  UPDATE_DETAILS_FAILURE,
} from "../constant.js";

const INITIAL_STATE = {
  GetsQuotation: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  PlotUpdate: null,
  GetsQuotationStatus: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case GET_ALL_QUOTATION:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        GetsQuotation: null,
        error: {},
      };
    case GET_ALL_QUOTATION_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        GetsQuotation: action.payload,
      };
    case GET_ALL_QUOTATION_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case QUOTATION_DETAILS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        GetsQuotationStatus: null,
        error: {},
      };
    case QUOTATION_DETAILS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        GetsQuotationStatus: action.payload,
      };
    case QUOTATION_DETAILS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case UPDATE_DETAILS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PlotUpdate: null,
        error: {},
      };
    case UPDATE_DETAILS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PlotUpdate: action.payload,
      };
    case UPDATE_DETAILS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
