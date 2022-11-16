import {
  GETALLREQUEST,
  GETALLREQUEST_SUCCESS,
  GETALLREQUEST_FAILURE,
  GETALLREQUEST_PATH,
  UPDATEREQUEST,
  UPDATEREQUEST_SUCCESS,
  UPDATEREQUEST_FAILURE,
  UPDATE_PATH,
} from "../constant";
const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Response: null,
  Responseupdate: null,
  Update: null,
  UpdatePayment: null,
  UpdatePaymentStageRes: null,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case GETALLREQUEST:
      return {
        ...states,
        isLoading: true,
        isError: false,
        Response: null,
        isLoggedIn: false,
        error: {},
      };
    case GETALLREQUEST_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case GETALLREQUEST_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case UPDATEREQUEST:
      return {
        ...states,
        isLoading: true,
        isError: false,
        Response: null,
        isLoggedIn: false,
        error: {},
      };
    case UPDATEREQUEST_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Responseupdate: action.payload,
      };
    case UPDATEREQUEST_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
