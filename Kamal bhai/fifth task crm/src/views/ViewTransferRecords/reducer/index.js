import {
  GET_PLOT_TRANSFER_REQ,
  GET_PLOT_TRANSFER_REQ_SUCCESS,
  GET_PLOT_TRANSFER_REQ_FAILURE,
  GET_PLOT_TRANSFER_REQ_BY_ID,
  GET_PLOT_TRANSFER_REQ_BY_ID_SUCCESS,
  GET_PLOT_TRANSFER_REQ_BY_ID_FAILURE,
} from "../constant";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  data: [],
  transReqById: null,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case GET_PLOT_TRANSFER_REQ:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        data: [],
        error: {},
      };
    case GET_PLOT_TRANSFER_REQ_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        data: action.payload,
      };
    case GET_PLOT_TRANSFER_REQ_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case GET_PLOT_TRANSFER_REQ_BY_ID:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        transReqById: null,
        error: {},
      };
    case GET_PLOT_TRANSFER_REQ_BY_ID_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        transReqById: action.payload,
      };
    case GET_PLOT_TRANSFER_REQ_BY_ID_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
