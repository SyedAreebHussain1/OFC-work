import {
  PLOT_POSITION,
  PLOT_POSITION_SUCCESS,
  PLOT_POSITION_FAILURE,
  ADD_PLOT,
  ADD_PLOT_SUCCESS,
  ADD_PLOT_FAILURE,
  DELETE_PLOT,
  DELETE_PLOT_SUCCESS,
  DELETE_PLOT_FAILURE,
  PLOT_DETAILS,
  PLOT_DETAILS_SUCCESS,
  PLOT_DETAILS_FAILURE,
} from "../constant.js";
const INITIAL_STATE = {
  Users: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  DetailS: null,
  Position: null,
  Add: null,
  Delete: null,
  Updatestatus: null,
  Order: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case PLOT_POSITION:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Position: null,
        error: {},
      };
    case PLOT_POSITION_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Position: action.payload,
      };
    case PLOT_POSITION_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case ADD_PLOT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Add: null,
        error: {},
      };
    case ADD_PLOT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Add: action.payload,
      };
    case ADD_PLOT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case DELETE_PLOT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Delete: null,
        error: {},
      };
    case DELETE_PLOT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Delete: action.payload,
      };
    case DELETE_PLOT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case PLOT_DETAILS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Details: null,
        error: {},
      };
    case PLOT_DETAILS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Details: action.payload,
      };
    case PLOT_DETAILS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
