import {
  GET_PLOT_CANCEL_REQUEST_AGENT,
  GET_PLOT_CANCEL_REQUEST_AGENT_SUCCESS,
  GET_PLOT_CANCEL_REQUEST_AGENT_FAILURE,
  GET_PLOT_CANCEL_REQUEST_AGENT_PATH,
  GET_PLOT_CANCEL_REQUEST_AGENT_ID,
  GET_PLOT_CANCEL_REQUEST_AGENT_ID_SUCCESS,
  GET_PLOT_CANCEL_REQUEST_AGENT_ID_FAILURE,
  GET_PLOT_CANCEL_REQUEST_AGENT_ID_PATH,
  GET_REFUND_LIST_AGENT,
  GET_REFUND_LIST_AGENT_SUCCESS,
  GET_REFUND_LIST_AGENT_FAILURE,
  UPDATE_REFUND_LIST_AGENT,
  UPDATE_REFUND_LIST_AGENT_SUCCESS,
  UPDATE_REFUND_LIST_AGENT_FAILURE,
} from "../constant";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  data: [],
  refundData: [],
  cancelReqById: null,
  updateRefund: "",
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case GET_PLOT_CANCEL_REQUEST_AGENT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        data: [],
        error: {},
      };
    case GET_PLOT_CANCEL_REQUEST_AGENT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        data: action.payload,
      };
    case GET_PLOT_CANCEL_REQUEST_AGENT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case GET_PLOT_CANCEL_REQUEST_AGENT_ID:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        cancelReqById: null,
        error: {},
      };
    case GET_PLOT_CANCEL_REQUEST_AGENT_ID_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        cancelReqById: action.payload,
      };
    case GET_PLOT_CANCEL_REQUEST_AGENT_ID_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case GET_REFUND_LIST_AGENT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        refundData: null,
        error: {},
      };
    case GET_REFUND_LIST_AGENT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        refundData: action.payload,
      };
    case GET_REFUND_LIST_AGENT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case UPDATE_REFUND_LIST_AGENT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,

        error: {},
      };
    case UPDATE_REFUND_LIST_AGENT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        updateRefund: action.payload,
      };
    case UPDATE_REFUND_LIST_AGENT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
