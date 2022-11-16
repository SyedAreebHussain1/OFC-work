import {
  ADD_NEW_ROLE,
  ADD_NEW_ROLE_SUCCESS,
  ADD_NEW_ROLE_FAILURE,
  FETCH_ROLES,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
  FETCH_ALL_APP_MODULES,
  FETCH_ALL_APP_MODULES_SUCCESS,
  FETCH_ALL_APP_MODULES_FAILURE,
  FETCH_ALL_ASSIGN_MODULES,
  FETCH_ALL_ASSIGN_MODULES_SUCCESS,
  FETCH_ALL_ASSIGN_MODULES_FAILURE,
  UPDATE_CREATE_ASSIGN_MODULE,
  UPDATE_CREATE_ASSIGN_MODULE_SUCCESS,
  UPDATE_CREATE_ASSIGN_MODULE_FAILURE,
} from "../constants.js";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  addResponse: null,
  rolesFetched: null,
  appModules: null,
  assignModules: null,
  updateCreateRes: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case UPDATE_CREATE_ASSIGN_MODULE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        updateCreateRes: null,
        error: {},
      };
    case UPDATE_CREATE_ASSIGN_MODULE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        updateCreateRes: action.payload,
      };
    case UPDATE_CREATE_ASSIGN_MODULE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case FETCH_ROLES:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        rolesFetched: null,
        error: {},
      };
    case FETCH_ROLES_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        rolesFetched: action.payload,
      };
    case FETCH_ROLES_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case FETCH_ALL_ASSIGN_MODULES:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        assignModules: null,
        error: {},
      };
    case FETCH_ALL_ASSIGN_MODULES_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        assignModules: action.payload,
      };
    case FETCH_ALL_ASSIGN_MODULES_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case FETCH_ALL_APP_MODULES:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        appModules: null,
        error: {},
      };
    case FETCH_ALL_APP_MODULES_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        appModules: action.payload,
      };
    case FETCH_ALL_APP_MODULES_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case ADD_NEW_ROLE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        addResponse: null,
        error: {},
      };
    case ADD_NEW_ROLE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        addResponse: action.payload,
      };
    case ADD_NEW_ROLE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
