import { FORGET, FORGET_SUCCESS, FORGET_FAILURE } from "../constant.js";
import swal from 'sweetalert';
const INITIAL_STATE = {
    Data: null,
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
  };

  // eslint-disable-next-line import/no-anonymous-default-export
  export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return states;
      case FORGET:
   
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          Data: null,
          error: {},
        };
      case FORGET_SUCCESS:
        
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          Data: action.payload,
        };
      case FORGET_FAILURE:
       
  
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };
    }
  };
  