import {
  REALSTATEAGENT, REALSTATEAGENT_FAILURE, REALSTATEAGENT_SUCCESS, NOTES_STATUS, NOTES_STATUS_SUCCESS, NOTES_STATUS_FAILURE
} from "../constant.js";

const INITIAL_STATE = {
  Agent: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  status: null
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case REALSTATEAGENT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Agent: null,
        error: {},
      };
    case REALSTATEAGENT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Agent: action.payload,
      };
    case REALSTATEAGENT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case NOTES_STATUS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        status: null,
        error: {},
      };
    case NOTES_STATUS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        status: action.payload,
      };
    case NOTES_STATUS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
