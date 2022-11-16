import {
  GET_PLOT_TRANSFER_REQ_FINANCE,
  GET_PLOT_TRANSFER_REQ_FINANCE_SUCCESS,
  GET_PLOT_TRANSFER_REQ_FINANCE_FAILURE,
  PLOT_TRANSFER_REQ_APPROVAL,
  PLOT_TRANSFER_REQ_APPROVAL_SUCCESS,
  PLOT_TRANSFER_REQ_APPROVAL_FAILURE,
  GET_PLOT_TRANSFER_PLOTINFO_BY_ID,
  GET_PLOT_TRANSFER_PLOTINFO_BY_ID_SUCCESS,
  GET_PLOT_TRANSFER_PLOTINFO_BY_ID_FAILURE,
} from "../constant";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  data: [],
  approval_res: null,
  transReqplotinfoById: null,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case GET_PLOT_TRANSFER_REQ_FINANCE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        data: [],
        error: {},
      };
    case GET_PLOT_TRANSFER_REQ_FINANCE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        data: action.payload,
      };
    case GET_PLOT_TRANSFER_REQ_FINANCE_FAILURE:
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
    case GET_PLOT_TRANSFER_PLOTINFO_BY_ID:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        transReqplotinfoById: null,
        error: {},
      };
    case GET_PLOT_TRANSFER_PLOTINFO_BY_ID_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        transReqplotinfoById: action.payload,
      };
    case GET_PLOT_TRANSFER_PLOTINFO_BY_ID_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
