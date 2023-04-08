import {
    PLOTRETURN,PLOTRETURN_FAILURE,PLOTRETURN_SUCCESS,PLOTINFO,PLOTINFO_FAILURE,PLOTINFO_SUCCESS,
    UPDATEPLOTRETURNREQ, UPDATEPLOTRETURNREQ_FAILURE,UPDATEPLOTRETURNREQ_SUCCESS
  } from "../constant";
  const INITIAL_STATE = {
 
    isLoading: false,
    isError: false,
    error: {},
   PlotReturn:null,
   PlotInfo:null,
   UpdateStatus:null,
  };
  export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return states;

        case UPDATEPLOTRETURNREQ:
          return {
            ...states,
            isLoading: true,
            isError: false,
            isLoggedIn: false,
            UpdateStatus: null,
            error: {},
          };
        case UPDATEPLOTRETURNREQ_SUCCESS:
          return {
            ...states,
            isLoading: false,
            isLoggedIn: true,
            UpdateStatus: action.payload,
          };
        case UPDATEPLOTRETURNREQ_FAILURE:
          return {
            ...states,
            isLoading: false,
            isError: true,
            error: action.error,
          };
      case PLOTRETURN:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          PlotReturn: null,
          error: {},
        };
      case PLOTRETURN_SUCCESS:
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          PlotReturn: action.payload,
        };
      case PLOTRETURN_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };
        case PLOTINFO:
          return {
            ...states,
            isLoading: true,
            isError: false,
            isLoggedIn: false,
            PlotInfo: null,
            error: {},
          };
        case PLOTINFO_SUCCESS:
          return {
            ...states,
            isLoading: false,
            isLoggedIn: true,
            PlotInfo: action.payload,
          };
        case PLOTINFO_FAILURE:
          return {
            ...states,
            isLoading: false,
            isError: true,
            error: action.error,
          };


    }
  };
  