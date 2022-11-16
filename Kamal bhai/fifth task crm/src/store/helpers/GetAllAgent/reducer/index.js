import {
  GET_ALL_AGENT,
  GET_ALL_AGENT_SUCCESS,
  GET_ALL_AGENT_FAILURE,
} from "../constants.js";
const INITIAL_STATE = {
  Agents: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case GET_ALL_AGENT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Agents: null,
        error: {},
      };
    case GET_ALL_AGENT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Agents: action.payload,
      };
    case GET_ALL_AGENT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
