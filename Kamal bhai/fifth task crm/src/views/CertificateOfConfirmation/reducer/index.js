import {
  VERIFICATIONNO,
  VERIFICATIONNO_FAILURE,
  VERIFICATIONNO_SUCCESS,
  INSERT_VERIFICATION_DATA,
  INSERT_VERIFICATION_DATA_SUCCESS,
  INSERT_VERIFICATION_DATA_FAILURE,
} from "../constant.js";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Verification: null,
  VerificationData: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case INSERT_VERIFICATION_DATA:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        VerificationData: null,
        error: {},
      };
    case INSERT_VERIFICATION_DATA_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        VerificationData: action.payload,
      };
    case INSERT_VERIFICATION_DATA_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case VERIFICATIONNO:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Verification: null,
        error: {},
      };
    case VERIFICATIONNO_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Verification: action.payload,
      };
    case VERIFICATIONNO_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
