import {
  GET_COMPANY_WALLET,
  GET_COMPANY_WALLET_SUCCESS,
  GET_COMPANY_WALLET_FAILURE,
} from "../constant";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  GetCompnayWallet: [],
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case GET_COMPANY_WALLET:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        GetCompnayWallet: [],
        error: {},
      };
    case GET_COMPANY_WALLET_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        GetCompnayWallet: action.payload,
      };
    case GET_COMPANY_WALLET_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
