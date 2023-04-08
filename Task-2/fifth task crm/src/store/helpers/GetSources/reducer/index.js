import {
  GET_ALL_SOURCES,
  GET_ALL_SOURCES_SUCCESS,
  GET_ALL_SOURCES_FAILURE,
} from "../constants.js";
const INITIAL_STATE = {
  Sources: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case GET_ALL_SOURCES:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Sources: null,
        error: {},
      };
    case GET_ALL_SOURCES_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Sources: action.payload,
      };
    case GET_ALL_SOURCES_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
