import {
  GET_PAYMENT_BANK,
  GET_PAYMENT_BANK_SUCCESS,
  GET_PAYMENT_BANK_FAILURE,
  APPROVE_PAYMENT_BANK,
  APPROVE_PAYMENT_BANK_SUCCESS,
  APPROVE_PAYMENT_BANK_FAILURE,
  APPROVE_PAYMENT_BANK_PATH,
} from "../constant";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  getPaymentBank: [],
  apprveMsg: "",
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case GET_PAYMENT_BANK:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        getPaymentBank: [],
        error: {},
      };
    case GET_PAYMENT_BANK_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        getPaymentBank: action.payload,
      };
    case GET_PAYMENT_BANK_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case APPROVE_PAYMENT_BANK:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        apprveMsg: "",
        error: {},
      };
    case APPROVE_PAYMENT_BANK_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        apprveMsg: action.payload,
      };
    case APPROVE_PAYMENT_BANK_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
