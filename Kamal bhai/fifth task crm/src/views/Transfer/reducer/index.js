import {
  USER,
  USER_FAILURE,
  USER_SUCCESS,
  PLOTTRANSFER,
  PLOTTRANSFER_FAILURE,
  PLOTTRANSFER_SUCCESS,
  GET_PAYMENT_DETAILS,
  GET_PAYMENT_DETAILS_FAILURE,
  GET_PAYMENT_DETAILS_SUCCESS,
} from "../constant";
const INITIAL_STATE = {
  Users: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  TransferReq: null,
  PaymentDetails: null,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case USER:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Users: null,
        error: {},
      };
    case USER_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Users: action.payload,
      };
    case USER_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PLOTTRANSFER:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        TransferReq: null,
        error: {},
      };
    case PLOTTRANSFER_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        TransferReq: action.payload,
      };
    case PLOTTRANSFER_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case GET_PAYMENT_DETAILS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PaymentDetails: null,
        error: {},
      };
    case GET_PAYMENT_DETAILS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PaymentDetails: action.payload,
      };
    case GET_PAYMENT_DETAILS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
