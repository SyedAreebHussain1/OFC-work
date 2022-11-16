import {
  

   
  
  UPDATE_PLOT_STATUS,
  UPDATE_PLOT_STATUS_SUCCESS, UPDATE_PLOT_STATUS_FAILURE, SALE_ORDER, SALE_ORDER_SUCCESS, SALE_ORDER_FAILURE
} from "../constant.js";
const INITIAL_STATE = {
  Users: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Updatestatus: null,
  Order: null,
};


export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case UPDATE_PLOT_STATUS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Updatestatus: null,
        error: {},
      };
    case UPDATE_PLOT_STATUS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Updatestatus: action.payload,
      };
    case UPDATE_PLOT_STATUS_FAILURE:
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
        Order: null,
        error: {},
      };
    case SALE_ORDER_SUCCESS:

      return {

        ...states,
        isLoading: false,
        isLoggedIn: true,
        Order: action.payload,
      };
    case SALE_ORDER_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
   
          
          
  }
};
