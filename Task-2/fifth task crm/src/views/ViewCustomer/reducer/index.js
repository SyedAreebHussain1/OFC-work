import {
  LEAD,
  LEAD_SUCCESS,
  LEAD_FAILURE,
  AGENT,
  AGENT_FAILURE,
  AGENT_SUCCESS,
} from "../constant";
const INITIAL_STATE = {
  Users: null,
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
    case LEAD:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Users: null,
        error: {},
      };
    case LEAD_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Users: action.payload,
      };
    case LEAD_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case AGENT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case AGENT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case AGENT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
