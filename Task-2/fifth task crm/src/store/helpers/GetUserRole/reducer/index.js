import {
    GET_USER_ROLE,
    GET_USER_ROLE_SUCCESS,
    GET_USER_ROLE_FAILURE,
  } from "../constant.js";
  const INITIAL_STATE = {
    Users: null,
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
  };
  
  export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return states;
      case GET_USER_ROLE:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          Users: null,
          error: {},
        };
      case GET_USER_ROLE_SUCCESS:
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          Users: action.payload,
        };
      case GET_USER_ROLE_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };
    }
  };
  