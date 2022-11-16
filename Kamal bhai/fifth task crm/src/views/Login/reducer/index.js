import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  NAV_MENU,
  NAV_MENU_SUCCESS,
  NAV_MENU_FAILURE,
} from "../constant.js";

const INITIAL_STATE = {
  Data: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  navMenuList: localStorage.hasOwnProperty("assignModules")
    ? JSON.parse(localStorage.getItem("assignModules"))
    : null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case LOGIN:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Data: null,
        error: {},
      };
    case LOGIN_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Data: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case NAV_MENU:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        navMenuList: null,
        error: {},
      };
    case NAV_MENU_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        navMenuList: action.payload,
      };
    case NAV_MENU_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
