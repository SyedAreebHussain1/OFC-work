import {
  GET_PAYMENT_SCHEDULE,
  GET_PAYMENT_SCHEDULE_SUCCESS,
  GET_PAYMENT_SCHEDULE_FAILURE,
  ADD_PAYMENT_SCHEDULE,
  ADD_PAYMENT_SCHEDULE_SUCCESS,
  ADD_PAYMENT_SCHEDULE_FAILURE,
  ADD_PAYMENT_SCHEDULE_PATH,
  UPDATE_SCHEDULE,
  UPDATE_SCHEDULE_SUCCESS,
  UPDATE_SCHEDULE_FAILURE,
  UPDATE_SCHEDULE_PATH,
  GET_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE,
  GET_PROJECT_PATH,
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  ADD_PROJECT_PATH,
  UPDATE_PROJECT,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  UPDATE_PROJECT_PATH,
  GET_SECTORS,
  GET_SECTORS_SUCCESS,
  GET_SECTORS_FAILURE,
  GET_SECTORS_PATH,
  ADD_SECTORS,
  ADD_SECTORS_SUCCESS,
  ADD_SECTORS_FAILURE,
  ADD_SECTORS_PATH,
  UPDATE_SECTORS,
  UPDATE_SECTORS_SUCCESS,
  UPDATE_SECTORS_FAILURE,
  UPDATE_SECTORS_PATH,
  GET_STREETS,
  GET_STREETS_SUCCESS,
  GET_STREETS_FAILURE,
  GET_STREETS_PATH,
  ADD_STREETS,
  ADD_STREETS_SUCCESS,
  ADD_STREETS_FAILURE,
  ADD_STREETS_PATH,
  UPDATE_STREETS,
  UPDATE_STREETS_SUCCESS,
  UPDATE_STREETS_FAILURE,
  UPDATE_STREETS_PATH,
} from "../constant";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  getPaymentSchedules: [],
  getProjects: [],
  getSectors: [],
  getStreets: [],
  apprveMsg: "",
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    //PAYMENT SCHEDULES
    case GET_PAYMENT_SCHEDULE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        getPaymentSchedules: [],
        error: {},
      };
    case GET_PAYMENT_SCHEDULE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        getPaymentSchedules: action.payload,
      };
    case GET_PAYMENT_SCHEDULE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case ADD_PAYMENT_SCHEDULE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        apprveMsg: "",
        error: {},
      };
    case ADD_PAYMENT_SCHEDULE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        apprveMsg: action.payload,
      };
    case ADD_PAYMENT_SCHEDULE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case UPDATE_SCHEDULE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        apprveMsg: "",
        error: {},
      };
    case UPDATE_SCHEDULE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        apprveMsg: action.payload,
      };
    case UPDATE_SCHEDULE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    //PROJECTS
    case GET_PROJECT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        getProjects: [],
        error: {},
      };
    case GET_PROJECT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        getProjects: action.payload,
      };
    case GET_PROJECT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case ADD_PROJECT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        apprveMsg: "",
        error: {},
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        apprveMsg: action.payload,
      };
    case ADD_PROJECT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case UPDATE_PROJECT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        apprveMsg: "",
        error: {},
      };
    case UPDATE_PROJECT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        apprveMsg: action.payload,
      };
    case UPDATE_PROJECT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    //SECTORS

    case GET_SECTORS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        getSectors: [],
        error: {},
      };
    case GET_SECTORS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        getSectors: action.payload,
      };
    case GET_SECTORS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case ADD_SECTORS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        apprveMsg: "",
        error: {},
      };
    case ADD_SECTORS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        apprveMsg: action.payload,
      };
    case ADD_SECTORS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case UPDATE_SECTORS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        apprveMsg: "",
        error: {},
      };
    case UPDATE_SECTORS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        apprveMsg: action.payload,
      };
    case UPDATE_SECTORS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    // STREETS

    case GET_STREETS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        getStreets: [],
        error: {},
      };
    case GET_STREETS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        getStreets: action.payload,
      };
    case GET_STREETS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case ADD_STREETS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        apprveMsg: "",
        error: {},
      };
    case ADD_STREETS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        apprveMsg: action.payload,
      };
    case ADD_STREETS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case UPDATE_STREETS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        apprveMsg: "",
        error: {},
      };
    case UPDATE_STREETS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        apprveMsg: action.payload,
      };
    case UPDATE_STREETS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
