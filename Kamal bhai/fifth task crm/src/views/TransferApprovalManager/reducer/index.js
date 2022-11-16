import {
  GET_PLOT_TRANSFER_REQ_MANAGER,
  GET_PLOT_TRANSFER_REQ_MANAGER_SUCCESS,
  GET_PLOT_TRANSFER_REQ_MANAGER_FAILURE,
  PLOT_TRANSFER_REQ_APPROVAL,
  PLOT_TRANSFER_REQ_APPROVAL_SUCCESS,
  PLOT_TRANSFER_REQ_APPROVAL_FAILURE,
} from "../constant";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  data: [],
  approval_res: null,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case GET_PLOT_TRANSFER_REQ_MANAGER:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        data: [],
        error: {},
      };
    case GET_PLOT_TRANSFER_REQ_MANAGER_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        data: action.payload,
      };
    case GET_PLOT_TRANSFER_REQ_MANAGER_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PLOT_TRANSFER_REQ_APPROVAL:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        approval_res: null,
        error: {},
      };
    case PLOT_TRANSFER_REQ_APPROVAL_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        approval_res: action.payload,
      };
    case PLOT_TRANSFER_REQ_APPROVAL_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
