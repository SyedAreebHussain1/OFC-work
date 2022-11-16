import {
  GET_PLOT_CANCEL_REQUEST_MANAGER,
  GET_PLOT_CANCEL_REQUEST_MANAGER_SUCCESS,
  GET_PLOT_CANCEL_REQUEST_MANAGER_FAILURE,
  GET_PLOT_CANCEL_REQUEST_MANAGER_PATH,
  GET_PLOT_CANCEL_REQUEST_MANAGER_ID,
  GET_PLOT_CANCEL_REQUEST_MANAGER_ID_SUCCESS,
  GET_PLOT_CANCEL_REQUEST_MANAGER_ID_FAILURE,
  GET_PLOT_CANCEL_REQUEST_MANAGER_ID_PATH,
  PLOT_CANCEL_REQ_APPROVAL,
  PLOT_CANCEL_REQ_APPROVAL_SUCCESS,
  PLOT_CANCEL_REQ_APPROVAL_FAILURE,
} from "../constant";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  data: [],
  cancelReqById: null,
  approval_res: null,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case GET_PLOT_CANCEL_REQUEST_MANAGER:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        data: [],
        error: {},
      };
    case GET_PLOT_CANCEL_REQUEST_MANAGER_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        data: action.payload,
      };
    case GET_PLOT_CANCEL_REQUEST_MANAGER_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case GET_PLOT_CANCEL_REQUEST_MANAGER_ID:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        cancelReqById: null,
        error: {},
      };
    case GET_PLOT_CANCEL_REQUEST_MANAGER_ID_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        cancelReqById: action.payload,
      };
    case GET_PLOT_CANCEL_REQUEST_MANAGER_ID_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PLOT_CANCEL_REQ_APPROVAL:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        approval_res: null,
        error: {},
      };
    case PLOT_CANCEL_REQ_APPROVAL_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        approval_res: action.payload,
      };
    case PLOT_CANCEL_REQ_APPROVAL_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
