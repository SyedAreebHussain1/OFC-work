import {
  CREATE_BOOKING_RECEIPT,
  CREATE_BOOKING_RECEIPT_SUCCESS,
  CREATE_BOOKING_RECEIPT_FAILURE,
  GET_BOOKING_RECEIPT,
  GET_BOOKING_RECEIPT_SUCCESS,
  GET_BOOKING_RECEIPT_FAILURE,
} from "../constants";

const INITIAL_STATE = {
  Reports: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Response: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case CREATE_BOOKING_RECEIPT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case CREATE_BOOKING_RECEIPT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case CREATE_BOOKING_RECEIPT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case GET_BOOKING_RECEIPT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        BookingReceipts: null,
        error: {},
      };
    case GET_BOOKING_RECEIPT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        BookingReceipts: action.payload,
      };
    case GET_BOOKING_RECEIPT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
