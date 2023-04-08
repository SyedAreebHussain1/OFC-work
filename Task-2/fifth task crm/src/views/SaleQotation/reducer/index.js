import {
  // QUOTATION,
  // QUOTATION_SUCCESS,
  // QUOTATION_FAILURE,
  PAYMENT,
  PAYMENT_SUCCESS,
  PAYMENT_FAILURE,
  PAYMENT_SHORT,
  PAYMENT_SHORT_SUCCESS,
  PAYMENT_SHORT_FAILURE,
  LEADUSER,
  LEADUSER_FAILURE,
  LEADUSER_SUCCESS,
  UPDATELEADUSER,
  UPDATELEADUSER_FAILURE,
  UPDATELEADUSER_SUCCESS,
  INSERT_SALE_QUOTATION,
  INSERT_SALE_QUOTATION_SUCCESS,
  INSERT_SALE_QUOTATION_FAILURE,
  PACKAGE_FAILURE,
  PACKAGE,
  PACKAGE_SUCCESS,
  GET_PLOT_AMOUNT,
  GET_PLOT_AMOUNT_FAILURE,
  GET_PLOT_AMOUNT_SUCCESS,
} from "../constant.js";
const INITIAL_STATE = {
  QuotationNumber: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Values: null,
  User: null,
  UpdateUser: null,

  InsertQuotationData: null,
  Packages: null,
  PlotPrice: null,
};

export default (body = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return body;
    case GET_PLOT_AMOUNT:
      return {
        ...body,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PlotPrice: null,
        error: {},
      };
    case GET_PLOT_AMOUNT_SUCCESS:
      return {
        ...body,
        isLoading: false,
        isLoggedIn: true,
        PlotPrice: action.payload,
      };
    case GET_PLOT_AMOUNT_FAILURE:
      return {
        ...body,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PACKAGE:
      return {
        ...body,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Packages: null,
        error: {},
      };
    case PACKAGE_SUCCESS:
      return {
        ...body,
        isLoading: false,
        isLoggedIn: true,
        Packages: action.payload,
      };
    case PACKAGE_FAILURE:
      return {
        ...body,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case PACKAGE:
      return {
        ...body,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Packages: null,
        error: {},
      };
    case PACKAGE_SUCCESS:
      return {
        ...body,
        isLoading: false,
        isLoggedIn: true,
        Packages: action.payload,
      };
    case PACKAGE_FAILURE:
      return {
        ...body,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case UPDATELEADUSER:
      return {
        ...body,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        UpdateUser: null,
        error: {},
      };
    case UPDATELEADUSER_SUCCESS:
      return {
        ...body,
        isLoading: false,
        isLoggedIn: true,
        UpdateUser: action.payload,
      };
    case UPDATELEADUSER_FAILURE:
      return {
        ...body,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case LEADUSER:
      return {
        ...body,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        User: null,
        error: {},
      };
    case LEADUSER_SUCCESS:
      return {
        ...body,
        isLoading: false,
        isLoggedIn: true,
        User: action.payload,
      };
    case LEADUSER_FAILURE:
      return {
        ...body,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    // case QUOTATION:
    //   return {
    //     ...body,
    //     isLoading: true,
    //     isError: false,
    //     isLoggedIn: false,
    //     QuotationNumber: null,
    //     error: {},
    //   };
    // case QUOTATION_SUCCESS:
    //   return {
    //     ...body,
    //     isLoading: false,
    //     isLoggedIn: true,
    //     QuotationNumber: action.payload,
    //   };
    // case QUOTATION_FAILURE:
    //   return {
    //     ...body,
    //     isLoading: false,
    //     isError: true,
    //     error: action.error,
    //   };
    case PAYMENT:
      return {
        ...body,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case PAYMENT_SUCCESS:
      return {
        ...body,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case PAYMENT_FAILURE:
      return {
        ...body,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PAYMENT_SHORT:
      return {
        ...body,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Values: null,
        error: {},
      };
    case PAYMENT_SHORT_SUCCESS:
      return {
        ...body,
        isLoading: false,
        isLoggedIn: true,
        Values: action.payload,
      };
    case PAYMENT_SHORT_FAILURE:
      return {
        ...body,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case INSERT_SALE_QUOTATION:
      return {
        ...body,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        InsertQuotationData: null,
        error: {},
      };
    case INSERT_SALE_QUOTATION_SUCCESS:
      return {
        ...body,
        isLoading: false,
        isLoggedIn: true,
        InsertQuotationData: action.payload,
      };
    case INSERT_SALE_QUOTATION_FAILURE:
      return {
        ...body,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
