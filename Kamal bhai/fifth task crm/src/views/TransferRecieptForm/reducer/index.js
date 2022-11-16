import {
    AMOUNT,
    AMOUNT_SUCCESS,
    AMOUNT_FAILURE,
    PAYMENTTHROUGH,PAYMENTTHROUGH_SUCCESS,PAYMENTTHROUGH_FAILURE,
    PAYMENTTYPE,PAYMENTTYPE_SUCCESS,PAYMENTTYPE_FAILURE,

    PAYMENT_RECIPT,
    PAYMENT_RECIPT_SUCCESS,
    PAYMENT_RECIPT_FAILURE,
    GETTRANSFERINFO,GETTRANSFERINFO_FAILURE,GETTRANSFERINFO_SUCCESS

    // UPDATE_PAYMENT_STAGE,
    // UPDATE_PAYMENT_STAGE_SUCCESS,
    // UPDATE_PAYMENT_STAGE_FAILURE
  } from "../constant";

  const INITIAL_STATE = {
    PaymentAmount: null,
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    PaymentThrough:null,
    PaymentType:null,
    PaymentMode:null,

    Insert_Payment_Recipt:null,
    TransferInfo:null,
    // Update_Payment_stages:null,
  };

  export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return states;
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


          case GETTRANSFERINFO:
          return {
            ...states,
            isLoading: true,
            isError: false,
            isLoggedIn: false,
            TransferInfo: null,
            error: {},
          };
        case GETTRANSFERINFO_SUCCESS:
          return {
            ...states,
            isLoading: false,
            isLoggedIn: true,
            TransferInfo: action.payload,
          };
        case GETTRANSFERINFO_FAILURE:
          return {
            ...states,
            isLoading: false,
            isError: true,
            error: action.error,
          };
         
    }
  };