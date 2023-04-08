import {
    CUSTOMER_DATA,
    CUSTOMER_DATA_SUCCESS,
    CUSTOMER_DATA_FAILURE
} from "../constant"

const INITIAL_STATE = {
    CustomerUpdatedData : null,
}

export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return states;

      case CUSTOMER_DATA:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          CustomerUpdatedData: null,
          error: {},
        };
      case CUSTOMER_DATA_SUCCESS:
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          CustomerUpdatedData: action.payload,
        };
      case CUSTOMER_DATA_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };
     
    }
  };