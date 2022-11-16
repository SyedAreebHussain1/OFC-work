import {
  AllPROJECTSGRAPH, AllPROJECTSGRAPH_FAILURE, AllPROJECTSGRAPH_SUCCESS,
  PROJECTREPORT, PROJECTREPORT_SUCCESS, PROJECTREPORT_FAILURE,
} from "../constant";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Report: null,
  AllProjects: null,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case AllPROJECTSGRAPH:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        AllProjects: null,
        error: {},
      };
    case AllPROJECTSGRAPH_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        AllProjects: action.payload,
      };
    case AllPROJECTSGRAPH_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PROJECTREPORT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Report: null,
        error: {},
      };
    case PROJECTREPORT_SUCCESS:
  
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Report: action.payload,
      };
    case PROJECTREPORT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
