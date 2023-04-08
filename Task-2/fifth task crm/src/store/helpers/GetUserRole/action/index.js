import {
    GET_USER_ROLE,
    GET_USER_ROLE_SUCCESS,
    GET_USER_ROLE_FAILURE,
  } from "../constant.js";
  export class FetchUserRole {
    static Fetch() {
      return {
        type: GET_USER_ROLE,
      };
    }
    static FetchSuccess(response) {
      return {
        type: GET_USER_ROLE_SUCCESS,
        payload: response,
      };
    }
    static FetchFailure(error) {
      return {
        type: GET_USER_ROLE_FAILURE,
        error,
      };
    }
  }
  