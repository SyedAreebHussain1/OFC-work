import {
  GET_TEAM,
  GET_TEAM_SUCCESS,
  GET_TEAM_FAILURE,
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
    case GET_TEAM:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Agents: null,
        error: {},
      };
    case GET_TEAM_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Agents: action.payload,
      };
    case GET_TEAM_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
