import {
AllCHANGEREQUEST,AllCHANGEREQUEST_SUCCESS,AllCHANGEREQUEST_FAILURE,
UPDATEAPPROVALSTATUS_SUCCESS, UPDATEAPPROVALSTATUS, UPDATEAPPROVALSTATUS_FAILURE,
STATUS,STATUS_FAILURE,STATUS_SUCCESS
  
  } from "../constant";
  const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    ChangeRequest:null,
    Update:null,
    AllStatus:null,
   
  };
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return states;
        case STATUS:
          return {
            ...states,
            isLoading: true,
            isError: false,
            isLoggedIn: false,
            AllStatus: null,
            error: {},
          };
        case STATUS_SUCCESS:
          return {
            ...states,
            isLoading: false,
            isLoggedIn: true,
            AllStatus: action.payload,
          };
        case STATUS_FAILURE:
          return {
            ...states,
            isLoading: false,
            isError: true,
            error: action.error,
          };
  
  
  
  
        case AllCHANGEREQUEST:
          return {
            ...states,
            isLoading: true,
            isError: false,
            isLoggedIn: false,
            ChangeRequest: null,
            error: {},
          };
        case AllCHANGEREQUEST_SUCCESS:
          return {
            ...states,
            isLoading: false,
            isLoggedIn: true,
            ChangeRequest: action.payload,
          };
        case AllCHANGEREQUEST_FAILURE:
          return {
            ...states,
            isLoading: false,
            isError: true,
            error: action.error,
          };
          case UPDATEAPPROVALSTATUS:
            return {
              ...states,
              isLoading: true,
              isError: false,
              isLoggedIn: false,
              Update: null,
              error: {},
            };
          case UPDATEAPPROVALSTATUS_SUCCESS:
            return {
              ...states,
              isLoading: false,
              isLoggedIn: true,
              Update: action.payload,
            };
          case UPDATEAPPROVALSTATUS_FAILURE:
            return {
              ...states,
              isLoading: false,
              isError: true,
              error: action.error,
            };
  
  
  
    
  
    };
  }