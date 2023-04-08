import {
  GET_DASHBOARD_WALLET,
  GET_DASHBOARD_WALLET_SUCCESS,
  GET_DASHBOARD_WALLET_FAILURE,
  GET_WALLET_HISTORY,
  GET_WALLET_HISTORY_SUCCESS,
  GET_WALLET_HISTORY_FAILURE,
  UPDATEREQUEST,
  UPDATEREQUEST_SUCCESS,
  UPDATEREQUEST_FAILURE,
} from "../constant";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  GetDashboardWallet: [],
  GetWalletHistory: [],
  Responseupdate: null,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case GET_DASHBOARD_WALLET:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        GetDashboardWallet: [],
        error: {},
      };
    case GET_DASHBOARD_WALLET_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        GetDashboardWallet: action.payload,
      };
    case GET_DASHBOARD_WALLET_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    // HISTORY OF WALLET

    case GET_WALLET_HISTORY:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        GetWalletHistory: [],
        error: {},
      };
    case GET_WALLET_HISTORY_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        GetWalletHistory: action.payload,
      };
    case GET_WALLET_HISTORY_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    // UPDATE OR REJECT

    case UPDATEREQUEST:
      return {
        ...states,
        isLoading: true,
        isError: false,
        Response: null,
        isLoggedIn: false,
        error: {},
      };
    case UPDATEREQUEST_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Responseupdate: action.payload,
      };
    case UPDATEREQUEST_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
