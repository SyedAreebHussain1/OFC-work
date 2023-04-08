import {
    QUOTATION,QUOTATION_FAILURE,QUOTATION_SUCCESS
    } from "../constant.js";
    const INITIAL_STATE = {
      
      isLoading: false,
      isError: false,
      error: {},
      isLoggedIn: false,
      Quotations:false
      
    };
    
    export default (states = INITIAL_STATE, action) => {
      switch (action.type) {
        default:
          return states;
          case QUOTATION:
            return {
              ...states,
              isLoading: true,
              isError: false,
              isLoggedIn: false,
              Quotations: null,
              error: {},
            };
          case QUOTATION_SUCCESS:
            return {
              ...states,
              isLoading: false,
              isLoggedIn: true,
              Quotations: action.payload,
            };
          case QUOTATION_FAILURE:
            return {
              ...states,
              isLoading: false,
              isError: true,
              error: action.error,
            };
        
         
      }
    };
    