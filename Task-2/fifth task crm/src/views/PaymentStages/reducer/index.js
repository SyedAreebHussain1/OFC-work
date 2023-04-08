import {
  GET_SALE_ORDER,
  GET_SALE_ORDER_SUCCESS,
  GET_SALE_ORDER_FAILURE,
  GET_PAYMENT_STAGES,
  GET_PAYMENT_STAGES_SUCCESS,
  GET_PAYMENT_STAGES_FAILURE,
  GET_FULL_PAYMENT_STAGES,
  GET_FULL_PAYMENT_STAGES_FAILURE,
  GET_FULL_PAYMENT_STAGES_SUCCESS,
  GET_PAYMENT_SCHEDULE,
  GET_PAYMENT_SCHEDULE_FAILURE,
  GET_PAYMENT_SCHEDULE_SUCCESS,
  GET_SALE_ORDER_BY_ID,
  GET_SALE_ORDER_BY_ID_SUCCESS,
  GET_SALE_ORDER_BY_ID_FAILURE,
  GET_RECIEPT_BY_ID,
  GET_RECIEPT_BY_ID_SUCCESS,
  GET_RECIEPT_BY_ID_FAILURE,
} from "../constant.js";
const INITIAL_STATE = {
  Get_SalesOrder: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Get_PaymentStages: null,
  GetPaymentPlan: null,
  schedule: null,
  saleOrderById: null,
  GetRecieptDetailsById: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case GET_RECIEPT_BY_ID:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        GetRecieptDetailsById: null,
        error: {},
      };
    case GET_RECIEPT_BY_ID_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        GetRecieptDetailsById: action.payload,
      };
    case GET_RECIEPT_BY_ID_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case GET_SALE_ORDER_BY_ID:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        saleOrderById: null,
        error: {},
      };
    case GET_SALE_ORDER_BY_ID_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        saleOrderById: action.payload,
      };
    case GET_SALE_ORDER_BY_ID_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case GET_PAYMENT_SCHEDULE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        schedule: null,
        error: {},
      };
    case GET_PAYMENT_SCHEDULE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        schedule: action.payload,
      };
    case GET_PAYMENT_SCHEDULE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case GET_FULL_PAYMENT_STAGES:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        GetPaymentPlan: null,
        error: {},
      };
    case GET_FULL_PAYMENT_STAGES_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        GetPaymentPlan: action.payload,
      };
    case GET_FULL_PAYMENT_STAGES_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case GET_SALE_ORDER:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Get_SalesOrder: null,
        error: {},
      };
    case GET_SALE_ORDER_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Get_SalesOrder: action.payload,
      };
    case GET_SALE_ORDER_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case GET_PAYMENT_STAGES:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Get_PaymentStages: null,
        error: {},
      };
    case GET_PAYMENT_STAGES_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Get_PaymentStages: action.payload,
      };
    case GET_PAYMENT_STAGES_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
