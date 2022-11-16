import {
    PAYMENTDETAIL,
    PAYMENTDETAIL_SUCCESS,PAYMENTDETAIL_FAILURE,
    PAYMENTSTATUS,PAYMENTSTATUS_SUCCESS,PAYMENTSTATUS_FAILURE,
    PAYMENTERECIEPT,PAYMENTERECIEPT_SUCCESS,
    PAYMENTERECIEPT_FAILURE,
    PAYMENTERECIEPTCOUNT,
    PAYMENTERECIEPTCOUNT_FAILURE,
    PAYMENTERECIEPTCOUNT_SUCCESS
  } from "../constant";
  const INITIAL_STATE = {
 
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    PaymentResponse:null,
    Status:null,
    ReceiptResponse:null,
    Count:null,
  };
  export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return states;
        case PAYMENTERECIEPTCOUNT:
          return {
            ...states,
            isLoading: true,
            isError: false,
            isLoggedIn: false,
            Count: null,
            error: {},
          };
        case PAYMENTERECIEPTCOUNT_SUCCESS:
          return {
            ...states,
            isLoading: false,
            isLoggedIn: true,
            Count: action.payload,
          };
        case PAYMENTERECIEPTCOUNT_FAILURE:
          return {
            ...states,
            isLoading: false,
            isError: true,
            error: action.error,
          };
        case PAYMENTDETAIL:
          return {
            ...states,
            isLoading: true,
            isError: false,
            isLoggedIn: false,
            PaymentResponse: null,
            error: {},
          };
        case PAYMENTDETAIL_SUCCESS:
          return {
            ...states,
            isLoading: false,
            isLoggedIn: true,
            PaymentResponse: action.payload,
          };
        case PAYMENTDETAIL_FAILURE:
          return {
            ...states,
            isLoading: false,
            isError: true,
            error: action.error,
          };
  
      case PAYMENTDETAIL:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          PaymentResponse: null,
          error: {},
        };
      case PAYMENTDETAIL_SUCCESS:
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          PaymentResponse: action.payload,
        };
      case PAYMENTDETAIL_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };


        case PAYMENTSTATUS:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          Status: null,
          error: {},
        };
      case PAYMENTSTATUS_SUCCESS:
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          Status: action.payload,
        };
      case PAYMENTSTATUS_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };








        case PAYMENTERECIEPT:
          return {
            ...states,
            isLoading: true,
            isError: false,
            isLoggedIn: false,
            PaymentResponse: null,
            error: {},
          };
        case PAYMENTDETAIL_SUCCESS:
          return {
            ...states,
            isLoading: false,
            isLoggedIn: true,
            PaymentResponse: action.payload,
          };
        case PAYMENTDETAIL_FAILURE:
          return {
            ...states,
            isLoading: false,
            isError: true,
            error: action.error,
          };
    
    }
  };
  