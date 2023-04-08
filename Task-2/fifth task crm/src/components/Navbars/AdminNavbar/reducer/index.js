import {
  NOTIFICATIONS,
  NOTIFICATIONS_SUCCESS,
  NOTIFICATIONS_FAILURE,
  UPDATE_NOTIFICATIONS,
  UPDATE_NOTIFICATIONS_SUCCESS,
  UPDATE_NOTIFICATIONS_FAILURE,
  READ_NOTIFICATIONS,
  READ_NOTIFICATIONS_SUCCESS,
  READ_NOTIFICATIONS_FAILURE,
} from "../constant";
const INITIAL_STATE = {
  Data: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  res: null,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;
    case NOTIFICATIONS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Data: null,
        error: {},
      };
    case NOTIFICATIONS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Data: action.payload,
      };
    case NOTIFICATIONS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case UPDATE_NOTIFICATIONS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case UPDATE_NOTIFICATIONS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case UPDATE_NOTIFICATIONS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case READ_NOTIFICATIONS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        res: null,
        error: {},
      };
    case READ_NOTIFICATIONS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        res: action.payload,
      };
    case READ_NOTIFICATIONS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
