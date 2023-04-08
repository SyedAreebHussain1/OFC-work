import { 
    VERIFY_LOGIN_JWT,
    VERIFY_LOGIN_JWT_SUCCESS,
    VERIFY_LOGIN_JWT_FAILURE
} from "../constant.js"

const INITIAL_STATE = {
    GetUserJWTLogin: null,
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
  };

  export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return states;
      case VERIFY_LOGIN_JWT:
        return {
          ...states,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          GetUserJWTLogin: null,
          error: {},
        };
      case VERIFY_LOGIN_JWT_SUCCESS:
        return {
          ...states,
          isLoading: false,
          isLoggedIn: true,
          GetUserJWTLogin: action.payload,
        };
      case VERIFY_LOGIN_JWT_FAILURE:
        return {
          ...states,
          isLoading: false,
          isError: true,
          error: action.error,
        };
    }
  };