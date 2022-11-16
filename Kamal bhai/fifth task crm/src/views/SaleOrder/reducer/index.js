import {
  SALE_ORDER,
  SALE_ORDER_SUCCESS,
  SALE_ORDER_FAILURE,
  PAYMENT_TYPE,
  PAYMENT_TYPE_SUCCESS,
  PAYMENT_TYPE_FAILURE,
  PAYMENT_THROUGH,
  PAYMENT_THROUGH_SUCCESS,
  PAYMENT_THROUGH_FAILURE,
  CURRENCY_TYPE,
  CURRENCY_TYPE_SUCCESS,
  CURRENCY_TYPE_FAILURE,
  PAYMENT_SCHEDULE,
  PAYMENT_SCHEDULE_FAILURE,
  PAYMENT_SCHEDULE_SUCCESS,
  SHORT_PAYMENT_SCHEDULE,
  SHORT_PAYMENT_SCHEDULE_FAILURE,
  SHORT_PAYMENT_SCHEDULE_SUCCESS,
  PAYMENT_STAGES,
  PAYMENT_STAGES_SUCCESS,
  PAYMENT_STAGES_FAILURE,
  CUSTOM_PLAN_GENERATE,
  CUSTOM_PLAN_GENERATE_FAILURE,
  CUSTOM_PLAN_GENERATE_SUCCESS,
  PRINT_SALEORDER_PLAN,
  PRINT_SALEORDER_PLAN_FAILURE,
  PRINT_SALEORDER_PLAN_SUCCESS,
  PRINT_FULL_SALEORDER_PLAN,
  PRINT_FULL_SALEORDER_PLAN_FAILURE,
  PRINT_FULL_SALEORDER_PLAN_SUCCESS,
  PRINT_CUSTOM_PLAN,
  PRINT_CUSTOM_PLAN_FAILURE,
  PRINT_CUSTOM_PLAN_SUCCESS,
} from "../constant";

const INITIAL_STATE = {
  SalesOrder: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Response: null,

  PaymentType: null,
  PaymentThrough: null,
  CurrencyType: null,
  PaymentSchedule: null,
  ShortPaymentSchedule: null,
  Stages: null,
  CustomPlan: null,

  PrintOrderPlan: null,
  PrintCustomPlan: null,
  PrintFullPlan: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case PRINT_FULL_SALEORDER_PLAN:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PrintFullPlan: null,
        error: {},
      };
    case PRINT_FULL_SALEORDER_PLAN_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PrintFullPlan: action.payload,
      };
    case PRINT_FULL_SALEORDER_PLAN_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PRINT_CUSTOM_PLAN:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PrintCustomPlan: null,
        error: {},
      };
    case PRINT_CUSTOM_PLAN_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PrintCustomPlan: action.payload,
      };
    case PRINT_CUSTOM_PLAN_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PRINT_SALEORDER_PLAN:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PrintOrderPlan: null,
        error: {},
      };
    case PRINT_SALEORDER_PLAN_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PrintOrderPlan: action.payload,
      };
    case PRINT_SALEORDER_PLAN_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case CUSTOM_PLAN_GENERATE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        CustomPlan: null,
        error: {},
      };
    case CUSTOM_PLAN_GENERATE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        CustomPlan: action.payload,
      };
    case CUSTOM_PLAN_GENERATE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case SALE_ORDER:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        SalesOrder: null,
        error: {},
      };
    case SALE_ORDER_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        SalesOrder: action.payload,
      };
    case SALE_ORDER_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PAYMENT_TYPE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PaymentType: null,
        error: {},
      };
    case PAYMENT_TYPE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PaymentType: action.payload,
      };
    case PAYMENT_TYPE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PAYMENT_THROUGH:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PaymentThrough: null,
        error: {},
      };
    case PAYMENT_THROUGH_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PaymentThrough: action.payload,
      };
    case PAYMENT_THROUGH_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case CURRENCY_TYPE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        CurrencyType: null,
        error: {},
      };
    case CURRENCY_TYPE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        CurrencyType: action.payload,
      };
    case CURRENCY_TYPE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PAYMENT_SCHEDULE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PaymentSchedule: null,
        error: {},
      };
    case PAYMENT_SCHEDULE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PaymentSchedule: action.payload,
      };
    case PAYMENT_SCHEDULE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case SHORT_PAYMENT_SCHEDULE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        ShortPaymentSchedule: null,
        error: {},
      };
    case SHORT_PAYMENT_SCHEDULE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        ShortPaymentSchedule: action.payload,
      };
    case SHORT_PAYMENT_SCHEDULE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PAYMENT_STAGES:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Stages: null,
        error: {},
      };
    case PAYMENT_STAGES_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Stages: action.payload,
      };
    case PAYMENT_STAGES_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
