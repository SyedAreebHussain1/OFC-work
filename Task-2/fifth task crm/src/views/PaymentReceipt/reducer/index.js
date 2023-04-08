import {
  AMOUNT,
  AMOUNT_SUCCESS,
  AMOUNT_FAILURE,
  PAYMENTTHROUGH,
  PAYMENTTHROUGH_SUCCESS,
  PAYMENTTHROUGH_FAILURE,
  PAYMENTTYPE,
  PAYMENTTYPE_SUCCESS,
  PAYMENTTYPE_FAILURE,
  PAYMENT_RECIPT,
  PAYMENT_RECIPT_SUCCESS,
  PAYMENT_RECIPT_FAILURE,
  UPDATE_PAYMENT_STAGE,
  UPDATE_PAYMENT_STAGE_SUCCESS,
  UPDATE_PAYMENT_STAGE_FAILURE,
  WALLET,
  WALLET_FAILURE,
  WALLET_SUCCESS,
  WALLET_REQUEST,
  WALLET_REQUEST_SUCCESS,
  WALLET_REQUEST_FAILURE,
  WALLET_REQUEST_PATH,
  FILE,
  FILE_SUCCESS,
  FILE_FAILURE,
  FILE_PATH,
  BANK,
  BANK_FAILURE,
  BANK_SUCCESS,
} from "../constant";

const INITIAL_STATE = {
  PaymentAmount: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  PaymentThrough: null,
  PaymentType: null,
  PaymentMode: null,

  Insert_Payment_Recipt: null,
  Update_Payment_stages: null,
  walletData: null,
  walletRequestData: null,
  fileData: null,
  banks: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case BANK:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        banks: null,
        error: {},
      };
    case BANK_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        banks: action.payload,
      };
    case BANK_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case WALLET:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        walletData: null,
        error: {},
      };
    case WALLET_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        walletData: action.payload,
      };
    case WALLET_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case FILE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        fileData: null,
        error: {},
      };
    case FILE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        fileData: action.payload,
      };
    case FILE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case WALLET_REQUEST:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        walletRequestData: null,
        error: {},
      };
    case WALLET_REQUEST_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        walletRequestData: action.payload,
      };
    case WALLET_REQUEST_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case AMOUNT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PaymentAmount: null,
        error: {},
      };
    case AMOUNT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PaymentAmount: action.payload,
      };
    case AMOUNT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case PAYMENTTHROUGH:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PaymentThrough: null,
        error: {},
      };
    case PAYMENTTHROUGH_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PaymentThrough: action.payload,
      };
    case PAYMENTTHROUGH_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case PAYMENTTYPE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PaymentType: null,
        error: {},
      };
    case PAYMENTTYPE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PaymentType: action.payload,
      };
    case PAYMENTTYPE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case PAYMENT_RECIPT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Insert_Payment_Recipt: null,
        error: {},
      };
    case PAYMENT_RECIPT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Insert_Payment_Recipt: action.payload,
      };
    case PAYMENT_RECIPT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case UPDATE_PAYMENT_STAGE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Update_Payment_stages: null,
        error: {},
      };
    case UPDATE_PAYMENT_STAGE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Update_Payment_stages: action.payload,
      };
    case UPDATE_PAYMENT_STAGE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
