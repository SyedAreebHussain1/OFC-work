import {
    VERIFY_LOGIN_JWT,
    VERIFY_LOGIN_JWT_SUCCESS,
    VERIFY_LOGIN_JWT_FAILURE
  } from "../constant.js";
  export class JwtUser {
    static Jwt() {
      return {
        type: VERIFY_LOGIN_JWT,
      };
    }
    static JwtSuccess(response) {
      return {
        type: VERIFY_LOGIN_JWT_SUCCESS,
        payload: response,
      };
    }
    static JwtFailure(error) {
      return {
        type: VERIFY_LOGIN_JWT_FAILURE,
        error,
      };
    }
  }
  