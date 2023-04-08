import {
  RECORDING,
  RECORDING_SUCCESS,
  RECORDING_FAILURE,
} from "../constant.js";
const INITIAL_STATE = {
  Data: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case RECORDING:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Data: null,
        error: {},
      };
    case RECORDING_SUCCESS:

      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Data: action.payload,
      };
    case RECORDING_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
