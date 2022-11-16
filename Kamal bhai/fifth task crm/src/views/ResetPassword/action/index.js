import { RESET_PASSWORD, RESET_SUCCESS, RESET_FAILURE } from "../constant.js";
export class UserReset {
  static Reset() {
    return {
      type: RESET_PASSWORD,
    };
  }
  static ResetSuccess(response) {
    return {
      type: RESET_SUCCESS,
      payload: response,
    };
  }
  static ResetFailure(error) {
    return {
      type: RESET_FAILURE,
      error,
    };
  }
}
