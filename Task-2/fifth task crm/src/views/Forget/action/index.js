import { FORGET, FORGET_SUCCESS, FORGET_FAILURE } from "../constant.js";
export class UserForget {
  static Forget() {
    return {
      type: FORGET,
    };
  }
  static ForgetSuccess(response) {
    return {
      type: FORGET_SUCCESS,
      payload: response,
    };
  }
  static ForgetFailure(error) {
    return {
      type: FORGET_FAILURE,
      error,
    };
  }
}
