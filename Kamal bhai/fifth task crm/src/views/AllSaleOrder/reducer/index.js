import { 
    GET_ALL_SALEORDER,
    GET_ALL_SALEORDER_SUCCESS,
    GET_ALL_SALEORDER_FAILURE,

    SALEORDER_DETAILS,
    SALEORDER_DETAILS_SUCCESS,
    SALEORDER_DETAILS_FAILURE
} from "../constant.js"

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    GetSale: null,
    GetSaleStatus:null,
  };


  export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return states;
      case GET_ALL_SALEORDER:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          GetSale: null,
          error: {},
        };
      case GET_ALL_SALEORDER_SUCCESS:
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          GetSale: action.payload,
        };
      case GET_ALL_SALEORDER_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };

        case SALEORDER_DETAILS:
          return {
            ...states,
            isLoading: true,
            isError: false,
            isLoggedIn: false,
            GetSaleStatus: null,
            error: {},
          };
        case SALEORDER_DETAILS_SUCCESS:
          return {
            ...states,
            isLoading: false,
            isLoggedIn: true,
            GetSaleStatus: action.payload,
          };
        case SALEORDER_DETAILS_FAILURE:
          return {
            ...states,
            isLoading: false,
            isError: true,
            error: action.error,
          };
    }
}