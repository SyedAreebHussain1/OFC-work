import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  TRANSACTION_HISTORY,
  TRANSACTION_HISTORY_SUCCESS,
  TRANSACTION_HISTORY_FAILURE
} from "../constant";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  GetUserInfo: [],
  TransactionHistory: [],
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case GET_USER_INFO:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        GetUserInfo: [],
        error: {},
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        GetUserInfo: action.payload,
      };
    case GET_USER_INFO_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case TRANSACTION_HISTORY:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        TransactionHistory: [],
        error: {},
      };
    case TRANSACTION_HISTORY_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        TransactionHistory: action.payload,
      };
    case TRANSACTION_HISTORY_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
