import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  NAV_MENU,
  NAV_MENU_SUCCESS,
  NAV_MENU_FAILURE,
} from "../constant.js";

export class UserLogin {
  static Login() {
    return {
      type: LOGIN,
    };
  }
  static LoginSuccess(response) {
    return {
      type: LOGIN_SUCCESS,
      payload: response,
    };
  }
  static LoginFailure(error) {
    return {
      type: LOGIN_FAILURE,
      error,
    };
  }
}

export class NavMenuAction {
  static Fetch() {
    return {
      type: NAV_MENU,
    };
  }
  static Fetch_Success(response) {
    return {
      type: NAV_MENU_SUCCESS,
      payload: response,
    };
  }
  static Fetch_Failure(error) {
    return {
      type: NAV_MENU_FAILURE,
      error,
    };
  }
}