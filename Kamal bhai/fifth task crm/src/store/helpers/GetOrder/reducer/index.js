import {
  ORDER_STATUS,
  ORDER_STATUS_SUCCESS,
  ORDER_STATUS_FAILURE,
} from "../constant.js";

const INITIAL_STATE = {
  // ORDER STATUS MUSTAFA
  OrderReport: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    // SHOW LEADS USMAN

    // ORDER STATUS MUSTAFA

    case ORDER_STATUS:
    
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        OrderReport: null,
        error: {},
      };
    case ORDER_STATUS_SUCCESS:

      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        OrderReport: action.payload,
      };
    case ORDER_STATUS_FAILURE:

      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
